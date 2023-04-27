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


## Kubernetes

```bash
# Load docker image to minikube images  
$ minikube image load angular-env-variables:v1
$ minikube image list
 > docker.io/library/angular-env-variables:v1

# Create the deployment
$ kubectl create deployment angular-service --image=docker.io/library/angular-env-variables:v1 --dry-run=client -o yaml > k8s.yaml 

# Create the service
$ echo --- >> k8s.yaml
$ kubectl create service clusterip angular-service --tcp=8080:8080 --dry-run=client -o=yaml >> k8s.yaml

# Apply changes
$ kubectl apply -f k8s.yaml
$ kubectl get all

----------------------------------------------------------------------------------------
| NAME                                  READY   STATUS    RESTARTS   AGE
| pod/angular-service-9fcb5b8f7-m8ddz   1/1     Running   0          84s
| 
| NAME                      TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)    AGE
| service/angular-service   ClusterIP   10.110.253.247   <none>        8080/TCP   84s
| service/kubernetes        ClusterIP   10.96.0.1        <none>        443/TCP    95d
| 
| NAME                              READY   UP-TO-DATE   AVAILABLE   AGE
| deployment.apps/angular-service   1/1     1            1           84s
| 
| NAME                                        DESIRED   CURRENT   READY   AGE
| replicaset.apps/angular-service-9fcb5b8f7   1         1         1       84s
| -----------------------------------------------------------------------------------------



```


