pipeline {
    agent { label 'node-agent1' }
    
    stages {
        stage('Code') {
            steps{
                git url: 'https://github.com/ankitasharma7/node-todo-cicd.git' , branch: 'master'
            }
        }
            stage('Build'){
            steps{
               sh 'docker build . -t ankitasharma88/node-todo-test:latest'
            }
            
        }
        stage('Push'){
            steps{
              withCredentials([usernamePassword(credentialsId: 'docker-hub', passwordVariable: 'dockerHubPassword', usernameVariable: 'dockerHubUser')]) {
        	     sh "docker login -u ${env.dockerHubUser} -p ${env.dockerHubPassword}"
                 sh 'docker push ankitasharma88/node-todo-test:latest'
            }
            }
            
        }
        stage('Test'){
            steps{
                echo "Testing new build"
            }
            
        }
        stage('Deploy'){
            steps{
               sh "docker-compose down && docker-compose up -d"
            }
            
        }
    }
}
