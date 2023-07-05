import prompts from "prompts";

export async function getWord() {
    let response = await fetch("https://trouve-mot.fr/api/random")
    response = await response.json()
    return sanitizeWord(response[0].name)
}

export function sanitizeWord(word) {
    return word.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
}

/* istanbul ignore next */
export async function selectDifficulty() {
    const response = await prompts({
        type: 'select',
        name: 'value',
        message: 'Sélectionnez une difficulté',
        choices: [
          { title: 'facile', value: 'facile' },
          { title: 'normal', value: 'normal'},
          { title: 'difficile', value: 'difficile' },
          { title: 'impossible', value: 'impossible'}
        ],
        initial: 1
      })
      if (response) {
        return response.value
      }
}

export function getLives(difficulty) {
    switch (difficulty) {
        case "facile" :
            return 9
        case "normal" :
            return 6
        case "difficile" :
            return 4
        case "impossible" :
            return 2
    }
}

/* istanbul ignore next */
export async function guessLetter() {
    const response = await prompts({
        type: "text",
        name: 'letter',
        message: 'Try a letter.'
    })
    if (response.letter) {
        return response.letter;
    }
}

export function getWinningMessage(difficulty) {
    switch (difficulty) {
        case "facile":
            return "Les doigts dans le nez! Essaie plus dur la prochaine fois."
        case "normal":
            return "Bien ouej ! T'as pas eu un peu trop de vies là ? Passe en difficile non ?"
        case "difficile":
            return "Il Maestro ! C'était pas gagné d'avance."
        case "impossible":
            return "Il nE sAvaIt pAs qUe c'EtAit iMpoSsiBle aLoRs iL l'A faIt"
    }
}

export function getLosingMessage(difficulty) {
    switch (difficulty) {
        case "facile":
            return "Arrête la drogue gros !"
        case "normal":
            return "Eh ben alors, un petit coup de mou?"
        case "difficile":
            return "Tu t'es bien battu. Bon, ça a servi à rien puisque t'es mort, mais quand même."
        case "impossible":
            return "Sans surprise ! Va faire un tour, non ?"
    }
}

export function isLetterInWord(letter, word) {
    return word.includes(letter);
}

export function isOneLetter(character) {
    return character.match(/[a-zA-Z]/) != null && character.length == 1 ? true : false;
}

export function wordDiscoveredInit(word) {
    return word.replaceAll(/[a-zA-Z]/ig, "-")
}

export function updateDiscoveredWord(word, letter, discoveredWord) {
    const a = [];
    let i = 0;

    for (i; i < word.length; i++) {
        if (word[i] == letter) { a.push(i) }
    }

    a.forEach(index => discoveredWord = discoveredWord.substring(0,index) + letter + discoveredWord.substring(index+1))

    return discoveredWord
}

/* istanbul ignore next */
async function main() {
    const word = await getWord()
    const difficulty = await selectDifficulty()
    let guessedWord = wordDiscoveredInit(word)
    let lives = getLives(difficulty)
    let lettersTried = []

    while (lives != 0) {

        console.log(guessedWord)

        let letter = await guessLetter()

        if (isOneLetter(letter) && (!lettersTried.includes(letter))) {

            lettersTried.push(letter)

            if (isLetterInWord(letter, word)) {
                guessedWord = updateDiscoveredWord(word, letter, guessedWord)
            } else {
                lives = lives - 1
                console.log(`Nah ! ${lives} vies restantes.`)
            }
            
        } else if (lettersTried.includes(letter)) {
            
            console.log(`Vous avez déjà tenté cette lettre.
            Pour rappel, les lettres déjà tentées sont : ${lettersTried}`)               
            
        } else {
            
            console.log("Entrez une lettre valide.")
            
        }

        if (!guessedWord.includes('-')) {
            console.log(guessedWord)
            return console.log(getWinningMessage(difficulty))
        }

    }

    console.log(getLosingMessage(difficulty))
    console.log(`Le mot était "${word}".`)
}

main();
