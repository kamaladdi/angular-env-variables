## Docker
```bash
$ docker build --build-arg APP_ENV=production --build-arg GOOGLE_MAPS_KEY=Xav92daXXjaL -t angular-env-variables:v1 .
$ docker run -p 8080:80 angular-env-variables:v1
```


## Local env
- export local variable in powershell for test only
```bash
$ $env:NG_APP_ENV = 'LOCAL'
$ node -e "console.log(process.env.NG_APP_ENV)"
```