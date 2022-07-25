FROM node:alpine

WORKDIR /usr/app

COPY package*.json ./

RUN yarn install

COPY . .

RUN yarn prisma generate
RUN yarn prisma generate --schema ./prisma/izzistrit.prisma

EXPOSE 3000

CMD ["yarn", "start"]
