pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/zohaib9990/node-todo-cicd.git'
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    // Build Docker image
                    sh 'docker build -t node-app-todo .'
                }
            }
        }
        stage('Run Docker Container') {
            steps {
                script {
                    // Run Docker container
                    sh 'docker run -d --name node-todo-app -p 8080:8000 node-app-todo'
                }
            }
        }
    }
    post {
        always {
            // Clean up Docker containers and images
            sh 'docker rm -f node-todo-app || true'
            sh 'docker rmi -f node-app-todo || true'
        }
    }
}
