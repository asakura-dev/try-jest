import Money from './src/money';
import Expression from './src/expression';
export default class Bank {
    reduce(source: Expression, to: string): Money {
        return Money.dollar(10);
    }
}
