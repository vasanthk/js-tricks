/**
 * Swap two variables with ES6 or ES5
 *
 * https://www.quora.com/How-can-I-swap-two-integers-without-temporary-variables-using-JavaScript-code
 */

(function() {
  var a = 2;
  var b = 3;

  // Swap both variables
  b = a + (a = b) -b;

  // In ES6 -- Using destructuring assignment :)
  [a, b] = [b, a];

  // Using XOR
  a = a ^ b;
  b = a ^ b;
  a = a ^ b;
  // Important note about XOR is that it holds bit-differences between two values.
  // When this bit difference is XORed again with one value, we get other value.
})();