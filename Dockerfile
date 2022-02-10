FROM node:16-alpine

WORKDIR /usr/app

COPY package.json ./

RUN npm install

RUN npm install pm2 -g

COPY . .

RUN npm run build

CMD ["pm2-runtime", "dist/shared/infra/http/server.js"]


