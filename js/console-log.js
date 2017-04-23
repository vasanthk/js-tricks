/**
 * Cool ways to add styles to console statements
 *
 * @Reference:
 * https://davidwalsh.name/add-styles-console
 * https://jsfiddle.net/Lta6p2jz/3/
 * https://applyhead.com/must-know-javascript-console-tricks/
 */

// Format (Order of params)
// '%c' -- styles
// '%s' -- string
console.log("%c%s",
  "color: red; background: yellow; font-size: 24px;",
  "WARNING!");


// '%o' -- Object
console.debug('%c%o', 'color: grey; background-color: yellow; font-size: 24px', {'test': 'object'});
console.warn('%c%o', 'color: orange; background-color: purple; font-size: 24px', [1, 2, 3, 4]);
console.error('%c%o', 'color: red; background-color: blue; font-size: 24px', new Date);
console.info('%c%o', 'color: white; background-color: black; font-size: 24px', console.log);

// Test a library in the console
// You'll need a CDN url to load it.
var cdn = "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.4/lodash.min.js";
var script = document.createElement('script');
script .src = cdn;
document.getElementsByTagName('head')[0].appendChild(script);
// Now Test the library methods
// yes we have lodash loaded in the console
var array = [1, 2, 3];
_.reverse(array); // Ouput: [3, 2, 1]
