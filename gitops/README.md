## Pre-requisites
- for optimal performance ArgoCD requires a minimum of 4GB of RAM to run efficiently. consider utilizing an instance size such as t2.medium or t2.large.
- docker should be up n runnin w sudo privilege
  
## install docker if not already installed
```bash
sudo apt update
```
```bash
sudo apt install -y curl wget apt-transport-https
```
```bash
sudo apt install -y docker.io
```
```bash
sudo systemctl enable --now docker
```
```bash
sudo chown $USER /var/run/docker.sock
```
## install minikube cluster
```bash
curl -Lo minikube https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
```
```bash
chmod +x minikube
sudo mv minikube /usr/local/bin/
```
## install kubectl 
```bash
curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
```
```bash
chmod +x kubectl
sudo mv kubectl /usr/local/bin/
```
## start minikube cluster
```bash
minikube start --driver=docker
```
![Screenshot from 2024-03-11 13-30-46](https://github.com/teresashellvin/node-todo-cicd/assets/146912102/c25744c9-d731-42d4-9327-2ed7b4cf25dc)

#  install argocd

```bash
kubectl create namespace argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml
```

![Screenshot from 2024-03-11 13-31-39](https://github.com/teresashellvin/node-todo-cicd/assets/146912102/e9d1df3e-d481-43ca-9d2b-48c5c88259d3)

wait a few seconds before executin this command
 ```bash
kubectl port-forward svc/argocd-server -n argocd 8088:443 --address 0.0.0.0 &
```
 to resolve the port conflict between jenkins n argocd , i configured argocd to run on port 8088. 

![Screenshot from 2024-03-11 13-34-05](https://github.com/teresashellvin/node-todo-cicd/assets/146912102/9e234187-2a8d-4d12-9682-bd210d5661ab)
![Screenshot from 2024-03-11 13-35-06](https://github.com/teresashellvin/node-todo-cicd/assets/146912102/3eb46fc3-3d81-4647-bd88-18448e1b5f42)
![Screenshot from 2024-03-11 13-35-18](https://github.com/teresashellvin/node-todo-cicd/assets/146912102/8bde6542-df06-45e0-addd-84b801561824)

its important to keep this terminal open as it's currently handlin the connection to the ArgoCD server. opening a new tab for SSH commands will ensure smooth execution without disrupting your current session. 

```bash
kubectl edit secret argocd-initial-admin-secret -n argocd
```
![Screenshot from 2024-03-11 13-36-58](https://github.com/teresashellvin/node-todo-cicd/assets/146912102/07b6adab-7566-4dff-a0c4-bdd17a4f0289)

```bash
echo < password > | base64 -d
```
# now lets get stuff deployed 
![Screenshot from 2024-03-11 13-38-07](https://github.com/teresashellvin/node-todo-cicd/assets/146912102/d93ea3ea-1fae-429f-8011-8bb2d9243270)
![Screenshot from 2024-03-11 13-38-21](https://github.com/teresashellvin/node-todo-cicd/assets/146912102/de4272ca-6f5b-481c-b403-277aa789c3da)
![Screenshot from 2024-03-11 13-39-16](https://github.com/teresashellvin/node-todo-cicd/assets/146912102/3c340419-cb1a-4501-8deb-0aca2cd48363)
ensure to specify the path where your manifests are located 

![Screenshot from 2024-03-11 13-39-53](https://github.com/teresashellvin/node-todo-cicd/assets/146912102/b3352ba2-fba2-414d-adca-7fce08735fcc)
if the deployment.yaml file includes a namespace , make sure to create the namespace




![Screenshot from 2024-03-11 13-40-55](https://github.com/teresashellvin/node-todo-cicd/assets/146912102/a3a7b0a4-9b0d-422f-bb0b-369d57842921)

ArgoCD automatically syncs deployments but if you want to set a specific timer u'll need to configure a ConfigMap accordingly.
```bash
kubectl edit configmap argocd-cmd-params-cm -n argocd
```
![Screenshot from 2024-03-11 13-45-43](https://github.com/teresashellvin/node-todo-cicd/assets/146912102/9e9d62d1-60b5-4c09-a0d2-01e33d0a3903)
```
data:
  timeout.reconciliation: 10s
```

i seamlessly modified manifests , arogcd auto synced showcasing the power of GitOps in production 

![Screenshot from 2024-03-11 13-49-03](https://github.com/teresashellvin/node-todo-cicd/assets/146912102/ee09a9cd-39d2-4aff-ba4b-59b90e41f673)





















