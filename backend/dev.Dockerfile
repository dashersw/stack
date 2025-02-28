FROM node:23-alpine

WORKDIR /app

RUN npm install -g npm@latest

ADD package.json ./

RUN npm install --legacy-peer-deps

ADD bin ./bin

CMD [ "npm", "run", "dev" ]
