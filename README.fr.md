## Frontend du Projet Blog API

[![en](https://img.shields.io/badge/lang-en-red)](README.md)

Ce dépôt comprend la partie frontend du Messaging App projet créé pour [Odin Project](https://www.theodinproject.com/lessons/nodejs-messaging-app).

L'objectif de ce projet est de créer une application Web de messagerie permettant aux utilisateurs d'envoyer et de recevoir des messages en temps réel.

- Lien du projet - https://messaging-app-project.onrender.com
- Dépôt principal du projet - https://github.com/skynter/Messaging-App
- Dépôt backend du projet - https://github.com/skynter/Messaging-App-Backend

## Technologies Utilisées

- ReactJS
- Tailwind CSS

## Principales Fonctionnalités

- Transmission en temps réel de messages entre utilisateurs
- Interface Utilisateur Intuitive
- Interface Utilisateur Responsive

## Installation

Pour exécuter le projet localement sur votre machine :

- Exécutez la commande suivante pour installer les dépendances du projet : 

```
npm install
```

- Exécutez la commande suivante pour générer un serveur local de développement :

```
npm run dev
```

- Ouvrez http://localhost:5173 avec votre navigateur pour accéder à la version locale du frontend de votre projet

- Les points de terminaison de l'API figurant au niveau du dossier backend du projet sont accessibles à travers l'API hébergé sur https://odin-messaging-app-api.onrender.com

- Les deux points de terminaisons principaux de l'API sont le GET https://odin-messaging-app-api.onrender.com/conversation et le POST https://odin-messaging-app-api.onrender.com/conversation/add_message