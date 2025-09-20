# syntax=docker/dockerfile:1

ARG NODE_VERSION=22.17.1

FROM node:${NODE_VERSION}-alpine

WORKDIR /usr/src/app/api

RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci

COPY . .

RUN npx prisma generate

EXPOSE 3000

USER node

CMD npx prisma db push --accept-data-loss && npx tsx watch src/server.ts
