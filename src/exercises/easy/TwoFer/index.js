<<<<<<< HEAD:src/exercises/easy/TwoFer/index.js
/**
 * Two-fer or 2-fer is short for two for one. One for you and one for me.
 *
 * Given a name, return a string with the message: One for X, one for me.
 * Where X is the given name.
 *
 * However, if the name is missing, return the string: One for you, one for me.
 *
 * Examples:
 * twoFer("Alice") === "One for Alice, one for me."
 * twoFer("Bob") === "One for Bob, one for me."
 * twoFer() === "One for you, one for me."
 */

function twoFer(name) {}

module.exports = twoFer;
=======
/**
 * Two-fer or 2-fer is short for two for one. One for you and one for me.
 *
 * Given a name, return a string with the message: One for X, one for me.
 * Where X is the given name.
 *
 * However, if the name is missing, return the string: One for you, one for me.
 *
 * Examples:
 * twoFer("Alice") === "One for Alice, one for me."
 * twoFer("Bob") === "One for Bob, one for me."
 * twoFer() === "One for you, one for me."
 */

function twoFer(name) {
  if (name) {
    return "One for " + name + ", one for me.";
  }
  return "One for you, one for me.";
}

module.exports = twoFer;
>>>>>>> 43d4fe4c8e4257ede32108bcaf70311ffa53f84f:exercises/easy/TwoFer/index.js
