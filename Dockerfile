FROM node:lts-alpine

RUN mkdir -p /app
WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --pure-lockfile

COPY . ./
