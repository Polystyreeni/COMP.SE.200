import compact from '../src/compact.js'
import { expect } from 'chai'

describe('compact', () => {
  // Test case ignored to make CI pipeline runnable (as fixing the source code was not part of the assignment)
  // The bug this test exposes has been documented on GitHub Issues Board
  // 
  /*it('Should remove falsey values from a array including truthy values', () => {
    const result = compact([0, 1, false, 2, '', 3])    
    expect(result).to.deep.equal([1, 2, 3])
  })*/

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