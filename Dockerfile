ARG TAG=16-alpine

FROM node:$TAG

# set working directory
WORKDIR /app

# install app dependencies
COPY ./package.json ./
COPY ./package-lock.json ./
RUN npm install


# add app
COPY ./ ./

# start app
CMD ["npm", "start"]