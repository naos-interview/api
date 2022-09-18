FROM node:18.7 AS development
WORKDIR /usr/src/app
COPY . .
RUN yarn install
RUN yarn run build
CMD yarn run start:prod