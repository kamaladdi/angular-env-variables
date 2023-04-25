# Stage 1: Build an Angular Docker Image
FROM node as build
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY . /app

ARG APP_ENV=prod
ARG GOOGLE_MAPS_KEY=key

ENV NG_APP_ENV=$APP_ENV
ENV NG_APP_GOOGLE_MAPS_KEY=${GOOGLE_MAPS_KEY}

RUN npm run build

# Stage 2, Run the app with ngnix
FROM nginx:alpine

COPY --from=build /app/dist/angular-env-variables/ /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]