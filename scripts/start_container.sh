#!/bin/bash
set -e

# pulling docker images
docker pull amitabhdevops/aws-node-todo-app-cicd:v1

# Run the Docker image as a container
docker run -d -p 8000:8000 amitabhdevops/aws-node-todo-app-cicd:v1
