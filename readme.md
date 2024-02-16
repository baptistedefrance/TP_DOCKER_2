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

Voir adresse IP
docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' nom_de_votre_conteneur_mariadb


Q1 : Que se passe-t-il si l'un de mes ports publiés est déjà utilisé ?
- Si l'un des ports que vous essayez de publier est déjà utilisé sur votre machine hôte, Docker générera une erreur indiquant qu'il ne peut pas mapper le port demandé. Vous devrez alors choisir un autre port disponible ou libérer le port existant sur votre machine hôte.

Q2 : Quelle option de la commande npm install permet de n'installer que les dépendances de production ?
- L'option de la commande `npm install` qui permet d'installer uniquement les dépendances de production est `--only=prod` ou `--only=production`.

Q2bis : Pourquoi faire cela ?
- Installer uniquement les dépendances de production est une pratique courante pour plusieurs raisons :
  1. Réduire la taille de l'image Docker : Les dépendances de développement ne sont généralement pas nécessaires pour exécuter une application en production. En ne les incluant pas dans l'image Docker, vous pouvez réduire la taille de l'image et minimiser les vulnérabilités potentielles.
  2. Améliorer la sécurité : Les dépendances de développement peuvent contenir des packages ou des outils qui ne sont pas sécurisés pour une utilisation en production. En n'installant que les dépendances de production, vous réduisez la surface d'attaque potentielle de votre application.
  3. Optimisation des performances : En n'incluant que les dépendances nécessaires à l'exécution de l'application, vous réduisez le temps de construction de l'image Docker et le temps de déploiement de l'application.

Q3 : Comment peut-on analyser la sécurité d'une application comme celle-ci (dépendances & image Docker) ?
- Pour analyser la sécurité d'une application Node.js et de son image Docker, vous pouvez suivre plusieurs étapes :
  1. Analyse des dépendances : Utilisez des outils d'analyse de sécurité des dépendances comme npm audit pour vérifier les dépendances de votre application à la recherche de vulnérabilités connues. Assurez-vous de garder vos dépendances à jour pour bénéficier des correctifs de sécurité.
  2. Analyse de l'image Docker : Utilisez des outils comme Docker Bench for Security pour analyser la sécurité de votre image Docker. Cela peut inclure la vérification des bonnes pratiques de configuration, la détection des vulnérabilités dans les packages installés, etc.
  3. Analyse du code source : Effectuez une analyse statique du code source de votre application pour rechercher des vulnérabilités de sécurité, des failles de sécurité courantes, etc.
  4. Utilisation d'images Docker sûres : Assurez-vous de choisir des images Docker officielles ou des images bien entretenues provenant de sources fiables. Évitez d'utiliser des images non officielles ou obsolètes, car elles pourraient contenir des vulnérabilités connues.
  5. Surveillez les nouvelles vulnérabilités : Restez à jour sur les dernières vulnérabilités en vous abonnant aux notifications de sécurité des projets open source que vous utilisez et en surveillant les bulletins de sécurité des fournisseurs de logiciels tiers. Mettez à jour votre application et vos images Docker dès qu'un correctif de sécurité est disponible.