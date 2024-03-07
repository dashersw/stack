FROM node:21-alpine AS builder

COPY . /app
WORKDIR /app

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

FROM builder AS prod-deps
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile

FROM builder AS build
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

FROM builder 
COPY --from=prod-deps /app/node_modules /app/node_modules

ENV NODE_ENV=development

ADD bin ./bin

VOLUME [ "/app/src" ]

CMD [ "pnpm", "dev" ]
