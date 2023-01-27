pipeline {
	agent any
    stages
	{	
	stage('clone the repo')
		{
			steps{	
	 sh 'git clone https://gitlab.com/sagore-group1/apache-app/nodejs-app-pipeline.git'
			}
		}
        stage('build nodejs image')
        {
        steps{ 
            sh 'docker build -t nodejs-app-image .'
        }
        }
        stage('run nodejs image')
        {
        steps{
            sh 'docker run -dt -p 8000:8000 nodejs-app-image'
        }
        }
     }
}
