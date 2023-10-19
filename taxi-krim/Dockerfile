FROM node:8-alpine AS build
WORKDIR /app

# Инструмент для удаления ненужных файлов из node_modules, таких как markdown-файлы, .d.ts и прочих
RUN apk update \
    && apk add curl \
    && curl -sf https://gobinaries.com/tj/node-prune | sh \
    && rm -rf /var/lib/apt/lists/*

# Устанавливаем все зависимости, в том числе и dev-зависимости, которые нужны для сборки
ENV NODE_ENV=development
COPY package*.json ./
RUN npm ci

# Собираем образ для production
COPY . .
ENV NODE_ENV=production
RUN npm run make

# Очищаем образ от ненужных файлов и dev-зависимостей
RUN npm prune --production
RUN node-prune

EXPOSE 3333
CMD ["node", "./server/index.js"]
