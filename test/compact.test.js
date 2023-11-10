import compact from '../src/compact.js';
import { expect } from 'chai';

describe('compact', () => {
  it('should remove falsey values from the array', () => {
    const inputArray = [0, 1, false, 2, '', 3];
    const result = compact(inputArray);

    expect(result).to.deep.equal([1, 2, 3]);
  });

  it('should handle arrays with all falsey values', () => {
    const inputArray = [false, null, 0, '', undefined, NaN];
    const result = compact(inputArray);

    expect(result).to.deep.equal([]);
  });

  it('should handle arrays with no falsey values', () => {
    const inputArray = [1, 'hello', true, { key: 'value' }];
    const result = compact(inputArray);

    expect(result).to.deep.equal([1, 'hello', true, { key: 'value' }]);
  });

  it('should handle an empty array', () => {
    const inputArray = [];
    const result = compact(inputArray);

    expect(result).to.deep.equal([]);
  });
});