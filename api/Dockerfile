# syntax=docker/dockerfile:1

ARG NODE_VERSION=22.17.1

FROM node:${NODE_VERSION}-alpine

ENV NODE_ENV development

# Defina a variável DATABASE_URL para apontar ao serviço de banco no Docker
ENV DATABASE_URL="mysql://root:123456@localhost:3306/educational_melody"

WORKDIR /usr/src/app

RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci

COPY . .

RUN npx prisma generate


EXPOSE 3000

CMD npx prisma db push && npx tsx src/server.ts
USER node
