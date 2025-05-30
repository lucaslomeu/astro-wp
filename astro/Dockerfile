FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install astro

RUN npm install

COPY . .

EXPOSE 4321

CMD ["npm", "run", "dev"]
