FROM node:23-alpine

WORKDIR /app

RUN npm install -g npm@latest

ADD package.json ./ 

RUN npm install --legacy-peer-deps

ADD .eslintrc.cjs .prettierrc.json env.d.ts index.html tsconfig.node.json tsconfig.app.json vite.config.ts .env ./

VOLUME [ "/app/src" ]
VOLUME [ "/app/public" ]

CMD [ "npm", "run", "dev" ]
