import { expect, test } from 'vitest'
import {isLetter, isLetterInWord, wordDiscoveredInit, updateDiscoveredWord} from './pendu.js'

test('isLetterInWord', () => {
    expect(isLetterInWord("b", "bonjour")).toBe(true)
    expect(isLetterInWord("c", "bonjour")).toBe(false)
})

test('isLetter', () => {
    expect(isLetter("!")).toBe(false)
    expect(isLetter("a")).toBe(true)
})

test('wordDiscoveredInit', () => {
    expect(wordDiscoveredInit("bonjour")).toBe("-------")
})

test('updateDiscoveredWord', () => {
    expect(updateDiscoveredWord("bonjour", "o", "-------")).toBe("-o--o--")
})