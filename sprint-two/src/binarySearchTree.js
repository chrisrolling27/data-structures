var BinarySearchTree = function (value) {

  var newTree = {};

  newTree.left = null;
  newTree.right = null;
  newTree.value = value;

  _.extend(newTree, bstMethods);
  return newTree;
};

var bstMethods = {};

// adds value into newTree
bstMethods.insert = function (value) {
  var found = false;
  var currentNode = this;
  while (!found) {
    if (value === currentNode.value) {
      found = true;
      return found;
    } else if (value < currentNode.value) {
      // check to see if left side is null
      if (currentNode.left === null) {
        var addedNode = new BinarySearchTree(value);
        currentNode.left = addedNode;
        found = true;
        return;
      } else {
        currentNode = currentNode.left;
      }
    } else {
      if (currentNode.right === null) {
        var addedNode = new BinarySearchTree(value);
        currentNode.right = addedNode;
        found = true;
        return;
      } else {
        currentNode = currentNode.right;
      }
    }
  }
};

bstMethods.contains = function(target) {
  // similar to insert
  var found = false;
  var currentNode = this;
  while (!found) {
    if (target === currentNode.value) {
      found = true;
      return true;
    } else if (target < currentNode.value) {
      if (currentNode.left === null) {
        return found;
      } else {
        currentNode = currentNode.left;
      }
    } else { // target > currentNode.value
      if (currentNode.right === null) {
        return found;
      } else {
        currentNode = currentNode.right;
      }
    }
  }

};

bstMethods.depthFirstLog = function(func) {
  // executes a callback on every value in a tree
  // will push value into an array.
  var stack = [];
  var helper = function(currentNode) {
    // base case: if currentNode.left !== null call helper()
    if (currentNode.right !== null) {
      helper(currentNode.right);
    }
    if (currentNode.left !== null) {
      helper(currentNode.left);
    }
    stack.push(currentNode.value);
  };

  helper(this);

  while (stack.length > 0) {
    func(stack.pop());
  }

};
/*
 * Complexity: What is the time complexity of the above functions?
 */

/**
 * Test 1: should have methods named "insert", "contains", and "deepthFirstLog"
 *
 * Test 2: should insert value at the correct location in the tree
 *
 * Test 3:
 *
 */