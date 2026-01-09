class Calculator {
  add(a, b) {
    return a + b;
  }
  sub(a, b) {
    return a > b ? a - b : b - a;
  }
  multiply(a, b) {
    return a * b;
  }
  divide(a, b) {
    return a > b ? a / b : b / a;
  }
}

module.exports = Calculator;
