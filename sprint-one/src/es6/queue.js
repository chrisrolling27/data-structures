class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {

    this.count = 0;
    this.storage = {};
  }

  size() {
    return this.count;
  }

  enqueue(value) {

    this.storage[this.count] = value;
    this.count += 1;

  }

  dequeue() {
    if (this.count) {

      let result = this.storage[0];
      this.count -= 1;
      for (let i = 0; i < this.count; i++) {
        this.storage[i] = this.storage[i + 1];
      };

      return result;
    }


  }

}


var que = new Queue();
