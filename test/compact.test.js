import compact from '../src/compact.js'
import { expect } from 'chai'

describe('compact', () => {
  it('should handle arrays with all falsey values', () => {
    const inputArray = [false, null, 0, '', undefined, NaN]
    const result = compact(inputArray)

    expect(result).to.deep.equal([])
  })

  it('should handle an empty array', () => {
    const inputArray = []
    const result = compact(inputArray)

    expect(result).to.deep.equal([])
  })
})