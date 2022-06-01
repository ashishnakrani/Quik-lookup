FROM node:alpine as install

WORKDIR /install
ENV NODE_ENV=production
COPY yarn.lock ./
COPY package.json ./package.json

RUN yarn

FROM node:alpine as production
ENV NODE_ENV=production
WORKDIR /build

COPY --from=install /install/. ./

COPY . .
RUN yarn build-css

RUN yarn build

EXPOSE 3000

CMD node index.js