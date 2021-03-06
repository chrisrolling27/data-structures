

// Instantiate a new graph - a collection of nodes

var Graph = function() {
  this.nodes = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  // create node structure with input "node" as value passed in
  var addedNode = {};
  addedNode.value = node;
  // will refer to other nodes
  addedNode.edges = [];
  this.nodes.push(addedNode);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === node) {
      this.nodes.splice(i, 1);
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {

};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // connect fromNode to toNode by adding to their arrays
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === fromNode) {
      console.log('found fromNode');
      this.nodes[i].edges.push(toNode);
      console.log('edges property of fromNode:' + this.nodes[i].edges);
    }
    if (this.nodes[i].value === toNode) {
      console.log('found toNode');
      this.nodes[i].edges.push(fromNode);
      // this.nodes[i].edges.push(fromNode);
    }
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


