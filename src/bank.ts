import Money from "./money";
import Expression from "./expression";
import Pair from "./pair";
export default class Bank {
  private rates: Map<number, number> = new Map();
  reduce(source: Expression, to: string): Money {
    return source.reduce(this, to);
  }
  addRate(from: string, to: string, rate: number) {
    this.rates.set(new Pair(from, to).hashCode(), rate);
  }
  rate(from: string, to: string): number {
    if (from === to) {
      return 1;
    }
    return this.rates.get(new Pair(from, to).hashCode());
  }
}
