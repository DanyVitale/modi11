import 'mocha';
import {expect} from 'chai';
import {clientCode, Sum} from '../src/index';
import {Substract} from '../src/index';
import {Product} from '../src/index';

describe('Index Tests', () => {
  it('Sum', () => {
    const sum = new Sum([1, 2, 3, 4, 5]);
    expect(sum.getCollection()).to.be.eqls([1, 2, 3, 4, 5]);
  });

  it('Sum - test 1', () => {
    const sum = new Sum([1, 2, 3, 4, 5]);
    expect(clientCode(sum)).to.equal(15);
  });

  it('Sum - test 2', () => {
    const sum = new Sum([-1, 0, 3, 4, 5]);
    expect(clientCode(sum)).to.equal(11);
  });

  it('Sum - test 3', () => {
    const sum = new Sum([-1, -2, -3, -4, -5]);
    expect(clientCode(sum)).to.equal(-15);
  });

  it('Substract', () => {
    const sum = new Substract([0, 2, -3, 4, 5]);
    expect(sum.getCollection()).to.be.eqls([0, 2, -3, 4, 5]);
  });

  it('Substract - test 1', () => {
    const substract = new Substract([1, -2, -3, 4, 5]);
    expect(clientCode(substract)).to.equal(-5);
  });

  it('Substract - test 2', () => {
    const substract = new Substract([1, 2, 3, 4, 5]);
    expect(clientCode(substract)).to.equal(-15);
  });

  it('Product', () => {
    const sum = new Product([0, 2, -3, -4, 5]);
    expect(sum.getCollection()).to.be.eqls([0, 2, -3, -4, 5]);
  });

  it('Product - test 1', () => {
    const product = new Product([1, 2, -3, 4, -5]);
    expect(clientCode(product)).to.equal(120);
  });

  it('Product', () => {
    const product = new Product([1, 2, 3, 4, 0]);
    expect(clientCode(product)).to.equal(0);
  });
});

