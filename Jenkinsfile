pipeline {
    agent any
    
    stages{
        stage('Code'){
            steps{
                git url: 'https://github.com/billahmustasin/node-todo-cicd.git', branch: 'master' 
            }
        }
        stage('Build'){
            steps{
                sh 'docker build . -t billahmustasin/node-todo-test:latest'
            }
        }
        stage('Push'){
            steps{
                withCredentials([usernamePassword(credentialsId: 'dockerHub', passwordVariable: 'dockerHubPassword', usernameVariable: 'dockerHubUser')]) {
        	 sh "docker login -u ${env.dockerHubUser} -p ${env.dockerHubPassword}"
                 sh 'docker push billahmustasin/node-todo-test:latest'
                }
            }
        }
        stage('Test'){
            steps{
                echo "hey"
            }
        }
        stage('Deploy'){
            steps{
                sh "docker-compose down && docker-compose up -d"
            }
        }
    }
}

