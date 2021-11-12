// Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

var Stack = function() {

  var stacky = Object.create(stackMethods);

  stacky.count = 0;
  stacky.storage = {};

  return stacky;

};

var stackMethods = {};


stackMethods.size = function() {
  return this.count;
};

stackMethods.push = function(value) {
  this.storage[this.count] = value;
  this.count += 1;
};

stackMethods.pop = function() {
  if (this.count > 0) {

    delete this.storage[this.count];
    this.count -= 1;
    return this.storage[this.count];
  }

};