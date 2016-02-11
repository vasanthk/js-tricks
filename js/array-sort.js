/**
 * Sort an array of numbers
 */

var arr = [2, 56, 3, 41, 0, 4, 100, 23];
// You would think this should work
arr.sort();
// But BOOM.. it doesn't do what we expected -- It sorts it as a string - not number.
console.log(arr);
// [0, 100, 2, 23, 3, 4, 41, 56]

// Working solution
var arr = [2, 56, 3, 41, 0, 4, 100, 23];
arr.sort(function (a, b) {
  return a - b;
  // For descending order
  // return b - a;
});
console.log(arr);
// [0, 2, 3, 4, 23, 41, 56, 100]
