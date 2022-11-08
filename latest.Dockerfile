FROM nginx:alpine AS production

WORKDIR /

COPY ./dist /usr/share/nginx/html
