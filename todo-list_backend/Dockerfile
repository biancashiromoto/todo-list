FROM node:20-alpine

WORKDIR /todo-list_backend

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

ENTRYPOINT [ "npm", "run" ]

CMD ["start"]