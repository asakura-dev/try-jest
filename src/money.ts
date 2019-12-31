export default abstract class Money {
  protected amount: number = 0;
  abstract times(multiplier: number): Money;
  equals(object: any) {
    const money = object as Money;
    return (
      this.amount === money.amount && 
      this.constructor === money.constructor
    );
  }
  static dollar(amount: number): Money {
    return new Dollar(amount);
  }
  static franc(amount: number): Money {
    return new Franc(amount);
  }
}

export class Dollar extends Money {
  constructor(amount: number) {
    super();
    this.amount = amount;
  }
  times(multiplier: number): Money {
    return new Dollar(this.amount * multiplier);
  }
}

export class Franc extends Money {
  constructor(amount: number) {
    super();
    this.amount = amount;
  }
  times(multiplier: number): Money {
    return new Franc(this.amount * multiplier);
  }
}