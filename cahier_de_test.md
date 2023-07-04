# Cahier de test

| Id  | Titre  |  Description | Résultat attendu  |  
| --- | --- | --- | --- | 
| 1 |  getWord | Fonction qui renvoie un mot aléatoire via une API externe.  | Renvoie une chaîne de caractères.  |  
| 2 | isLetterInWord  | Vérifie si une lettre est présente dans le mot à deviner  | Retourne true si la lettre est dans le mot, false sinon.  |  
| 3 | isOneLetter  | Vérifie qu'un input est bien une lettre  | Renvoie true si l'input est bien une chaîne d'un caractère alphabétique. |  
| 4 | wordDiscoveredInit  | Vérifie que le prompt initialise le mot découvert avec un nombre de tirets égal à la longueur du mot à deviner.  | Renvoie une chaîne de tirets aussi longue que le mot.  |  
| 5 | updateDicoveredWord  | Mise à jour du mot deviné dans le prompt. | Renvoie la chaîne avec tirets mise à jour si la lettre est dans le mot.  |  
| 6 | getLives | Vérifie le nombre de vie en fonction du niveau de difficulté sélectionné | Renvoie un int |
| 7 | getWinningMessage | Vérifie que le message envoyé est le bon selon le niveau de difficulté | Renvoie une chaîne avec le bon message |
| 8 | getLosingMessage | Vérifie que le message envoyé est le bon selon le niveau de difficulté | Renvoie une chaîne avec le bon message |