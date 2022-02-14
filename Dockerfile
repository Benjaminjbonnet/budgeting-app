FROM node:17.5.0-alpine
WORKDIR /core
ENV PATH="./node_modules/.bin:$PATH"
COPY . . 
CMD ["npm", "start"]