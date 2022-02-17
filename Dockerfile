FROM node:14.17.3-alpine

WORKDIR /usr/app

COPY package*.json ./

RUN npm i

COPY --chown=node:node . .

RUN npm build

CMD ["npm", "run", "start"]


