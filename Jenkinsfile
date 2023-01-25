pipeline {
    agent any
    environment {
        AWS_ACCOUNT_ID= '163351597882'
        AWS_DEFAULT_REGION= 'us-east-1'
        IMAGE_REPO_NAME= 'jenkins-pipeline'
        IMAGE_TAG= 'Latest'
        REPOSITORY_URI = '163351597882.dkr.ecr.us-east-1.amazonaws.com/jenkins-pipeline'
}
   stages {
       stage('Code') {
           steps{
                git url: 'https://github.com/ankitasharma7/node-todo-cicd.git' , branch: 'master'
            }
       }
       stage('Build'){
            steps{
               sh 'docker build . -t ${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_DEFAULT_REGION}.amazonaws.com/${IMAGE_REPO_NAME}:${IMAGE_TAG}'
            }
            
        }
        stage('Push'){
            steps{
                sh 'aws ecr get-login-password --region ${AWS_DEFAULT_REGION} | docker login --username AWS --password-stdin ${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_DEFAULT_REGION}.amazonaws.com'
                sh 'docker push ${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_DEFAULT_REGION}.amazonaws.com/${IMAGE_REPO_NAME}:${IMAGE_TAG}'
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
