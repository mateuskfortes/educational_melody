import { JWT } from "next-auth/jwt";
import crypto from 'crypto';
import { prisma } from "@/lib/prisma";

export async function getRefreshTokenByAccountId(provider: string, providerAccountId: string) {
  try {
    const account = await prisma.account.findUnique({
      where: { provider_providerAccountId: { provider, providerAccountId } }
    })
    return account?.refresh_token ?? undefined
  } catch (error) {
    throw error
  }
}

async function updateAccountTokens(provider: string, providerAccountId: string, accessToken: string, expiresAt: number) {
  try {
    await prisma.account.update({
      where: { provider_providerAccountId: { provider, providerAccountId } },
      data: {
        access_token: accessToken,
        expires_at: expiresAt,
      },
    });
  } catch (error) {
    throw error;
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
      refresh_token: refreshToken ?? '',
    });

  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    method: "POST",
  });

  const refreshedTokens = await response.json();

  if (!response.ok) throw refreshedTokens;

  await updateAccountTokens(
    'google',
    token.id,
    refreshedTokens.access_token,
    Date.now() + refreshedTokens.expires_in * 1000
  )

  return {
    ...token,
    accessToken: refreshedTokens.access_token,
    expires_at: Date.now() + refreshedTokens.expires_in * 1000,
  };
}

async function refreshCredentialsAccessToken(token: JWT) {
  // Busca o refresh token no banco
  const refreshToken = await getRefreshTokenByAccountId('credentials', token.id)

  if (!refreshToken) throw 'No refresh token found'

  // Gere novo access token e atualize no banco
  const newAccessToken = crypto.randomUUID();
  const expiresAt = Math.floor(Date.now() / 1000) + parseInt(process.env.CREDENTIALS_ACCESS_TOKEN_MAX_AGE ?? '3600');

  await updateAccountTokens(
    'credentials',
    token.id,
    newAccessToken,
    expiresAt * 1000
  )

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
    console.error(error);

    return {
      ...token,
      error: "RefreshAccessTokenError",
    };
  }
}
