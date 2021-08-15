FROM node:16-buster-slim

WORKDIR /usr/src/app
COPY package.json yarn.lock hardhat.config.ts ./

RUN yarn install
EXPOSE 8545

CMD ["yarn", "run-hardhat"]