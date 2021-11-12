var Queue = function() {


  let que = Object.create(queueMethods);

  que.count = 0;
  que.storage = {};

  return que;

};

var queueMethods = {};

queueMethods.size = function() {
  return this.count;
};

queueMethods.enqueue = function(value) {
  this.storage[this.count] = value;
  this.count += 1;
};

queueMethods.dequeue = function() {
  if (this.count > 0) {
    let result = this.storage[0];
    delete this.storage[0];
    this.count -= 1;

    for (let i = 0; i < this.count; i++) {
      this.storage[i] = this.storage[i + 1];
    }

    return result;
  };
};
