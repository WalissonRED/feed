# Etapa 1: Build
FROM node:18-alpine AS builder

# Defina o diretório de trabalho no contêiner
WORKDIR /app

# Copie os arquivos de configuração do projeto para o contêiner
COPY package.json package-lock.json ./

# Instale as dependências
RUN npm install

# Copie o restante do código do projeto para o contêiner
COPY . .

# Execute a build do projeto
RUN npm run build

# Etapa 2: Servir os arquivos estáticos
FROM nginx:alpine AS production

# Copie a build gerada para o diretório do nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Copie a configuração personalizada do Nginx, se necessário
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exponha a porta que será usada pelo Nginx
EXPOSE 80

# Inicie o Nginx
CMD ["nginx", "-g", "daemon off;"]
