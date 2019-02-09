// JavaScript Arithmetic Operators
// if you want to work on one problem at a time you can go into the numbers.spec.js file and add .only
// to the describe block like so describe.only("basic addition")
// dont forget to remove it and add it to the next test

function addition(x, y) {
  // returns the sum of both numbers
  return x + y;
}

function multiplication(x, y) {
  //returns the multiplied sum of two values
  return x * y;
}
function division(x, y) {
  // returns a divided sum of two values
  return x  / y;
}
function subtraction(x, y) {
  // returns a subtracted sum of two values
  return x  - y;
}
function modulus(x, y) {
  //returns the remainder
  return x % y;
}
// all fine above here

function lowerThan(x, y) {
  // returns a value lower than the other
  return (x < y) ? x : y;
  // can do return x < y or return (x < y)
}

function greaterThan(x, y) {
  // returns a value greater than the other
  return (x > y) ? x : y;
  // can do return x > y or return (x > y)
}
function increment(x) {
  // returns a number incremented by one
  return x++;
  // you can do x++ or ++x, i had trouble with this passing the tests but ++x should pass the tests
}

function decrement(x) {
  // returns a number decremented by one
  return x--;
  // you can do x-- or --x, i had trouble with this passing the tests but ++x should pass the tests
}

//Assignment Operators

function assignment(x) {
  // returns a reassigned number, you cannot use divide here.
  return x /= 2;
}
function additionAssignment(x, y) {
  // returns an added number and reassigns it
  return x += y;
  // good most people dont get these ones
}
function subtractionAssignment(x, y) {
  // returns a subtracted number and reassigns it
  return x -= y;
  // good most people dont get these ones
}

function multiplicationAssignment(x, y) {
  // returns a multiplied number and reassigns it
  return x *= y;
  // good most people dont get these ones
}
function divisionAssignment(x, y) {
  // returns a multiplied number and reassigns it
  return x *= y;
  // good most people dont get these ones
}
function remainderAssignment(x, y) {
  // returns the remainder and reassigns it
  return x *= y;
  // good most people dont get these ones
}
function digitCount(n) {
  // returns the number of digits in a number
  return n.toString().length;
  // i like this one did n.length not work?
}
module.exports = {
  addition,
  subtraction,
  multiplication,
  division,
  modulus,
  lowerThan,
  greaterThan,
  increment,
  decrement,
  assignment,
  additionAssignment,
  subtractionAssignment,
  multiplicationAssignment,
  divisionAssignment,
  remainderAssignment,
  digitCount
};
