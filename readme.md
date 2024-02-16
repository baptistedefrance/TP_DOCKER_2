Voir Dockerfile

# Construire l'image Docker
docker build -t mon-application-node .
 
# Exécuter l'image Docker dans un conteneur
docker run -d -p 3000:3000 mon-application-node

Mysql : 

docker run -d --name ma-base-de-donnees --network mon-reseau-db \
-e MYSQL_ROOT_PASSWORD=test \
-e MYSQL_DATABASE=test \
-e MYSQL_USER=test \
-e MYSQL_PASSWORD=test \
mysql:latest

docker run -d --name mon-application-node --network mon-reseau-db -p 3000:3000 mon-application-node

docker-compose up -d