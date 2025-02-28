FROM node:23-alpine

WORKDIR /src

RUN npm install -g npm@latest

ADD package.json package-lock.json ./

RUN npm install

WORKDIR /src

ENV NODE_ENV=production

COPY package.json ./
COPY src ./src
COPY bin ./bin

CMD ["npm", "start"]
