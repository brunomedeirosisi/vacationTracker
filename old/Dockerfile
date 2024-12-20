# Usar uma imagem Node.js base
FROM node:18-alpine

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copiar apenas o package.json (sem o package-lock.json)
COPY package.json ./

# Instalar as dependências
RUN npm cache clean --force
RUN npm install
# Instala o Webpack e Webpack CLI como dependências de desenvolvimento
#RUN npm install -D webpack-cli
RUN npm install @babel/core @babel/preset-env @babel/preset-react babel-loader html-webpack-plugin style-loader css-loader webpack webpack-cli webpack-dev-server --save-dev


# Copiar o restante do código da aplicação
COPY . .



# Expor a porta usada pela aplicação React
EXPOSE 3000

# Comando para iniciar a aplicação no ambiente de desenvolvimento
CMD ["npm", "start"]