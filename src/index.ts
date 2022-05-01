/**
 * ReduceAlgorithm describes the algorithm used to reduce the data.
 */
export abstract class ReduceAlgorithm {
  constructor(protected collection: number[]) {
    this.collection = collection;
  }

  /**
   * getCollection() returns the collection.
   * @returns {number} collection
   */
  getCollection(): number[] {
    return this.collection;
  }

  /**
   * run() is the entry point of the algorithm.
   * @returns {number}
   */
  public run() {
    // Hook
    this.beforeInit();
    // Reduce method
    this.reduce();
    // Hook
    this.afterInit();
  }

  /**
   * reduce() is the core of the algorithm. It must be implemented by subclasses.
   */
  protected abstract reduce(): number;
  /**
   * beforeInit() is a hook that is called before the reduce() method.
   */
  protected beforeInit(): void {}
  /**
   * afterInit() is a hook that is called after the reduce() method.
   */
  protected afterInit(): void {}
}

/**
 * Sum is a concrete implementation of the ReduceAlgorithm.
 */
export class Sum extends ReduceAlgorithm {
  constructor(protected collection: number[]) {
    super(collection);
  }

  /**
   * beforeInit() is a hook that is called before the reduce() method.
   */
  protected beforeInit(): void {
    console.log('Before Add');
  }

  /**
   * afterInit() is a hook that is called after the reduce() method.
   */
  protected afterInit(): void {
    console.log('After Add');
  }

  /**
   * reduce() is the core of the algorithm.
   * @returns {number} The sum of the collection.
   */
  protected reduce(): number {
    let sum: number = 0;
    for (let i = 0; i < this.collection.length; i++) {
      sum += this.collection[i];
    }
    console.log(sum);
    return sum;
  }
}

/**
 * Substract is a concrete implementation of the ReduceAlgorithm.
 */
export class Substract extends ReduceAlgorithm {
  constructor(collection: number[]) {
    super(collection);
  }

  /**
   * beforeInit() is a hook that is called before the reduce() method.
   */
  protected beforeInit(): void {
    console.log('Before substract');
  }

  /**
   * afterInit() is a hook that is called after the reduce() method.
   */
  protected afterInit(): void {
    console.log('After substract');
  }

  /**
   * reduce() is the core of the algorithm.
   * @returns {number} The substract of the collection.
   */
  protected reduce(): number {
    let sum: number = 0;
    for (let i = 0; i < this.collection.length; i++) {
      sum -= this.collection[i];
    }
    console.log(sum);
    return sum;
  }
}

/**
 * Product is a concrete implementation of the ReduceAlgorithm.
 */
export class Product extends ReduceAlgorithm {
  constructor(collection: number[]) {
    super(collection);
  }

  /**
   * beforeInit() is a hook that is called before the reduce() method.
   */
  protected beforeInit(): void {
    console.log('Before product');
  }

  /**
   * afterInit() is a hook that is called after the reduce() method.
   */
  protected afterInit(): void {
    console.log('After product');
  }

  /**
   * reduce() is the core of the algorithm.
   * @returns {number} The product of the collection.
   */
  protected reduce(): number {
    let sum: number = 1;
    for (let i = 0; i < this.collection.length; i++) {
      sum *= this.collection[i];
    }
    console.log(sum);
    return sum;
  }
}

/**
 * client code that uses the algorithm.
 * @param algorithm Return the algorithm to use.
 */
export function clientCode(algorithm: ReduceAlgorithm) {
  algorithm.run();
}

clientCode(new Sum([1, 2, 3, 4, 5]));
clientCode(new Substract([1, 2, 3]));
clientCode(new Product([1, 2]));
