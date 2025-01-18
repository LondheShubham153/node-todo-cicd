#!/bin/bash
set -e

# pulling docker images
docker pull amitabhdevops/node-todo-app:v1

# Run the Docker image as a container
docker run -d -p 80:80 amitabhdevops/node-todo-app:v1
