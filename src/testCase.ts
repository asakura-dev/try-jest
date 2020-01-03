export default class TestCase {
  funcName: string;
  constructor(name: string) {
    this.funcName = name;
  }
  run() {
    if (this[this.funcName]) {
      this[this.funcName]();
    }
  }
}
