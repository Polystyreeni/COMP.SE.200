import get from '../src/get.js';
import { expect } from 'chai';

describe('get', () => {
  const obj = { a: { b: { c: 1 } } };

  it('should return the value of a property when given a valid path', () => {
    expect(get(obj, 'a.b.c')).to.equal(1);
  });

  it('should return undefined when given an invalid path', () => {
    expect(get(obj, 'a.b.d')).to.be.undefined;
  });

  it('should return the default value when given an invalid path and a default value', () => {
    expect(get(obj, 'a.b.d', 'default')).to.equal('default');
  });

  it('should return the value of a property when given an array path', () => {
    expect(get(obj, ['a', 'b', 'c'])).to.equal(1);
  });

  it('should return undefined when given an invalid array path', () => {
    expect(get(obj, ['a', 'b', 'd'])).to.be.undefined;
  });

  it('should return the default value when given an invalid array path and a default value', () => {
    expect(get(obj, ['a', 'b', 'd'], 'default')).to.equal('default');
  });
});