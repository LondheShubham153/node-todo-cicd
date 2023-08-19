pipeline {
    agent any
        stages {
            stage("Code Clone") {
                steps{
                    echo "Cloing code from github.."
                    git url: "https://github.com/ashubambal/node-todo-cicd.git", branch: "dev"
                }
            }
            stage("Code Build & Test") {
                steps{
                    echo "Building and image"
                    sh "docker build -t node-app-demo ."
                }
            }
            stage("Code Push on DockerHub") {
                steps{
                    echo "pushing code on dockerhub"
                    withCredentials([usernamePassword(credentialsId:"dockerhub",passwordVariable:"dockerHubPass",usernameVariable:"dockerHubUser")]){
                        sh "docker login -u ${env.dockerHubUser} -p ${env.dockerHubPass}"
                        sh "docker tag node-app-demo ${env.dockerHubUser}/node-app-demo:latest"
                        sh "docker push ${env.dockerHubUser}/node-app-demo:latest "
                    }
                }
            }
            stage("Code Deploy") {
                steps{
                    echo "Deploying code"
                    sh "docker-compose down && docker-compose up -d"
                }
            }
        }
} 
