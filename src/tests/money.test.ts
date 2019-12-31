import Money from "../money";
import Expression from "../expression";
import Bank from "../../bank";
import Sum from "../sum";
describe("money", (): void => {
  test("test multiplication", (): void => {
    const five: Money = Money.dollar(5);
    expect(Money.dollar(10).equals(five.times(2))).toBeTruthy();
    expect(Money.dollar(15).equals(five.times(3))).toBeTruthy();
  });
  test("test equality", (): void => {
    expect(Money.dollar(5).equals(Money.dollar(5))).toBeTruthy();
    expect(Money.dollar(5).equals(Money.dollar(6))).toBeFalsy();
    expect(Money.franc(5).equals(Money.dollar(5))).toBeFalsy();
  });
  test("test currency", (): void => {
    expect("USD").toBe(Money.dollar(1).getCurrency());
    expect("CHF").toBe(Money.franc(1).getCurrency());
  });
  test("simple addition", (): void => {
    const five = Money.dollar(5);
    const sum: Expression = five.plus(five);
    const bank = new Bank();
    const reduced: Money = bank.reduce(sum, "USD");
    expect(Money.dollar(10).equals(reduced)).toBeTruthy();
  });
  test("plus returns sum", (): void => {
    const five = Money.dollar(5);
    const result = five.plus(five);
    const sum = result as Sum;
    expect(five.equals(sum.augend)).toBeTruthy();
    expect(five.equals(sum.addend)).toBeTruthy();
  });
  test("reduce sum", (): void => {
    const sum: Expression = new Sum(Money.dollar(3), Money.dollar(4));
    const bank = new Bank();
    const result = bank.reduce(sum, "USD");
    expect(Money.dollar(7).equals(result)).toBeTruthy();
  });
  test("reduce money", (): void => {
    const bank = new Bank();
    const result = bank.reduce(Money.dollar(1), "USD");
    expect(Money.dollar(1).equals(result)).toBeTruthy();
  });
});
