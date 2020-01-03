import TestCase from "./testCase";
import WasRun from "./wasRun";
import assert from "./assert";
class TestCaseTest extends TestCase {
  testTemplateMethod() {
    const test = new WasRun("testMethod");
    test.run();
    assert("setUp testMethod tearDown " === test.log);
  }
}

new TestCaseTest("testTemplateMethod").run();
