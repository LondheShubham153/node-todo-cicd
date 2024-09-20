pipeline {
    agent any
    
    stages {
        
        stage("code"){
            steps{
                git url: "https://github.com/Amitabh-DevOps/Jenkins-CI-CD-Project-Todo-node-app.git", branch: "master"
                echo 'bhaiyya code clone ho gaya'
            }
        }
        stage("build and test"){
            steps{
                sh "docker rm -f node-todo-app || true"
                sh "docker build . -t todo-app"
                sh "docker run --rm -d --name node-todo-app -p 8000:8000 todo-app"
                echo 'code build bhi ho gaya'
            }
        }
    }
}
