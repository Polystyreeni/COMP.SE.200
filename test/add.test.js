import add from '../src/add.js'
import { expect } from 'chai'

describe('add', () => {
    it('should add two positive numbers', () => {
        expect(add(2, 3)).to.equal(5)
    })

    it('should add two negative numbers', () => {
        expect(add(-2, -3)).to.equal(-5)
    })

    it('should add a positive and a negative number', () => {
        expect(add(2, -3)).to.equal(-1)
    })

    it('should add a number and zero', () => {
        expect(add(2, 0)).to.equal(2)
    })
})
