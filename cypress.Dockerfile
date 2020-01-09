FROM cypress/browsers:node10.16.0-chrome77

ARG http_proxy
ARG https_proxy
ARG no_proxy

ENV CI=1

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --pure-lockfile

COPY . ./
