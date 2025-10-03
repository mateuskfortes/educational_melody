import { PrismaClient } from "@prisma/client";
import { JWT } from "next-auth/jwt";
import crypto from 'crypto';

const prisma = new PrismaClient()

export async function getRefreshTokenByAccountId(provider: string, providerAccountId: string) {
  try {
    const account = await prisma.account.findUnique({
      where: { provider_providerAccountId: { provider, providerAccountId } }
    })
    return account?.refresh_token ?? undefined
  } catch (error) {
    console.log(error)
    throw error
  }
}

async function refreshGoogleAccessToken(token: JWT) {
  const refreshToken = await getRefreshTokenByAccountId('google', token.id)
  const url =
    "https://oauth2.googleapis.com/token?" +
    new URLSearchParams({
      client_id: process.env.GOOGLE_CLIENT_ID ?? '',
      client_secret: process.env.GOOGLE_CLIENT_SECRET ?? '',
      grant_type: "refresh_token",
      refresh_token: token.refreshToken ?? refreshToken ?? '',
    });

  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    method: "POST",
  });

  const refreshedTokens = await response.json();

  if (!response.ok) {
    throw refreshedTokens;
  }

  return {
    ...token,
    accessToken: refreshedTokens.access_token,
    expires_at: Date.now() + refreshedTokens.expires_in * 1000,
  };
}

async function refreshCredentialsAccessToken(token: JWT) {
  // Busca o refresh token no banco
  const account = await prisma.account.findUnique({
    where: { provider_providerAccountId: { provider: "credentials", providerAccountId: token.id } }
  });

  if (!account?.refresh_token) {
    throw new Error("No refresh token found in the database");
  }

  // Gere novo access token e atualize no banco
  const newAccessToken = crypto.randomUUID();
  const expiresAt = Math.floor(Date.now() / 1000) + 60 * 60; // 1 hora em segundos

  await prisma.account.update({
    where: { provider_providerAccountId: { provider: "credentials", providerAccountId: token.id } },
    data: {
      access_token: newAccessToken,
      expires_at: expiresAt,
    },
  });

  return {
    ...token,
    accessToken: newAccessToken,
    expires_at: expiresAt,
  };

}
/**
 * Takes a token, and returns a new token with updated
 * `accessToken` and `accessTokenExpires`. If an error occurs,
 * returns the old token and an error property
 */
export async function refreshAccessToken(token: JWT) {
  try {
    if (token.provider === 'google') {
      return await refreshGoogleAccessToken(token)
    }
    if (token.provider === 'credentials') {
      return await refreshCredentialsAccessToken(token)
    }
    throw 'Provider not supported'
  } catch (error) {
    console.log(error);

    return {
      ...token,
      error: "RefreshAccessTokenError",
    };
  }
}
