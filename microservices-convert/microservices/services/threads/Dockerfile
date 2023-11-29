FROM node:latest
    # pull latest node.js image from docker registry

WORKDIR /server
    # set up the working directory within the Docker image

COPY ../../../package*.json ./
    # copy the package.json and package-lock.json files to access depenedencies - ensure you only copy the necessary files to Docker

RUN npm install
    # run command to istall dependencies in Docker

COPY /server ./
    # copy all the project files to the working directory within the docker image 

EXPOSE 3000
    # expose the API on port 5000

CMD ["node", "server.js"]
    # run npm start command to start the app image in docker


