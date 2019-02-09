function emptyString() {
  // returns an empty string
  return ""
}

function stringConcat(...args) {
  // returns a string concatinated together with no spaces
  return args.reduce((x, y)=> x+y);
}
function stringConcatSpaced(...args) {
  // returns a longer concatinated string with spaces between each word
  return args.reduce((x, y)=> x+" "+y)
  // i did something daft like a + " " b and passed a, b into the function but spread operator works
}

function stringLength (text) {
  // returns the length of a string
  return text.length
}

function lowerCaseString (text) {
  return text.toLowerCase();
}


function upperCaseString (text) {
  return text.toUpperCase();
}
module.exports = { emptyString, stringConcat, stringConcatSpaced, stringLength, lowerCaseString, upperCaseString };
