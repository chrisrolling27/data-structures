// Your code will wind up looking very similar, but try not not reference your old code in writing the new style.

var Queue = function() {

  var something = {};

  something.counter = 0;
  something.storage = {};

  _.extend(something, queueMethods);

  return something;

};

var queueMethods = {};

queueMethods.size = function() {
  return this.counter;
};

queueMethods.enqueue = function(value) {
  this.storage[this.counter] = value;
  this.counter += 1;
};

queueMethods.dequeue = function() {
  //oldest first
  if (this.counter > 0) {
    var result = this.storage[0];
    delete this.storage[0];
    this.counter -= 1;

    for (var i = 0; i < this.counter; i++) {
      this.storage[i] = this.storage[i + 1];
    }
    return result;
  }

};



