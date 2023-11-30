FROM node:20-alpine

WORKDIR /todo-list_frontend

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "start"]