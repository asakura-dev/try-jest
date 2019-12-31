import Money from "./money";
import Expression from "./expression";
import Bank from "./bank";
export default class Sum implements Expression {
  public augend: Money;
  public addend: Money;
  constructor(augend: Money, addend: Money) {
    this.augend = augend;
    this.addend = addend;
  }
  reduce(bank: Bank, to: string): Money {
    const amount = this.augend.getAmount() + this.addend.getAmount();
    return new Money(amount, to);
  }
}
