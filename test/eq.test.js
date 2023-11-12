import eq from '../src/eq.js'
import { expect } from 'chai'

describe('eq', () => {
  it('should return true when given two equal values', () => {
    expect(eq(1, 1)).to.be.true
    expect(eq('hello', 'hello')).to.be.true
    expect(eq(true, true)).to.be.true
    expect(eq(null, null)).to.be.true
    expect(eq(undefined, undefined)).to.be.true
    expect(eq(NaN, NaN)).to.be.true
  })

  it('should return false when given two unequal values', () => {
    expect(eq(1, 2)).to.be.false
    expect(eq('hello', 'world')).to.be.false
    expect(eq(true, false)).to.be.false
    expect(eq(NaN, 5)).to.be.false
  })

  it('should return true when given two NaN values', () => {
    expect(eq(NaN, NaN)).to.be.true
  })

  it('should return true when given two objects with the same reference', () => {
    const obj = { a: 1 }
    expect(eq(obj, obj)).to.be.true
  })

  it('should return false when given two objects with different references', () => {
    const obj1 = { a: 1 }
    const obj2 = { a: 1 }
    expect(eq(obj1, obj2)).to.be.false
  })
})