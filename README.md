# Qu'est-ce qu'un test ?
* Du code qui permet de vérifier qu'une fonction se comporte bien de la manière dont elle a été pensée.
* Vise à s'assurer que le logiciel répond aux objectifs définis.

# Pourquoi ?
* En partant avec l'optique de tester le code, on pense différemment. Si une classe est trop dépendante de toute l'appli, ça sera plus difficile à tester.

# Types de tests
- tests unitaires et tests d'intégration :
    - les tests unitaires permettent de tester des fonctions,
    - les tests d'intégration permettent en front de tester des composants ?
    - test de sécurité,
    - test système,
    - test d'acceptation (fait par le client),
    - test de performance,
    - test utilisateur,
    - test de fonctionnalité,
    - A/B Testing : permet de choisir certains utilisateurs pour deux versions A et B et ajuster le code selon les réponses.

- test unitaire :
    * sur un composant du code, teste une fonction ;
    * souvent automatisés ;
- test d'intégration :
    * bon fonctionnement des interactions et de l'interface.
    * tests sur un scénario ;
    * automatisés ou manuels;

# Bonnes pratiques de conception de tests
* Les tests ne vérifient qu'une seule chose,
* Certains tests doivent vérifier des choses fausses,
* Ne teste qu'une seule version, pas plusieurs,
* Restreints :
    * Un test teste plusieurs choses à la fois,
* Rapide,
* Automatisés,
* Bien nommés et organisés clairement,
* Stables dans le temps.

# Mauvaise pratique de conception de tests
* Si trop de code dans le test:
    * classes pas assez découplées
* Tests non indépendants,
* Indépendants de service extérieurs (si possible) :
    * mieux vaut mocker les dépendances en passant ce qu'on s'attend à recevoir

# Mock
- Créer et injecter des données de tests.
- Dependency Injection.

# TDD
* Création des tests d'abord,
* Permet de penser à l'avance aux cas d'utilisation d'une fonction.