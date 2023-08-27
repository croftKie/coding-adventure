export default class Test {
  constructor(name, input, result, testableFunction) {
    this.name = name;
    this.input = input;
    this.result = result;
    this.testableFunction = testableFunction;
  }
  test() {
    const testResult = eval(this.testableFunction + this.input);
    try {
      // checks
      const typeCheck = typeof testResult === typeof this.result;
      const contentCheck = testResult === this.result;

      // results conditional
      if (typeCheck && contentCheck) {
        return "PASSED";
      }

      if (!typeCheck && !contentCheck) {
        return "Incorrect type and content";
      }

      if (!typeCheck) {
        return "Type of test result does not match expected type";
      }

      if (!contentCheck) {
        return "return value of test result does not match expected result";
      }
    } catch (error) {
      return "function could not be evaluated";
    }
  }
  getFunctionOutput() {
    return eval(this.testableFunction + this.input);
  }

  getTestableFunction() {
    return eval(this.testableFunction());
  }
  getResult() {
    return this.result;
  }
  describe() {
    return this.name;
  }
  debug() {
    console.log(this.name, this.input, this.result, this.testableFunction);
  }
}
