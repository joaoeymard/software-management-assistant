FROM node:10.15.0-slim

# Create app directory
RUN mkdir -p /usr/src/project
WORKDIR /usr/src/project

# Install app dependencies
COPY package.json /usr/src/project
RUN npm install --quiet

# Bundle app source
COPY . /usr/src/project