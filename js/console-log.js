/**
 * Cool ways to add styles to console statements
 *
 * @Reference:
 * https://davidwalsh.name/add-styles-console
 * https://jsfiddle.net/Lta6p2jz/3/
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





