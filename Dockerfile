FROM node:17.5.0-alpine
WORKDIR /core
ENV PATH="./node_modules/.bin:$PATH"
COPY . . 
RUN rm -rf node_modules package-lock.json && npm install && npm start
CMD ["npm", "start"]
