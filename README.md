# Projet : Actualité météo

Une application d'actualité météo vous est fourni.

Elle fournit seulement la météo de la ville localisé selon votre addresse IP.
Il vous faudra completer cette application afin que l'on puisse ajouter d'autres villes.
Le HTML et CSS vous est deja fournit et il vous faudra rendre cette application plus lisible en utilisation async/await

Afin de faire fonctionner l'application vous devez recuperer des cléfs d'API et completer le fichier de configuration

## Quel sont les API dont nous avons besoin ?

### Ipstack
ipstack est l'un des leader pour la géolocalisation IP. Il propose des apis afin de localiser des API du monde entier
API et services de bases de données IP mondiales dans le monde entier.

Pour profiter de ses capacités, nous devons d'abord nous inscrire afin d'obtenir une clé API : https://ipstack.com

### OpenWeatherMap 
Nous allons utiliser OpenWeatherMap, l'un des choix gratuits les plus populaires quit fournit des données météorologiques historiques, actuelles et prévues fiables via des API ultra-rapides.

Pour profiter de ses capacités, nous devons d'abord nous inscrire afin d'obtenir une clé API : https://openweathermap.org/api

Les icones sont fournit par OpenWeatherMap, voir le code source et les reponses des API afin de savoir commment elle sont récupérés

### Ipify

Une API publique qui nous permet d'obtenir notre adresse IP. Aucune API key est nécéssaire.
https://www.ipify.org/

## Objectif
Permettre de suivre l'actualité de la météo d'une ville donnée à l'aide du formulaire.

A la saisie la ville doit s'afficher comme à l'écran.

Le code fournit devra être plus lisible en gérant la partie asynchrone à l'aide d'async/await.

![/assets/demo.png](/assets/demo.png)

Liens utiles:

https://developer.mozilla.org/fr/docs/Learn/JavaScript/Asynchronous/Async_await
