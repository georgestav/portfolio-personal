FROM node:16@sha256:6e54786b2ad01667d46524e82806298714f50d2be72b39706770aed55faedbd7 

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . .

CMD [ "npm", "start" ]