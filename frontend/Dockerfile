FROM nginx:stable-alpine
RUN rm -rf /etc/nginx/sites-enabled/default
COPY nginx/nginx.conf /etc/nginx/conf.d
RUN rm /etc/nginx/conf.d/default.conf
COPY ./dist /usr/share/nginx/html

EXPOSE 3000
STOPSIGNAL SIGTERM
CMD [ "nginx","-g","daemon off;" ]
