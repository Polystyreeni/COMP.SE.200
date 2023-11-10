import ceil from '../src/ceil.js';
import { expect } from 'chai';

describe('ceil', () => {
  it('should return the smallest integer greater than or equal to the given number', () => {
    expect(ceil(4.2)).to.equal(5);
    expect(ceil(0.5)).to.equal(1);
    expect(ceil(-1.5)).to.equal(-1);
  });

  it('should return NaN when given a non-numeric value', () => {
    expect(ceil('hello')).to.be.NaN;
    expect(ceil(null)).to.be.NaN;
    expect(ceil(undefined)).to.be.NaN;
  });
});