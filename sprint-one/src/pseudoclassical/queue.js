var Queue = function() {

  this.count = 0;
  this.storage = {};

};

Queue.prototype.size = function() {
  return this.count;
};

Queue.prototype.dequeue = function() {
  if (this.count) {
    let result = this.storage[0];
    this.count -= 1;
    for (let i = 0; i < this.count; i++) {
      this.storage[i] = this.storage[i + 1 ];
    }
    return result;
  }
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.count] = value;
  this.count += 1;
};

var que = new Stack();