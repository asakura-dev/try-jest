export default class Dollar {
  amount: number = 0;
  constructor(amount: number) {
    this.amount = amount;
  }
  times(multiplier: number){
    this.amount *= multiplier;
  }
}