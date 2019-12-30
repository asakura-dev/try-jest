import Dollar from "../dollar";

describe('money', (): void => {
  test('test multiplication', (): void => {
    const five = new Dollar(5);
    five.times(2);
    expect(five.amount).toEqual(10);
  });
});