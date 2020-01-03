export default class TestCase {
  funcName: string;
  constructor(name: string) {
    this.funcName = name;
  }
  setUp() {}
  run() {
    this.setUp();
    if (this[this.funcName]) {
      this[this.funcName]();
    }
  }
}
