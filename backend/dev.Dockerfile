FROM node:21-alpine

WORKDIR /app

ADD package.json ./

RUN npm install

ADD bin ./bin

CMD [ "npm", "run", "dev" ]
