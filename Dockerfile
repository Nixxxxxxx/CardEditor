# Use an official Node.js runtime as the parent image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# If you're building your Angular app in the Dockerfile, include:
# RUN npm run build

# Bundle app source by copying all files
COPY . .

# Expose port 80 to the outside once the container has launched
EXPOSE 80

# Define the command to run your app using CMD which defines your runtime
CMD [ "node", "server.js" ]
