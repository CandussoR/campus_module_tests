import { expect, test, expectTypeOf } from 'vitest'
import {getLives, getWord, isOneLetter, isLetterInWord, wordDiscoveredInit, updateDiscoveredWord, getWinningMessage, getLosingMessage} from './pendu.js'

test('getWord', async () => {
    expectTypeOf(await getWord()).toEqualTypeOf("string")
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

test('selectDifficulty', () => {
    expect(getLives("normal")).toBe(6)
})

test('getWinningMessage', () => {
    expect(getWinningMessage("facile")).toBe("Les doigts dans le nez! Essaie plus dur la prochaine fois.")
})

test('getLosingMessage', () => {
    expect(getLosingMessage("hard")).toBe("Tu t'es bien battu. Bon, ça a servi à rien puisque t'es mort, mais quand même.")
})