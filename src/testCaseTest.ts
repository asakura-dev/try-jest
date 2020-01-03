import TestCase from "./testCase";
import WasRun from "./wasRun";
import assert from "./assert";
class TestCaseTest extends TestCase {
  testRunning() {
    const test = new WasRun("testMethod");
    assert(!test.wasRun);
    test.run();
    assert(test.wasRun);
  }
}

new TestCaseTest("testRunning").run();
