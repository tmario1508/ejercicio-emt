FROM node AS builder

RUN mkdir -p /usr/src/ejercicio-emt
WORKDIR /usr/src/ejercicio-emt
COPY . /usr/src/ejercicio-emt

RUN npm install
RUN $(npm bin)/ng build --prod --aot

FROM nginx
WORKDIR /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/src/ejercicio-emt/dist/ejercicio-emt/ /usr/share/nginx/html
EXPOSE 80 443

CMD nginx -g 'daemon off;'