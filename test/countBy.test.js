import { expect } from 'chai';
import countBy from '../src/countBy.js';

describe('countBy', () => {
  it('should count the number of active and inactive users correctly', () => {
    const users = [
      { 'user': 'barney', 'active': true },
      { 'user': 'betty', 'active': true },
      { 'user': 'fred', 'active': false }
    ];

    const result = countBy(users, value => value.active);

    expect(result).to.deep.equal({ false: 0, true: 1 });
  });

  it('should handle an empty array gracefully', () => {
    const result = countBy([], value => value);

    expect(result).to.deep.equal({});
  });

  it('should count the occurrences of numbers in an array', () => {
    const numbers = [1, 2, 3, 4, 2, 1, 3, 1];

    const result = countBy(numbers, value => value);

    expect(result).to.deep.equal({ '1': 2, '2': 1, '3': 1, '4': 0 });
  });

  it('should count the occurrences of string lengths in an array of words', () => {
    const words = ['apple', 'banana', 'orange', 'grape'];

    const result = countBy(words, value => value.length);

    expect(result).to.deep.equal({ '5': 1, '6': 1 });
  });
});
