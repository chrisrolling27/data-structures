var Stack = function() {
  var someInstance = {};

  var storage = {}; // Use an object with numeric keys to store values
  var counter = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[counter] = value;
    counter += 1;
  };

  someInstance.pop = function() {
    if (counter > 0) {
      delete storage[counter];
      return storage[counter -= 1];
    }
  };

  someInstance.size = function() {
    return counter;
  };

  return someInstance;
};
