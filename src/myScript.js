function subtraction(x, y) {
  var subtract;
  if (isNaN(x) || isNaN(y)) {
    subtract = "Invalid";
  } else {
    subtract = x - y;
  }
  return subtract;
}

module.exports = subtraction;
