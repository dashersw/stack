FROM node:21-alpine AS BUILDER

WORKDIR /src

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN corepack enable

ADD package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

FROM node:alpine

WORKDIR /src

COPY --from=BUILDER /src/node_modules ./node_modules

ENV NODE_ENV=production

COPY package.json ./
COPY src ./src
COPY bin ./bin

CMD ["pnpm", "start"]

