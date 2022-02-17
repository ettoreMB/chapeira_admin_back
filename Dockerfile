FROM node:16-alpine

WORKDIR /usr/app

RUN npm i -g corepack

COPY package*.json ./

RUN yarn 

COPY --chown=node:node . .

EXPOSE 3333

RUN yarn build

CMD ["node", "./dist/shared/infra/http/server.js"]


