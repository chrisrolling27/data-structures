class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {

    this.count = 0;
    this.storage = {};

  }

  size() {
    return this.count;
  }

  push(value) {
    this.storage[this.count] = value;
    this.count += 1;
  }

  pop() {
    if (this.count) {

      delete this.storage[this.count];
      this.count -= 1;
      return this.storage[this.count];
    }

  }

}

var stacky = new Stack();