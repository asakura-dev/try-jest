export default class WasRun {
  wasRun: boolean = false;
  funcName: string;
  constructor(name: string) {
    this.funcName = name;
  }
  testMethod() {
    this.wasRun = true;
  }
  run() {
    this[this.funcName]();
  }
}
