pipeline {
    agent any
    stages{
        stage("Clone the Code from GITHub") {
            steps{
                git url: 'https://github.com/sujitsahoo0285/two-tier-flask-app', branch: 'master'
            }
        }
        stage("Build & Test") {
            steps{
                sh "docker build . -t two-tier-flask-app"
            }
        }
        stage("Push to DockerHub") {
            steps{
                withCredentials([usernamePassword(credentialsId:"dockerHub",passwordVariable:"dockerHubPass",usernameVariable:"dockerHubUser")]){
                    sh "docker login -u ${env.dockerHubUser} -p ${env.dockerHubPass}"
                    sh "docker tag node-app-demo ${env.dockerHubUser}/two-tier-flask-app:latest"
                    sh "docker push ${env.dockerHubUser}/two-tier-flask-app:latest"
                }
            }
        }
        stage("Deploy image on the EC2") {
            steps{
                sh "docker-compose down --remove-orphans"
                sh "docker-compose up -d"
            }
        }

    }
}
