<<<<<<< HEAD:src/exercises/easy/ExtractTransformLoad/index.js
/**
 * We are going to do the Transform step of an Extract-Transform-Load.
 *
 * ETL
 * Extract-Transform-Load (ETL) is a fancy way of saying, "We have some crufty, legacy data over in this system, and now we need it in this shiny new system over here, so we're going to migrate this."
 *
 * (Typically, this is followed by, "We're only going to need to run this once." That's then typically followed by much forehead slapping and moaning about how stupid we could possibly be.)
 *
 * The goal
 * We're going to extract some scrabble scores from a legacy system.
 *
 *The old system stored a list of letters per score:
 *
 *      1 point: "A", "E", "I", "O", "U", "L", "N", "R", "S", "T",
 *      2 points: "D", "G",
 *      3 points: "B", "C", "M", "P",
 *      4 points: "F", "H", "V", "W", "Y",
 *      5 points: "K",
 *      8 points: "J", "X",
 *      10 points: "Q", "Z",
 *
 * The shiny new scrabble system instead stores the score per letter, which makes it much faster and easier to calculate the score for a word. It also stores the letters in lower-case regardless of the case of the input letters:
 *
 *      "a" is worth 1 point.
 *      "b" is worth 3 points.
 *      "c" is worth 3 points.
 *      "d" is worth 2 points.
 *      Etc.
 *
 * Your mission, should you choose to accept it, is to transform the legacy data format to the shiny new format.
 *
 * Notes:
 * A final note about scoring, Scrabble is played around the world in a variety of languages, each with its own unique scoring table. For example, an "E" is scored at 2 in the Māori-language version of the game while being scored at 4 in the Hawaiian-language version.
 */

function transform(old) {}

module.exports = transform;
=======
/**
 * We are going to do the Transform step of an Extract-Transform-Load.
 *
 * ETL
 * Extract-Transform-Load (ETL) is a fancy way of saying, "We have some crufty, legacy data over in this system, and now we need it in this shiny new system over here, so we're going to migrate this."
 *
 * (Typically, this is followed by, "We're only going to need to run this once." That's then typically followed by much forehead slapping and moaning about how stupid we could possibly be.)
 *
 * The goal
 * We're going to extract some scrabble scores from a legacy system.
 *
 *The old system stored a list of letters per score:
 *
 *      1 point: "A", "E", "I", "O", "U", "L", "N", "R", "S", "T",
 *      2 points: "D", "G",
 *      3 points: "B", "C", "M", "P",
 *      4 points: "F", "H", "V", "W", "Y",
 *      5 points: "K",
 *      8 points: "J", "X",
 *      10 points: "Q", "Z",
 *
 * The shiny new scrabble system instead stores the score per letter, which makes it much faster and easier to calculate the score for a word. It also stores the letters in lower-case regardless of the case of the input letters:
 *
 *      "a" is worth 1 point.
 *      "b" is worth 3 points.
 *      "c" is worth 3 points.
 *      "d" is worth 2 points.
 *      Etc.
 *
 * Your mission, should you choose to accept it, is to transform the legacy data format to the shiny new format.
 *
 * Notes:
 * A final note about scoring, Scrabble is played around the world in a variety of languages, each with its own unique scoring table. For example, an "E" is scored at 2 in the Māori-language version of the game while being scored at 4 in the Hawaiian-language version.
 */

function transform(old) {
  let newObj = {};

  for (let i in old) {
    for (let value of Object.values(old[i])) {
      let tmp = value.toLowerCase();
      newObj[tmp] = Number(i);
    }
  }
  return newObj;
}

module.exports = transform;
>>>>>>> 43d4fe4c8e4257ede32108bcaf70311ffa53f84f:exercises/easy/ExtractTransformLoad/index.js
