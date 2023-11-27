import words from '../src/words.js'
import { expect } from 'chai'

describe('words', () => {
  it('should return an empty array when given an empty string', () => {
    expect(words('')).to.deep.equal([])
  })

  it('should return an array of words when given a string of words', () => {
    expect(words('hello world')).to.deep.equal(['hello', 'world'])
  })

  it('should return an array of words when given a string with punctuation', () => {
    expect(words('hello, world!')).to.deep.equal(['hello', 'world'])
  })

  it('should return an array of words when given a string with non-ASCII characters', () => {
    expect(words('héllo wörld')).to.deep.equal(['héllo', 'wörld'])
  })

  it('should return an empty array when given a pattern that does not match', () => {
    expect(words('hello world', /foo/)).to.deep.equal([])
  })
 
})