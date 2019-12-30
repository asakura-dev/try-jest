export default class Dollar {
  amount: number = 0;
  constructor(amount: number) {
    this.amount = amount;
  }
  times(multiplier: number): Dollar {
    return new Dollar(this.amount * multiplier);
  }
  equals(dollar: Dollar) {
    return this.amount === dollar.amount;
  }
}