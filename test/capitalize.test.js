import capitalize from '../src/capitalize.js';
import { expect } from 'chai';

describe('capitalize', () => {
  it('should capitalize the first letter of a string', () => {
    const result = capitalize('hello');
    expect(result).to.equal('Hello');
  });

  it('should convert all other letters to lowercase', () => {
    const result = capitalize('WORLD');
    expect(result).to.equal('World');
  });

  it('should handle empty strings', () => {
    const result = capitalize('');
    expect(result).to.equal('');
  });

  it('should handle strings with only one character', () => {
    const result = capitalize('a');
    expect(result).to.equal('A');
  });

  it('should handle strings with special characters', () => {
    const result = capitalize('@test');
    expect(result).to.equal('@test');
  });
});