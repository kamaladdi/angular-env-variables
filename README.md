## Docker
$ docker build --build-arg APP_ENV=production --build-arg GOOGLE_MAPS_KEY=Xav92daXXjaL -t angular-env-variables:v1 .
$ docker run -p 8080:80 angular-env-variables:v1
```