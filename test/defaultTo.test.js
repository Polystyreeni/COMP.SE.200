import defaultTo from '../src/defaultTo.js'
import { expect } from 'chai'

describe('defaultTo', () => {
  it('should return the default value when given a null value', () => {
    expect(defaultTo(null, 'default')).to.equal('default')
  })

  it('should return the default value when given an undefined value', () => {
    expect(defaultTo(undefined, 'default')).to.equal('default')
  })

  it('should return the value when given a non-null value', () => {
    expect(defaultTo('value', 'default')).to.equal('value')
  })

  it('should return the value when given a falsy value other than null or undefined', () => {
    expect(defaultTo(0, 'default')).to.equal(0)
    expect(defaultTo(false, 'default')).to.equal(false)
    expect(defaultTo('', 'default')).to.equal('')
  })
})