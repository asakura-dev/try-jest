import Dollar from './dollar';
import Franc from './franc';
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