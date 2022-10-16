FROM node:alpine

WORKDIR /usr/app

COPY package*.json ./
COPY . .

RUN yarn install  \
    && yarn prisma generate

EXPOSE 3000

CMD ["yarn", "dev"]
