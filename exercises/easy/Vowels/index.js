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
    var vowel_list = 'aeiouAEIOU';
    var vcount = 0;

    for (var x = 0; x < string.length; x++) {
        if (vowel_list.indexOf(string[x]) !== -1) {
            vcount += 1;
        }

    }
    return vcount;

}

module.exports = vowels;
