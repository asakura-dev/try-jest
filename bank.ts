import Money from "./src/money";
import Expression from "./src/expression";
import Sum from "./src/sum";
export default class Bank {
  reduce(source: Expression, to: string): Money {
    const sum = source as Sum;
    return sum.reduce(to);
  }
}
