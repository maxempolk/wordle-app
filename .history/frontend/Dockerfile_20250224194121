# Этап 1: Сборка проекта с Node.js
FROM node:20-alpine AS builder

WORKDIR /app
COPY package.json ./
COPY package-lock.json* ./
RUN npm install
COPY src ./src
COPY . .
RUN npm run build

# Этап 2: Финальный образ с Nginx
FROM nginx:alpine

# Копируем результат сборки из предыдущего этапа
COPY --from=builder /app/dist /usr/share/nginx/html

# Порт по умолчанию для Nginx
EXPOSE 80

# Nginx запускается автоматически, ничего дополнительно указывать не нужно