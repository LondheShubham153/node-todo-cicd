# node-todo-cicd

# TABLE OF CONTENTS.
* [Project Stack.](#project-stack)
* [Prerequisites.](#pre-requisites)
* [Installation.](#installation)
* [Running the project.](#running-the-project)

<!-- About the project -->
## Project Stack.
This project is built using the following technologies:
* [Node.js](https://nodejs.org/en/)
* [Express.js](https://expressjs.com/)
* [MongoDB](https://www.mongodb.com/)
* [Mongoose](https://mongoosejs.com/)
* [Jest](https://jestjs.io/)
* [Docker](https://www.docker.com/)
* [Docker Compose](https://docs.docker.com/compose/)

<!-- Prerequisites -->
## Prerequisites.
* [Docker](https://www.docker.com/)
* [Docker Compose](https://docs.docker.com/compose/)

<!-- Installation -->
## Installation.
1. Clone the repo.
```sh
git clone
```
2. Install NPM packages.
```sh
npm install
```
3. Create a `.env` file in the root directory and add the following environment variables.
```sh
PORT=3000
MONGO_URI=mongodb://mongo:27017/todo
```
4. Run the project.
```sh
npm start
```

<!-- Running the project -->
## Running the project.

### Using local environment.
1. Run the project.
```sh
npm start
```

### Using Docker Compose.
1. Run the project.
```sh
docker-compose up -d
```
2. Stop the project.
```sh
docker-compose down
```
