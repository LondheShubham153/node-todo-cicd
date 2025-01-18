#!/bin/bash
set -e

# Stop the running container (if any)
containerid=$(docker ps -q)
if [ -n "$containerid" ]; then
  docker stop $containerid && docker rm -f $containerid
else
  echo "No running containers to remove."
fi
