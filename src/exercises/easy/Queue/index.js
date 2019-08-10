<<<<<<< HEAD:src/exercises/easy/Queue/index.js
/**
 * Queue
 *
 * Create a queue data structure. The queue
 * should be a class with methods 'add' and 'remove'.
 * Adding to the queue should store an element until
 * it is removed.
 *
 * Examples:
 * const q = new Queue();
 * q.add(1);
 * q.remove(); // returns 1
 */

class Queue {}

module.exports = Queue;
=======
/**
 * Queue
 *
 * Create a queue data structure. The queue
 * should be a class with methods 'add' and 'remove'.
 * Adding to the queue should store an element until
 * it is removed.
 *
 * Examples:
 * const q = new Queue();
 * q.add(1);
 * q.remove(); // returns 1
 */

class Queue {
  constructor() {
    this.numbers = [];
  }

  add(number) {
    this.numbers.unshift(number);
  }

  remove() {
    return this.numbers.pop();
  }

  peek() {
    return this.numbers[numbers.length - 1];
  }
}

module.exports = Queue;
>>>>>>> 43d4fe4c8e4257ede32108bcaf70311ffa53f84f:exercises/easy/Queue/index.js
