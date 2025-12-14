pipeline {
    agent any

    stages {

        stage('Code') {
            steps {
                echo "Cloning GitHub repo"
                git url: 'https://github.com/Sahil1320/node-todo-cicd.git', branch: 'master'
            }
        }

        stage('Build') {
            steps {
                sh 'docker build . -t sahilkr1302/node-todo-test:latest'
            }
        }
         stage('push') {
            steps {
                 withCredentials([usernamePassword(
                    credentialsId: 'dockerHub',
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )]) {
                    sh "docker login -u ${env.DOCKER_USER} -p ${env.DOCKER_PASS}"
                    sh 'docker push sahilkr1302/node-todo-test:latest'
                }
            }
        }

        stage('Test') {
            steps {
                echo "Testing code"
            }
        }

        stage('Deploy') {
            steps {
                sh "docker-compose down && docker-compose up -d"
            }
        }

    }
}
