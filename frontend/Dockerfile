FROM node:21-alpine

WORKDIR /app

ADD package.json package-lock.json ./ 

RUN npm install

ADD .eslintrc.cjs .prettierrc.json env.d.ts index.html tsconfig.node.json tsconfig.app.json vite.config.ts ./

COPY src ./src
COPY public ./public

RUN npm build

WORKDIR /app

CMD [ "npm", "start" ]
