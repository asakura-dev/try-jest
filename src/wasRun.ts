import TestCase from "./testCase";

export default class WasRun extends TestCase {
  public log: string = "";
  constructor(name: string) {
    super(name);
  }
  testMethod() {
    this.log += "testMethod ";
  }
  setUp() {
    this.log += "setUp ";
  }
  tearDown() {
    this.log += "tearDown ";
  }
}
