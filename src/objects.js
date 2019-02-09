function empty(object) {
  // returns an empty object
  return {}
  // return {} 
  // return object
  //works like the array can do return object with the argument in the function
}
function objectKeys(obj) {
  //returns an array of keys from an object
  return Object.keys(obj)
}
function objectValues(obj) {
  //returns an array of values from an object
  return Object.values(obj)
}
function keyCount(obj) {
  // returns a count of the keys in an object
  // pass the obj into the function
  return Object.keys(obj).length
  // this works too if you really wanted but it means more typing let count = Object.keys(obj).length
  //return count
}

function getUsername(obj) {
  // returns a username from an object
  return obj.username
  // this is fine
}

function deleteSurname(obj) {
  //returns an object with a deleted surname
  delete obj.surname
  return obj
  // this is how i passed the test on this one
}
module.exports = {
  empty,
  objectKeys,
  objectValues,
  keyCount,
  getUsername,
  deleteSurname
};
