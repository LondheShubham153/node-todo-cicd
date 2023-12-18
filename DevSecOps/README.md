# End to End DevSecOps Project for DevOps Engineers

### In this project, we will learn about  DevOps and DevSecOps tools in one project:

### Tools Covered:
-  Linux
-  Git and GitHub
-  Docker
-  Docker-compose
-  Jenkins CI/CD
-  SonarQube
-  OWASP
-  Trivy 

#

## Pre-requisites to implement this project:

-  AWS EC2 instance (Ubuntu) with instance type t2.large and root volume 29GB.

-  Jenkins installed <br>
    - Reference: <b><a href="https://www.jenkins.io/doc/book/installing/linux/#long-term-support-release"><u> Jenkins installation </a></u></b>

-  Docker and docker-compose installled
```bash
    sudo apt-get update
    sudo apt-get install docker.io -y
    sudo apt-get install docker-compose -y
```

- Trivy installed <br>
    - Reference: <b> <a href="https://github.com/DevMadhup/Trivy_Installation_and_implementation/blob/main/README.md"><u>Trivy Installation</a></u></b>

- SonarQube Server installed
```bash
    docker run -itd --name sonarqube-server -p 9000:9000 sonarqube:lts-community
```
#
## Steps for Jenkins CI/CD:

1)  Access Jenkins UI and setup Jenkins

![image](https://github.com/DevMadhup/node-todo-cicd/assets/121779953/1eec417e-95ab-4497-ad31-443ecd6b999e)

#

2)  Plugins Installation:

    - Go to <b><i><u>Manage Jenkins</u></i></b>, click on <b><i><u>Plugins</u></i></b> and install all the plugins listed below, we will require for other tools integration:

        - SonarQube Scanner (Version2.16.1)
        - Sonar Quality Gates (Version1.3.1)
        - OWASP Dependency-Check (Version5.4.3)
        - Docker (Version1.5)
#

3) Go to SonarQube Server and create token

    - Click on <b><i><u> Administration </u></i></b> tab, then <b><i><u> Security </u></i></b>, then <b><i><u> Users </u></i></b> and create Token.
    -  Create a webhook to notify Jenkins that Quality gates scanning is done. (We will need this step later)

        - Go to SonarQube Server, then <b><i><u> Administration </u></i></b>, then <b><i><u> Configuration </u></i></b> and click on <b><i><u> Webhook </u></i></b>, add webhook in below <b>Format</b>:
        > http://<jenkins_url>:8080/sonarqube-webhook/
        
        Example: 
        
        ```bash
            http://34.207.58.19:8080/sonarqube-webhook/
        ```

        ![image](https://github.com/DevMadhup/node-todo-cicd/assets/121779953/b9ef2301-b8ff-46f4-a457-6345d5e2dab6)


        ![image](https://github.com/DevMadhup/node-todo-cicd/assets/121779953/08a33164-f6a6-4c5d-8a34-7091cf8a5745)

#

4) Go to Jenkins UI <b><i><u> Manage Jenkins </u></i></b>, then <b><i><u> Credentials </u></i></b> and add SonarQube Credentials.

![image](https://github.com/DevMadhup/node-todo-cicd/assets/121779953/f6db72ec-7d8c-4f4c-ae7a-55d99dd20ce9)

#

5) Now, It's time to integrate SonarQube Server with Jenkins, go to <b><i><u> Manage Jenkins </u></i></b>, then <b><i><u> System </u></i></b> and look for <b><i><u> SonarQube Servers </u></i></b> and add SonarQube.

![image](https://github.com/DevMadhup/node-todo-cicd/assets/121779953/54849cb2-fe56-4acd-972d-3057a0eb3deb)

#

6) Go to <b><i><u> Manage Jenkins </u></i></b>, then <b><i><u> tools </u></i></b>, look for <b><i><u> SonarQube Scanner installations </u></i></b> and add SonarQube Scanner.

> Note: Add name as ```Sonar```

![image](https://github.com/DevMadhup/node-todo-cicd/assets/121779953/1fe926f6-a844-42d4-bce4-62193dde6640)

7) Integrate OWASP with Jenkins, go to <b><i><u> Manage Jenkins </u></i></b>, then <b><i> tools </i></b>, look for <b><i><u>Dependency-Check installations</u></i></b> and add Dependency-Check.

> Note: Add name as ```dc```

![image](https://github.com/DevMadhup/node-todo-cicd/assets/121779953/14516995-0c96-4110-bb96-97a37a9fe57d)

#

8) For trivy, we have already installed it, in pre-reuisites.

![image](https://github.com/DevMadhup/node-todo-cicd/assets/121779953/0fcd1620-bd64-4286-bc13-f6652d4527c6)

#

9) Now, It's time to create a CI/CD pipeline in Jenkins:
    -  Click on <b><i><u>New Item</u></i></b> and give it a name and select <b><i><u>Pipeline</u></i></b>.
    -  Select <b><i><u>GitHub Project</u></i></b> and paste your GitHub repository link.
    -  Scroll down and in <b><i><u>Pipeline</u></i></b> section select <b><i><u>Pipeline script from SCM</u></i></b>, because our Jenkinsfile is present on GitHub.

    ![image](https://github.com/DevMadhup/node-todo-cicd/assets/121779953/39af1b22-28aa-4e36-b98c-0e7f120b5fbf)

    ![image](https://github.com/DevMadhup/node-todo-cicd/assets/121779953/b7153556-f847-40ee-9a98-ff3609930abd)
#

10) At last run the pipeline and after sometime your code is deployed using DevSecOps.

![image](https://github.com/DevMadhup/node-todo-cicd/assets/121779953/f566d980-82ee-4ad6-9ff3-cb970885560e)
#

<b>Congratulations!!! You have done it</b>

- If you find any issue during the execution of this project, let me know on LinkedIn

- Happy Learning :)
#

## These are our community Links
  <a href="https://discord.com/channels/824622549182185493/824622550327623692">
    <img width="30px" src="https://www.vectorlogo.zone/logos/discordapp/discordapp-tile.svg" />
  </a>&ensp;
    <a href="https://t.me/trainwithshubham">
    <img width="30px" src="https://www.vectorlogo.zone/logos/telegram/telegram-icon.svg" />
  </a> 
  </a>&ensp;

  <a href="https://www.linkedin.com/in/shubhamlondhe1996/">
    <img width="30px" src="https://www.vectorlogo.zone/logos/linkedin/linkedin-icon.svg" />
  </a>&ensp;

 <a href="https://www.youtube.com/@TrainWithShubham">
  <img width="30px" src="https://i.pinimg.com/originals/46/02/cb/4602cbc18967da9c1eba7452905cd99b.png" />
  </a>&ensp;

  <a href="https://chat.whatsapp.com/FvRlAAZVxUhCUSZ0Y1s7KY">
  <img width="30px" src="https://www.vectorlogo.zone/logos/whatsapp/whatsapp-icon.svg" />
</a>&ensp;

