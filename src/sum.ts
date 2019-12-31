import Money from "./money";
import Expression from "./expression";
import Bank from "./bank";
export default class Sum implements Expression {
  public augend: Expression;
  public addend: Expression;
  constructor(augend: Expression, addend: Expression) {
    this.augend = augend;
    this.addend = addend;
  }
  plus(addend: Expression): Expression {
    return null;
  }
  reduce(bank: Bank, to: string): Money {
    const amount =
      this.augend.reduce(bank, to).getAmount() +
      this.addend.reduce(bank, to).getAmount();
    return new Money(amount, to);
  }
}
