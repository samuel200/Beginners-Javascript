// JavaScript Mathmatical Operators

function absoluteValue(x) {
  // returns the absolute value of a number
  return Math.abs(x);
}

function higher(value) {
  //  return the highest value from an array of numbers. hint: spread operator is useful here
  let max = 0;
  for(let num of value){
    max = Math.max(max, num);
  }
  return max;
  // ...value was something that i might of been looking for, yours would probably be better, 
}

function lower(value) {
  //  return the lowest value from an array of numbers. hint: spread operator is useful here
  let min = 0
  for(let num of value){
    min = Math.max(min, num);
  }
  return min;
}

function powers(x, y) {
  // returns a number, representing the value of x to the power of y
  return Math.pow(x, y);
}
function ceiling(x) {
  // returns a rounded number upward to its nearest integer
  return Math.ceil(x);
}

function pie(x) {
  // returns a number into a string fixed to 2 decimal places e.g "5.52"
  numString = x.toString()
  [num, decimal] = x.split(".")
  return `${num}.${decimal.substring(0, 2)}`;
  // its Math.PI
  // I did something like return Math.pi.toFixed(2); is it math.Pi or Math.Pi() i forget.
}

function sqaure(x) {
  // Return the square root of a number
  return Math.sqrt(x);
  // i totally miss read that
  // return Math.sqrt(x);
}
module.exports = { absoluteValue, higher, lower, powers, ceiling, pie, sqaure };
