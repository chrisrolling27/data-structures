var Stack = function() {

  this.count = 0;
  this.storage = {};

};


Stack.prototype.size = function() {
  return this.count;
};

Stack.prototype.push = function(value) {
  this.storage[this.count] = value;
  this.count += 1;

};

Stack.prototype.pop = function() {
  if (this.count) {
    delete this.storage[this.count];
    this.count -= 1;
    return this.storage[this.count];
  }

};



var stacky = new Stack();