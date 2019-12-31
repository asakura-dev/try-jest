export default abstract class Money {
  protected amount: number = 0;
  protected currency: string;
  abstract times(multiplier: number): Money;
  equals(object: any) {
    const money = object as Money;
    return (
      this.amount === money.amount && 
      this.constructor === money.constructor
    );
  }
  getCurrency() {
    return this.currency;
  }
  static dollar(amount: number): Money {
    return new Dollar(amount, "USD");
  }
  static franc(amount: number): Money {
    return new Franc(amount, "CHF");
  }
}

export class Dollar extends Money {
  constructor(amount: number, currency: string) {
    super();
    this.amount = amount;
    this.currency = currency;
  }
  times(multiplier: number): Money {
    return Money.dollar(this.amount * multiplier);
  }
}

export class Franc extends Money {
  constructor(amount: number, currency: string) {
    super();
    this.amount = amount;
    this.currency = currency;
  }
  times(multiplier: number): Money {
    return Money.franc(this.amount * multiplier);
  }
}