FROM node:24-alpine
LABEL org.opencontainers.image.source="https://github.com/Hime-Sound-Labs/Harmony.Web.React"
WORKDIR /app
COPY package.json .
RUN npm install
RUN npm i serve -g
COPY . .
RUN npm run build
ENTRYPOINT [ "serve", "-s", "dist" ]
