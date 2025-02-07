  #!/bin/bash
  set -e

  # Stop any running Docker container
  containerid=$(docker ps -q)
  if [ -n "$containerid" ]; then
    docker stop $containerid && docker rm -f $containerid
  else
    echo "No running containers to remove."
  fi
