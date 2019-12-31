import Money from '../money';

describe('money', (): void => {
  test('test multiplication', (): void => {
    const five: Money = Money.dollar(5);
    expect(
        Money.dollar(10).equals(five.times(2))
    ).toBeTruthy();
    expect(
        Money.dollar(15).equals(five.times(3))
    ).toBeTruthy();
  });
  test('test equality', (): void => {
    expect(
        Money.dollar(5).equals(Money.dollar(5))
    ).toBeTruthy();
    expect(
        Money.dollar(5).equals(Money.dollar(6))
    ).toBeFalsy();
    expect(
        Money.franc(5).equals(Money.franc(5))
    ).toBeTruthy();
    expect(
        Money.franc(5).equals(Money.franc(6)
    )).toBeFalsy();
    expect(
        Money.franc(5).equals(Money.dollar(5))
    ).toBeFalsy();
  });
  test('test franc multiplication', (): void => {
    const five = Money.franc(5);
    expect(
        Money.franc(10).equals(five.times(2))
    ).toBeTruthy();
    expect(
        Money.franc(15).equals(five.times(3))
    ).toBeTruthy();
  });
  test('test currency', (): void => {
    expect("USD").toBe(Money.dollar(1).getCurrency());
    expect("CHF").toBe(Money.franc(1).getCurrency());
  });
});