FROM node:21-alpine as BUILDER

WORKDIR /app

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN corepack enable

ADD package.json pnpm-lock.yaml ./ 

RUN pnpm install

ADD .eslintrc.cjs .
ADD .prettierrc.json .
ADD env.d.ts .
ADD index.html .
ADD tsconfig.node.json .
ADD tsconfig.app.json .
ADD vite.config.ts .

COPY src ./src
COPY public ./public

RUN pnpm build

FROM node:alpine

WORKDIR /app

COPY --from=BUILDER /app/dist ./

CMD [ "pnpm", "start" ]
