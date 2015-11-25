/**
 * Add/remove nth last item in an array.
 *
 * Splice
 * array.splice(start, deleteCount[, item1[, item2[, ...]]])
 *
 * start: If negative, will begin that many elements from the end.
 */

(function() {
  // Remove the last element from the array
  var arr = [1, 2, 3];
  // Format: Array.splice(index, howmany)
  arr.splice(-1, 1);
  console.log(arr); // [1, 2]
})();