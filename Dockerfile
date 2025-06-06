## build stage ##
FROM node:20-alpine as build
WORKDIR /app
COPY . .
RUN yarn install
RUN yarn build

## run stage ##
FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
