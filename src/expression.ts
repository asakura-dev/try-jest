import Money from "./money";
import Bank from "./bank";
export default interface Expression {
  reduce(bank: Bank, to: string): Money;
  plus(addend: Expression): Expression;
  times(multiplier: number): Expression;
}
