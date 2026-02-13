apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: app-ingress
  namespace: default
spec:
  ingressClassName: "nginx"
  rules:
  - host: invalid.demo.trainwithshubham.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service: 
            name: app-1-service
            port: 
                number: 8000     
