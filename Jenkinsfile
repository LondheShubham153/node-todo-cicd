pipeline {
    agent { label "Jenkins-Agent"}
    
    stages {
        
        stage("code"){
            steps{
                git url: "https://github.com/kishorchavan87/node-todo-cicd.git", branch: "master"
                echo 'code clonned'
            }
        }
        stage("build and test"){
            steps{
                sh "docker build -t node-app-test-new:latest ."
                echo 'Image Build successfully'
            }
        }
        
        stage("deploy"){
            steps{
                sh "docker-compose down && docker-compose up -d"
                echo 'Successfully deployed the code'
            }
        }
    }
}
