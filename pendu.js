import prompts from "prompts";

export async function guessLetter() {
    const response = await prompts({
        type: "text",
        name: 'letter',
        message: 'Try a letter.'
    })
    if (response.letter) {
        return response.letter.toLowerCase();
    }
}

export function isLetterInWord(letter, word) {
    return word.includes(letter);
}

export function isLetter(character) {
    console.log(character)
    return character.match(/[a-zA-Z]/) == null ? false : true;
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

async function main() {
    const word = "anticonstitutionnellement"
    let guessedWord = wordDiscoveredInit(word)
    let lives = 6

    while (lives != 0) {

        console.log(guessedWord)

        let letter = await guessLetter()

        if (!isLetter(letter)) {
            throw ValueError("Type a letter.")
        }

        if (isLetterInWord(letter, word)) {
            guessedWord = updateDiscoveredWord(word, letter, guessedWord)
        } else {
            lives = lives - 1
            console.log(`Nah ! ${lives} lives left.`)
        }

        if (!guessedWord.includes('-')) {
            return console.log("Yeah, you won you fucking cheater you happy now huh YOU HAPPY NOW ?!")
        }

    }

    console.log("Oh no you're dead ! sheh")
}

main();