// Hey! Rewrite in the new style. Your code will wind up looking very similar,
// but try not not reference your old code in writing the new style.

var Stack = function() {

  var stacky = {};

  stacky.counter = 0;
  stacky.storage = {};

  _.extend(stacky, stackMethods);

  return stacky;

};



var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.counter] = value;
  this.counter += 1;
};

stackMethods.pop = function() {
  if (this.counter > 0) {
    delete this.storage[this.counter];
    return this.storage[this.counter -= 1];
  }
};

stackMethods.size = function() {
  return this.counter;
};



