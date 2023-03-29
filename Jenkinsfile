pipeline {
    agent any
    
    stages {
        stage('Code') {
            steps {
                echo "clonning the code"
                git branch: 'master',
                url: 'https://github.com/Premsagarpc1/node-todo-cicd.git'
            }
        }
        stage('Build') {
            steps {
                echo "bulding the code"
                sh 'docker build . -t premsagarpc1/node-todo-test:latest'
            }
        }
        stage('Push') {
            steps {
                echo "pushing the docker image"
                withCredentials([usernamePassword(credentialsId: 'dockerHub', passwordVariable: 'dockerHUbPassword', usernameVariable: 'dockerHUbUser')]) {
                    sh "docker login -u ${env.dockerHubUser} -p ${env.dockerHubPassword}"
                    sh 'docker push premsagarpc1/node-todo-test:latest'
                }
            }
        }
        stage('Test') {
            steps {
                echo "testing the build"
            }
        }
        stage('Deploy') {
            steps {
                echo "deploying to production"
                sh "docker-compose up -d"
            }
        }
    }   
}

