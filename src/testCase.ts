export default class TestCase {
  funcName: string;
  constructor(name: string) {
    this.funcName = name;
  }
  setUp() {}
  tearDown() {}
  run() {
    this.setUp();
    if (this[this.funcName]) {
      this[this.funcName]();
    }
    this.tearDown();
  }
}
