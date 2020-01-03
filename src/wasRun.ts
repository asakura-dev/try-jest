export default class WasRun {
  wasRun: boolean = false;
  constructor(name: string) {}
  testMethod() {
    this.wasRun = true;
  }
}
