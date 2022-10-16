FROM nginx:alpine
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY ./front/build /usr/share/nginx/html
EXPOSE 80/tcp
EXPOSE 443/tcp