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
#### - Deployment
```bash
# Load docker image to minikube images  
$ minikube image load angular-env-variables:v1
$ minikube image list
 > docker.io/library/angular-env-variables:v1

# Create the deployment
$ cd k8s
$ kubectl create deployment angular-app --image=docker.io/library/angular-env-variables:v1 --dry-run=client -o yaml > deployment.yaml
```
- deployment.yaml
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: angular-app
spec:
  replicas: 1
  selector:
    matchLabels:
      app: angular-app
  template:
    metadata:
      labels:
        app: angular-app
    spec:
      containers:
      - image: docker.io/library/angular-env-variables:v1
        name: angular-env-variables
        imagePullPolicy: Never
        ports:
          - containerPort: 80
        env:
        - name: NG_APP_ENV
          value: PROD_KUBE
        - name: NG_GOOGLE_MAPS_KEY
          value: KUBE_GOOGLE_KEY_8798452
```


```bash
# Before the apply check the deployment file to add more info and apply the deployment
$ kubectl apply -f deployment
# show the pod info
$ kubectl get pods -l app=angular-app -o wide

------------------------------------------------------------------------------------------------------------------------
NAME                           READY   STATUS    RESTARTS   AGE     IP           NODE       NOMINATED NODE   READINESS GATES
angular-app-657ff99d8b-9n9j7   1/1     Running   0          5m30s   172.17.0.2   minikube   <none>           <none>
------------------------------------------------------------------------------------------------------------------------
```

#### - Service
```bash
# Create the service
$ echo --- >> k8s.yaml
$ kubectl create service angular-app --tcp=8080:8080 --dry-run=client -o=yaml >> service.yaml
#OR
$ kubectl expose deployment angular-app --port=8001 --type=LoadBalancer
```
- service.yaml
```yaml
apiVersion: v1
kind: Service
metadata:
  name: angular-service
  labels:
    app: angular-service
spec:
  type: LoadBalancer
  ports:
    - port: 8080
      protocol: TCP
      targetPort: 80
  selector:
    app: angular-app

```

### - Config map
```bash
$ kubectl apply -f config-map.yaml
```

#### - Access to the kubernetes resources
```bash
# Port forward the service
$ kubectl port-forward service/angular-service 8001:8001
# Or expose the minikube service
$ minikube service angular-service
```


# Show info
$ kubectl get all

------------------------------------------------------------------------------------------------------------------------
| NAME                                  READY   STATUS    RESTARTS   AGE
| pod/angular-app-9fcb5b8f7-m8ddz   1/1     Running   0          84s
| 
| NAME                      TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)    AGE
| service/angular-app   ClusterIP   10.110.253.247   <none>        8080/TCP   84s
| service/kubernetes        ClusterIP   10.96.0.1        <none>        443/TCP    95d
| 
| NAME                              READY   UP-TO-DATE   AVAILABLE   AGE
| deployment.apps/angular-app   1/1     1            1           84s
| 
| NAME                                        DESIRED   CURRENT   READY   AGE
| replicaset.apps/angular-app-9fcb5b8f7   1         1         1       84s
------------------------------------------------------------------------------------------------------------------------




```


