FROM nginx:alpine AS production

WORKDIR /

COPY ./build /usr/share/nginx/html
