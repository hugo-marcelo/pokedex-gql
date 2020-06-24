FROM node:13.12.0-alpine
WORKDIR /app/pokedex-gql
COPY . .
RUN npm i -g serve
RUN yarn
RUN yarn build
CMD ["serve", "-s", "build"]
EXPOSE 5000
