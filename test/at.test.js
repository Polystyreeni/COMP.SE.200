import at from '../src/at.js';
import { expect } from 'chai';

describe('at', () => {
  it('should return an array of values at the specified paths in the object', () => {
    const object = {
      a: 1,
      b: {
        c: 2,
        d: {
          e: 3,
          f: 4
        }
      },
      g: [5, 6, 7]
    };

    const result = at(object, 'a', 'b.c', 'b.d.e', 'g[1]');
    expect(result).to.deep.equal([1, 2, 3, 6]);
  });

  it('should return undefined for non-existent paths', () => {
    const object = {
      a: 1,
      b: {
        c: 2
      }
    };

    const result = at(object, 'x', 'b.d', 'y[0]');
    expect(result).to.deep.equal([undefined, undefined, undefined]);
  });

  it('should handle array paths correctly', () => {
    const object = {
      a: [1, 2, 3],
      b: {
        c: [4, 5, 6]
      }
    };

    const result = at(object, 'a[0]', 'b.c[2]');
    expect(result).to.deep.equal([1, 6]);
  });

  it('should handle empty paths correctly', () => {
    const object = {
      a: 1,
      b: {
        c: 2
      }
    };

    const result = at(object);
    expect(result).to.deep.equal([]);
  });
});