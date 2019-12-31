import Expression from "./expression";
import Sum from "./sum";
import Bank from "./bank";
export default class Money implements Expression {
  protected amount: number = 0;
  protected currency: string;
  constructor(amount: number, currency: string) {
    this.amount = amount;
    this.currency = currency;
  }
  times(multiplier: number): Money {
    return new Money(this.amount * multiplier, this.currency);
  }
  plus(addend: Money): Expression {
    return new Sum(this, addend);
  }
  reduce(bank: Bank, to: string): Money {
    const rate = bank.rate(this.currency, to);
    return new Money(this.amount / rate, to);
  }
  equals(object: any) {
    const money = object as Money;
    return this.amount === money.amount && this.currency === money.currency;
  }
  getCurrency() {
    return this.currency;
  }
  getAmount() {
    return this.amount;
  }
  static dollar(amount: number): Money {
    return new Money(amount, "USD");
  }
  static franc(amount: number): Money {
    return new Money(amount, "CHF");
  }
}
