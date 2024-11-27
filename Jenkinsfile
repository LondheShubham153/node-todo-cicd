pipeline {
    agent any
    
    stages{
        stage("Code"){
            steps{
                git url: "https://github.com/DIVYANSH99999/node-todo-cicd.git", branch: "master"
            }
        }
        stage("Build & Test"){
            steps{
                sh "docker build . -t node-app-test-new"
            }
        }
        stage("Push To Repository"){
            steps{
                withCredentials([usernamePassword(credentialsId:"Dockerhub",passwordVariable:"DockerhubPass",usernameVariable:"DockerhubUser")]){
                    sh "docker login -u ${env.DockerhubUser} -p ${env.DockerhubPass}"
                    sh "docker tag node-app-test-new ${env.DockerhubUser}/node-app-test-new:latest"
                    sh "docker push  ${env.DockerhubUser}/node-app-test-new:latest"
                }
            }
        }
        stage("Deploy"){
            steps{
                sh "docker-compose down && docker-compose up -d --build"
            }
        }
    }
}
