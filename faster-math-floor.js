/**
 * Faster Math.floor() with Bitwise NOT (~~)
 *
 * @Note: it differs from .floor() in that it actually just removes anything to the right of the decimal.
 * This makes a difference when used against a negative number. Also, it will always return a number,
 * and will never give you NaN. If it can't be converted to a number, you'll get 0.
 *
 * Use double bitwise NOT when:
 * - You want to convert the number from float to integer.
 * - You want to perform same operation as Math.floor() but a lot quicker.
 * - You want to minimalize your code.
 *
 * Do not use double bitwise NOT when:
 * - You care about readability of your code.
 *
 */

(function () {
    console.log(~(5.5))     // => -6
    console.log(~(-6))      // => 5
    console.log(~~5.5)      // => 5  (same as Math.floor(5.5))
    console.log(~~(-5.5))   // => -5 (NOT the same as Math.floor(-5.5), which would give -6 )
})();