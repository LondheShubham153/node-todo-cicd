pipeline {
    agent any
    stages {
        stage("Code"){
            steps{
            git url: "https://github.com/sandipumbare90/node-todo-cicd.git", branch: "master"
            echo "Code Copied"
            }
        }
        stage("Build"){
            steps{
            sh "docker build -t node-todo-app:latest ."
            echo "Code Copied"
            }
        }
        stage("Test"){
            steps{
            withCredentials([usernamePassword(credentialsId:"dockerHubCreds",passwordVariable:"dockerHubPass",usernameVariable:"dockerHubUser")]){
            sh "docker login -u ${env.dockerHubUser} -p ${env.dockerHubPass}"
            sh "docker tag node-todo-app:latest ${env.dockerHubUser}/node-todo-app:latest"
            sh "docker push ${env.dockerHubUser}/node-todo-app:latest"
            echo "Testing completed"
            }
          }
        }
        stage("Deploy"){
            steps{
            sh "docker-compose down && docker-compose up -d"
            echo "Deploy completed"
            }
        }
    }
}
