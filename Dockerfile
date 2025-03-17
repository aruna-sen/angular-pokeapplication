FROM node:22.14.0-alpine AS build-stage

WORKDIR /app

COPY package*.json .

RUN npm install 

COPY . .

RUN npm run build --configuration=production 

FROM nginx:alpine AS production-stage

 COPY --from=build-stage /app/dist/pokemon-app/browser /usr/share/nginx/html/

 COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx","-g","daemon off;"] 