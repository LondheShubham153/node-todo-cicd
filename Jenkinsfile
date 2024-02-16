pipeline {
    agent any
    
    stages {
        stage("code"){
            steps{
                git url: "https://github.com/LondheShubham153/node-todo-cicd.git", branch: "master"
                echo "code is taken"
            }
            
        }
        stage("build and test"){
            steps{
                sh "docker build -t node-app-test-new ."
                echo "code is build"
            }
        }
        stage("image scan"){
            steps{
                echo "scanned"
            }
        }
        stage("push"){
            steps{
                withCredentials([usernamePassword(credentialsId:"dockerHub", passwordVariable:"dockerHubPass", usernameVariable:"dockerHubUser")]){
                sh "docker login -u ${env.dockerHubUser} -p ${env.dockerHubPass}"
                sh "docker tag node-app-test-new:latest ${env.dockerHubUser}/node-app-test-new:latest"
                sh "docker push ${env.dockerHubUser}/node-app-test-new:latest"
                echo "code is pushed" 
                }
            }
            
        }
        stage("deploy"){
            steps{
                sh "docker-compose down && docker-compose up -d"
                echo "code is deploy"
            }
            
        }
    }
}
