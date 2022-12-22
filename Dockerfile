# pull the base image
FROM node:alpine

# set the working direction
WORKDIR /app

# install app dependencies
COPY package*.json .

RUN npm install

# add app
COPY . .

RUN npm run build 

EXPOSE 3000

# start app
CMD ["npm", "start"]