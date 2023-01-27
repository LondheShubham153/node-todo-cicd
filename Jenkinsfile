pipeline{
    
    agent any
    
    stages{
        
        stage("Code"){
            steps{
                // echo "Cloning the code from repo"
                git url:"https://github.com/Shivendra1702/node-todo-cicd.git" , branch:"master"
            }
        }
        
        stage("Build"){
            steps{
                // echo "Building the code"
                sh "docker build . -t shivendra1702/node-todo-app:latest"
                // sh "docker run --name node-todo-container shivendra1702/node-todo-app:latest"
            }
        }
        
        stage("Push"){
            steps{
                // echo "Pushing the image "
                withCredentials([usernamePassword(credentialsId:"dockerHub", usernameVariable:"dockerHubUser" , passwordVariable:"dockerHubPassword")]){
                    sh "docker login -u ${dockerHubUser} -p ${dockerHubPassword}"
                    sh "docker push shivendra1702/node-todo-app:latest"
                }
            }
        }
        
        stage("Test"){
            steps{
                echo "Testing the code "
            }
        }
        
        stage("Deploy"){
            steps{
                sh "docker-compose down && docker-compose up -d"
            }
        }
    }
}
