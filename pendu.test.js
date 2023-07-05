import { expect, test, expectTypeOf } from 'vitest'
import {getLives, getWordAndHint, sanitizeWord, isOneLetter, isLetterInWord, wordDiscoveredInit, updateDiscoveredWord, getWinningMessage, getLosingMessage} from './pendu.js'

test('getWordAndHint', async () => {
    let wordAndHint = await getWordAndHint()
    expectTypeOf(wordAndHint).toEqualTypeOf("list")
    expect(wordAndHint.length).toBe(2)
})

test('isLetterInWord', () => {
    expect(isLetterInWord("b", "bonjour")).toBe(true)
    expect(isLetterInWord("c", "bonjour")).toBe(false)
})

test('isOneLetter', () => {
    expect(isOneLetter("joemama")).toBe(false)
    expect(isOneLetter("!")).toBe(false)
    expect(isOneLetter("a")).toBe(true)
})

test('wordDiscoveredInit', () => {
    expect(wordDiscoveredInit("bonjour")).toBe("-------")
})

test('updateDiscoveredWord', () => {
    expect(updateDiscoveredWord("bonjour", "o", "-------")).toBe("-o--o--")
})

test('getLives', () => {
    expect(getLives("facile")).toBe(9)
    expect(getLives("normal")).toBe(6)
    expect(getLives("difficile")).toBe(4)
    expect(getLives("impossible")).toBe(2)
})

test('getWinningMessage', () => {
    expect(getWinningMessage("facile")).toBe("Les doigts dans le nez! Essaie plus dur la prochaine fois.")
    expect(getWinningMessage("normal")).toBe("Bien ouej ! T'as pas eu un peu trop de vies là ? Passe en difficile non ?")
    expect(getWinningMessage("difficile")).toBe("Il Maestro ! C'était pas gagné d'avance.")
    expect(getWinningMessage("impossible")).toBe("Il nE sAvaIt pAs qUe c'EtAit iMpoSsiBle aLoRs iL l'A faIt")
})

test('getLosingMessage', () => {
    expect(getLosingMessage("difficile")).toBe("Tu t'es bien battu. Bon, ça a servi à rien puisque t'es mort, mais quand même.")
    expect(getLosingMessage("facile")).toBe("Arrête la drogue gros !")
    expect(getLosingMessage("normal")).toBe("Eh ben alors, un petit coup de mou?")
    expect(getLosingMessage("impossible")).toBe("Sans surprise ! Va faire un tour, non ?")
})

test('sanitizeWord', () => {
    expect(sanitizeWord("ébène")).toBe("ebene")
})