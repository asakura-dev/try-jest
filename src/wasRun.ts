import TestCase from "./testCase";

export default class WasRun extends TestCase {
  wasRun: boolean = false;
  constructor(name: string) {
    super(name);
  }
  testMethod() {
    this.wasRun = true;
  }
}
