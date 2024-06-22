FROM node:21-alpine

WORKDIR /src

ADD package.json package-lock.json ./

RUN npm install

WORKDIR /src

ENV NODE_ENV=production

COPY package.json ./
COPY src ./src
COPY bin ./bin

CMD ["npm", "start"]

