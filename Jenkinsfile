pipeline {
    agent any
    
    stages{
        stage('Code'){
            steps{
                git url: 'https://github.com/MR-AMAN123/node-todo-cicd.git', branch: 'master'
            }
        }
        stage('Build'){
            steps{
                echo "building code"
                sh 'docker build . -t mohdaman123/node-todo-test:latest'
            }
        }
        stage('Push'){
            steps{
                withCredentials([usernamePassword(credentialsId: 'dockerHub', passwordVariable: 'dockerHubPassword', usernameVariable: 'dockerHubUser')]) {
                sh "docker login -u ${env.dockerHubUser} -p ${env.dockerHubPassword}"
                sh 'docker push mohdaman123/node-todo-test:latest'
            }
        }
        }
        stage('test'){
            steps{
                echo "testing code"
            }
        }
        stage('deploy'){
            steps{
                echo "deploying code"
                sh "docker-compose down && docker-compose up -d"
            }
        }
    }
}
