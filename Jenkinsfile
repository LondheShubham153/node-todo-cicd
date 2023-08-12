pipeline {
    agent { label 'Dev-Agent'}
    stages {
        stage('Clone Code') {
            steps {
                echo 'Clonning the code from github repo...'
                git url: 'https://github.com/ashubambal/node-todo-cicd.git', branch: 'master'
            }
        }
        stage('Build and Test') {
            steps {
                echo 'Building and Testing the code...'
                sh 'docker build . -t softconsist/todo-app:latest'
            }
        }
        stage("Push to Docker Hub"){
            steps{
                withCredentials([usernamePassword(credentialsId:"softconsist",passwordVariable:"dockerHubPass",usernameVariable:"dockerHubUser")]){
                sh "docker tag todo-app ${env.dockerHubUser}/todo-app:latest"
                sh "docker login -u ${env.dockerHubUser} -p ${env.dockerHubPass}"
                sh "docker push ${env.dockerHubUser}/todo-app:latest"
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
