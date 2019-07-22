/**
 * Word Lengths
 *
 * Array of words are passed in the function, your task is to count letters in each of them.
 */

function wordLengths(array) {
    let newArray = [];
    for (let i in array) {
        newArray.push(array[i].length)
    }
    return newArray
}

module.exports = wordLengths;
