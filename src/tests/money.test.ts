import Dollar from "../dollar";

describe('money', (): void => {
  test('test multiplication', (): void => {
    const five = new Dollar(5);
    const product = five.times(2);
    expect(product.amount).toEqual(10);
    const product2 = five.times(3);
    expect(product2.amount).toEqual(15);
  });
});