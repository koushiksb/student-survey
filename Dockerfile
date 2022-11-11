FROM node:lts as stage

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build --prod

FROM httpd:latest AS apache

COPY --from=stage /app/dist/student-survey /usr/local/apache2/htdocs/

EXPOSE 80
