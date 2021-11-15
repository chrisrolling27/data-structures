var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // Tree starts without any children nodes.
  newTree.children = undefined;

  // this extends the properties of the treeMethods object into those
  // of the newTree object that was recently created on line 3.
  _.extend(newTree, treeMethods);

  // returns the newTree object once the function has been run.
  return newTree;
};

var treeMethods = {};

// adds a child node to tree that contains a certain value
treeMethods.addChild = function(value) {
  // need to gain access to the newTree object
  //
  if (!this.children) {
    this.children = [];
  }
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  // base: check current tree
  if (this.value === target) {
    return true;
  }
  // recursive case: if tree has children, search
  if (this.children) {
    for (var i = 0; i < this.children.length; i++) {
      var containing = this.children[i].contains(target);
      if (containing) {
        return true;
      }
    }
  }
  return false;
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
