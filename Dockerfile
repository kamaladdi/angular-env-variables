# Stage 1: Build an Angular Docker Image
FROM node as build
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY . /app
RUN npm run build


# Stage 2, Run the app with ngnix
FROM nginx:alpine
COPY --from=build /app/dist/angular-env-variables/ /usr/share/nginx/html
EXPOSE 80

CMD ["/bin/sh",  "-c",  "envsubst < /usr/share/nginx/html/assets/env.template.js > /usr/share/nginx/html/assets/env.js && exec nginx -g 'daemon off;'"]
