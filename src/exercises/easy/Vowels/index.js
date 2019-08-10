<<<<<<< HEAD:src/exercises/easy/Vowels/index.js
/**
 * Vowels
 *
 * Write a function which returns number of vowels in given string.
 *
 * Examples:
 * vowels('aeiou') === 5
 * vowels('Adam') === 2
 * vowels('Hello there!') === 4
 */

function vowels(string) {}

module.exports = vowels;
=======
/**
 * Vowels
 *
 * Write a function which returns number of vowels in given string.
 *
 * Examples:
 * vowels('aeiou') === 5
 * vowels('Adam') === 2
 * vowels('Hello there!') === 4
 */

function vowels(string) {
  var vowel_list = "aeiouAEIOU";
  var vcount = 0;

  for (var x = 0; x < string.length; x++) {
    if (vowel_list.indexOf(string[x]) !== -1) {
      vcount += 1;
    }
  }
  return vcount;
}

module.exports = vowels;
>>>>>>> 43d4fe4c8e4257ede32108bcaf70311ffa53f84f:exercises/easy/Vowels/index.js
