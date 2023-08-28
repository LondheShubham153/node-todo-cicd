pipeline{
    agent any
    stages{
        stage("code"){
            steps{
                git url: "https://github.com/pardeshiumesh23/node-todo-cicd.git", branch: "master"
            }
        }
        stage("Build"){
            steps{
                sh "docker build . -t node-app-test-new"
            }
        }
        stage("Push to Repository"){
            steps{
                withCredentials([usernamePassword(credentialsId:"dockerhub",passwordVariable:"dockerhubPass",usernameVariable:"dockerhubUser")]){
                    sh "docker login -u ${env.dockerhubUser} -p ${env.dockerhubPass}" 
                    sh "docker tag node-app-test-new ${env.dockerhubUser}/node-app-test-new:latest"
                    sh "docker push  ${env.dockerhubUser}/node-app-test-new:latest"
                }
            }
        }
        stage("Deploy"){
            steps{
                sh "docker-compose down && docker-compose up -d"
            }
        }
    }
}
