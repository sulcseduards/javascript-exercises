/**
 * Gigasecond
 *
 * Given a moment, determine the moment that would be after a gigasecond has passed.
 * A gigasecond is 10^9 (1,000,000,000) seconds.
 */

function gigasecond(date) {
    const gigasec = Math.pow(10, 9) * 1000
    const milliseconds = date.getTime()
    return new Date(milliseconds + gigasec)
}

module.exports = gigasecond;
