FROM node:15-alpine

# Create app directory
WORKDIR /var/www/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
RUN npm install -g nodemon
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY ./src ./src

EXPOSE 5000
CMD [ "npm", "start" ]