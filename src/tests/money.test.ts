import Dollar from "../dollar";

describe('money', (): void => {
  test('test multiplication', (): void => {
    const five = new Dollar(5);
    const product = five.times(2);
    expect((new Dollar(10).equals(product))).toBeTruthy();
    const product2 = five.times(3);
    expect((new Dollar(15)).equals(product2)).toBeTruthy();
  });
  test('test equality', (): void => {
    expect((new Dollar(5)).equals(new Dollar(5))).toBeTruthy();
    expect((new Dollar(5)).equals(new Dollar(6))).toBeFalsy();
  });
});