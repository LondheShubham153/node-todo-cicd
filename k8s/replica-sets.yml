apiVersion: apps/v1
kind: ReplicaSet
metadata:
  name: node-app-replica-set
  namespace: node-app
  labels:
    app: guestbook
    tier: node-label
spec:
  # modify replicas according to your case
  replicas: 6
  selector:
    matchLabels:
      tier: node-label
  template:
    metadata:
      namespace: node-app
      labels:
        tier: node-label
    spec:
      containers:
      - name: node-container-rep
        image: trainwithshubham/node-app-batch-6
