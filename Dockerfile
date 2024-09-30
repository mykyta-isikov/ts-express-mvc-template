FROM node:22-alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package.json ./

RUN npm install

COPY --chown=node:node . .

RUN npm run build

EXPOSE 8080

USER node

CMD [ "npm", "start" ]