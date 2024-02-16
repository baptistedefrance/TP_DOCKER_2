# Utiliser l'image officielle Node.js v18 Alpine comme image de base
FROM node:18-alpine

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY ./src/package*.json ./

# Installer les dépendances de l'application
RUN npm install

# Copier les autres fichiers et dossiers de l'application dans le répertoire de travail
COPY ./src .

# Exposer le port sur lequel l'application s'exécutera
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["node", "server.js"]
