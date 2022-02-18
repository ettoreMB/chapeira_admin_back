FROM node:16-alpine

ENV YARN_VERSION 1.22.17

WORKDIR /usr/app

COPY package*.json ./

RUN yarn 

COPY . .

RUN yarn build

EXPOSE 3333

CMD npm run start


