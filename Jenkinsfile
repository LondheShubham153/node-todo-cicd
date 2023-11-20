pipeline {
    agent any
    
    stages {
        
        stage("code"){
            steps{
                git url: "https://github.com/avikdutt/node-todo-cicd", branch: "master"
                echo 'code clone is done'
            }
        }
        stage("build & test"){
            steps{
                sh "docker build -t node-app-test-new2 ."
                echo 'code build is done'
                
            }
        }
        stage("scan image"){
            steps{
                echo "image scanning done"
            }
        }
        stage("push"){
            steps{
                withCredentials([usernamePassword(credentialsId:"dockerHub",passwordVariable:"dockerHubPass",usernameVariable:"dockerHubUser")]){
                sh "docker login -u ${env.dockerHubUser} -p ${env.dockerHubPass}"
                sh "docker tag node-app-test-new2:latest ${env.dockerHubUser}/node-app-test-new2:latest"
                sh "docker push ${env.dockerHubUser}/node-app-test-new2:latest"
                echo 'code pushed'
                }
                
            }
        }
        stage("deploy"){
            steps{
                sh "docker-compose down && docker-compose up -d"
                echo 'code deployed'
            }
        }
    }
}
