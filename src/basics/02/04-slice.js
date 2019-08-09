/**
 * Write function first5 which returns first five elements from the array
 */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8]; // You are NOT allowed to edit this line
const first5Numbers = first5(numbers); // You are NOT allowed to edit this line

function first5(numbers) {
    let firstFiveNumbers = numbers.slice(0, 5)
    return firstFiveNumbers
}

console.log(first5Numbers); // Expected result: [1, 2, 3, 4, 5]
