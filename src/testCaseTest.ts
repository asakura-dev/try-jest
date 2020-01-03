import TestCase from "./testCase";
import WasRun from "./wasRun";
import assert from "./assert";
class TestCaseTest extends TestCase {
  test: WasRun;
  setUp() {
    this.test = new WasRun("testMethod");
  }
  testRunning() {
    this.test.run();
    assert(this.test.wasRun);
  }
  testSetup() {
    this.test.run();
    assert(this.test.wasSetUp);
  }
}

new TestCaseTest("testRunning").run();
new TestCaseTest("testSetup").run();
