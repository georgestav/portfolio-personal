FROM node:18-alpine AS development

WORKDIR /

COPY package*.json /

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]