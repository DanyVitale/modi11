import 'mocha';
import {expect} from 'chai';
import {add} from '../src/index';

describe('modificacion2803', () => {
  it('should add two numbers', () => {
    const result = add(1, 2);
    expect(result).to.equal(3);
  });
});
