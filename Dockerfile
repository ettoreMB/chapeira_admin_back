FROM node:16-alpine

WORKDIR /usr/app

COPY package*.json ./

RUN corepack enable

RUN npm i -g corepack

RUN yarn

COPY --chown=node:node . .

RUN yarn build

CMD ["yarn", "start"]


