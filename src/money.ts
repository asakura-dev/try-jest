export default class Money {
  protected amount: number = 0;
  equals(object: any) {
    const money = object as Money;
    return (
      this.amount === money.amount && 
      this.constructor === money.constructor
    );
  }
}