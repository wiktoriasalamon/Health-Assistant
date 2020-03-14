FROM node:current-alpine

WORKDIR /frontend

COPY package*.json ./
RUN npm install

COPY . .
EXPOSE 4001
CMD ["npm", "start"]
