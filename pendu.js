import prompts from "prompts";

async function guessLetter() {
    const response = await prompts({
        type: "text",
        name: 'letter',
        message: 'Try a letter.'
    })
    return response.value;
}

export function isLetterInWord(letter, word) {
    return word.includes(letter);
}

export function isLetter(character) {
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