# Imagen base con Node.js 22
FROM node:22

# Directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiamos package.json y package-lock.json
COPY package*.json ./

# Instalamos las dependencias
RUN npm install

# Copiamos el resto del proyecto
COPY . .

# Exponemos el puerto del servidor
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["node", "server.js"]
