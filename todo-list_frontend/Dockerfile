FROM node:16.14-alpine

WORKDIR /todo-list_frontend

COPY package*.json ./

RUN npm install

COPY . .

# RUN npm run build

EXPOSE 8080

CMD ["npm", "start"]