# Dockerfile

# base image
FROM node:alpine

USER node
# create & set working directory
RUN mkdir -p /usr/src
WORKDIR /usr/src

# copy source files
COPY . /usr/src

# install dependencies
RUN npm install

# start app
EXPOSE 3000
CMD npm run dev