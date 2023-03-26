FROM node:16-alpine

WORKDIR /app

COPY package.json .

RUN npm install --force --only=prod --omit=dev

COPY . .

CMD [ "npm", "start" ]