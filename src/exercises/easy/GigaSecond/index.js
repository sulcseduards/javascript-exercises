<<<<<<< HEAD:src/exercises/easy/GigaSecond/index.js
/**
 * Gigasecond
 *
 * Given a moment, determine the moment that would be after a gigasecond has passed.
 * A gigasecond is 10^9 (1,000,000,000) seconds.
 */

function gigasecond(date) {}

module.exports = gigasecond;
=======
/**
 * Gigasecond
 *
 * Given a moment, determine the moment that would be after a gigasecond has passed.
 * A gigasecond is 10^9 (1,000,000,000) seconds.
 */

function gigasecond(date) {
  const gigasec = Math.pow(10, 9) * 1000;
  const milliseconds = date.getTime();
  return new Date(milliseconds + gigasec);
}

module.exports = gigasecond;
>>>>>>> 43d4fe4c8e4257ede32108bcaf70311ffa53f84f:exercises/easy/GigaSecond/index.js
