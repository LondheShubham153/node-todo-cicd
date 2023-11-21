pipeline{
    agent any
    environment{
        SONAR_HOME= tool "Sonar"
    }
    stages{
        stage("Code Checkout"){
            steps{
                git url:"https://github.com/DevMadhup/node-todo-cicd.git", branch:"master"
            }
        }
        
        stage("SonarQube Analysis"){
            steps{
                withSonarQubeEnv("Sonar"){
                    sh "$SONAR_HOME/bin/sonar-scanner -Dsonar.projectName=nodetodo -Dsonar.projectKey=nodetodo"
                }
            }
        }
        
        stage("SonarQube Quality Gates"){
                steps{
                    timeout(time: 1, unit: "MINUTES"){
                        waitForQualityGate abortPipeline: false
                    }
                }
        }
        
        stage("OWASP Dependency Check"){
            steps{
                dependencyCheck additionalArguments: '--scan ./', odcInstallation: 'dc'
                dependencyCheckPublisher pattern: '**/dependency-check-report.xml'
            }
        }
        
        stage("Docker Code Build"){
            steps{
                sh "docker build -t nodeapp ."
            }
        }
        
        stage("Docker Code Scan: Trivy"){
            steps{
                sh "trivy image nodeapp"
            }
        }
        
        stage("Docker Build Push: DockerHub"){
            steps{
              withCredentials([usernamePassword(credentialsId:"DockerCred",passwordVariable:"dockerhubpass",usernameVariable:"dockerhubname")]){
                  sh "docker logout"
                  sh "docker login -u ${env.dockerhubname} -p ${env.dockerhubpass}"
                }
            }
        }
        
        stage("Docker Tag"){
            steps{
                sh "docker tag nodeapp:latest madhupdevops/nodeapp:latest"
            }
        }
        
        stage("Code Push to DockerHub"){
            steps{
                sh "docker push madhupdevops/nodeapp:latest"
            }
        }
        
        stage("Code Deploy"){
            steps{    
                sh "docker-compose down && docker-compose up -d"
            }
        }
    }
}
