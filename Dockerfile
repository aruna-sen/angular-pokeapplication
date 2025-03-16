FROM node:22.14.0-alpine

WORKDIR /app

COPY package*.json .

RUN npm install -f

COPY . .

EXPOSE 4200

CMD ["npx","ng","serve","--host=0.0.0.0"]