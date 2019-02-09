function empty(arr) {
  //returns an empty array
  return []
  // you can either do 
  // return [] like you did or
  // return arr which would grab the items from the tests;
  // but what if the person actually passes in values into the argument for the empty();
}

function arrayLength(arr) {
  // it returns an array of length 5
  return arr.length

  // this is fine getting the array from the tests  and getting the length of the array;
}

function push(arr, val) {
  // returns an array with one additional element added
  return arr.push(val);
  //perfect here as well although cant see the tests since its slow
}

// function find() {
//   // returns one found element in the array, the word you need is banana
// }

function pop(arr, veg) {
  // returns the last element of an array
  return arr.pop();
  // for this although this might be a problem with the tests and not you
  // array.pop(veg) something like that I would assume been awhile since I did this
}
function sorted(arr) {
  // returns an array sorted in ascending order
  return arr.sort();
  var sortedArray = arr.sort(function(a, b) {
    return a - b 
    // return b - a not sure which way round it is
    // you could also do this in one line of code using =>
});

// something like this for sorting obviously cant test again
}
function concat(arr1, arr2) {
  // returns a single array
  return arr1.concat(arr2);
  // concat is fine more than one way to do things
}
function join(arr) {
  // returns a joined string from an array with spaces
  return arr.join(" ");
}

function split(val) {
  // returns an array from a string
  return val.split(" ");
  //splitting on the space and returning an array so far so good.
}
module.exports = {
  empty,
  arrayLength,
  push,
  pop,
  // find,
  sorted,
  concat,
  join,
  split
};
