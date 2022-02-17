FROM node:16-alpine

WORKDIR /usr/app

COPY package*.json ./

RUN corepack enable

RUN npm i -g corepack

RUN yarn isntall

COPY --chown=node:node . .

RUN npm run build

CMD ["yarn", "start"]


