pipeline {
    agent any
    
    stages {
        
        stage("Code"){
            steps{
                git url: "https://github.com/Vinayaksarode/node-todo-cicd.git", branch: "master"
                echo "code clone ho gaya"
                
            }
            
        }
        stage("Build & Test"){
           steps{
               sh "docker build -t node-app-test ."
               echo "code build ho gaya"
               
           } 
        }
        stage("Scan"){
            steps{
                echo "image scan ho gyi"
            }
        }
        stage("push"){
          steps{
                withCredentials([usernamePassword(credentialsId:"dockerHub",passwordVariable:"dockerHubPass",usernameVariable:"dockerHubUser")]){
                sh "docker login -u ${env.dockerHubUser} -p ${env.dockerHubPass}"
                sh "docker tag node-app-test:latest ${env.dockerHubUser}/node-app-test:latest"
                sh "docker push ${env.dockerHubUser}/node-app-test:latest"
                echo "code push ho gya"
                }
              
          }  
        }
        stage("Deploy"){
            steps{
                sh "docker-compose down && docker-compose up -d"
                echo "code deploy ho gya"
                
            }
            
        }
    }
}
