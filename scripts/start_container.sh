#!/bin/bash
set -e

# pulling docker images
docker pull amitabhdevops/node-todo-app:v1

# Run the Docker image as a container
docker run -d -p 8000:8000 amitabhdevops/node-todo-app:v1
