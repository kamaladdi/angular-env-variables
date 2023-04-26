## Docker
```bash
$ docker build -t angular-env-variables:v1 .
$ docker run -p 8080:80 -e NG_APP_ENV=production -e NG_GOOGLE_MAPS_KEY=Xav92daXXjaL angular-env-variables:v1
```


## Local env
- export local variable in powershell for test only
```bash
$ $env:NG_APP_ENV = 'LOCAL'
$ node -e "console.log(process.env.NG_APP_ENV)"
```