FROM node:21-alpine

WORKDIR /app

ADD package.json ./ 

RUN npm install

ADD .eslintrc.cjs .prettierrc.json env.d.ts  index.html  tsconfig.node.json  tsconfig.app.json  vite.config.ts  .env  ./

VOLUME [ "/app/src" ]
VOLUME [ "/app/public" ]

CMD [ "npm", "run", "dev" ]
