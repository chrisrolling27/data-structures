
// constructor
var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.len = 0;

  // adds to the tail end of linked list
  list.addToTail = function(value) {

    // add tail
    var nodeAdded = new Node(value);
    if (!list.head) {
      list.head = nodeAdded;
      list.tail = nodeAdded;
      list.len++;
    } else {
      // refers to previous tail, this adds the property (last value) to end of linked list
      list.tail.next = nodeAdded; // CR ?
      // reassigns the the tail object to be most recent node
      list.tail = nodeAdded;
      list.len++;
    }


    // input into the list object as value, and redirect tail to this new value (as key??)

  };

  // removes the head of the linked list
  list.removeHead = function() {
    //check if there is a head
    if (list.head) {
      var removedHead = list.head;
      delete list.head;
      // now the list.head property needs to be reassigned
      list.head = removedHead.next;
      return removedHead.value;
    }
    list.len--;
  };

  // checks
  list.contains = function(target) {
    var currentNode = list.head;
    //console.log('target: ' + target);
    // How do we move through the nodes?
    if (target === currentNode.value) {
      return true;
    }
    // make a pointer that changes over the loop
    // currentNode === target --> return true
    // currentNode changes
    while (currentNode) {
      if (currentNode.value === target) {
        //console.log('curentNode.value: ' + currentNode.value);
        return true;
      } else {
        // we still need some way to move through the actual nodes in the linked list
        currentNode = currentNode.next;
      }
    }
    return false;
  };
  return list;
};

var Node = function(value) {
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};

//let linkedList = new LinkedList();

/*
 * Complexity: What is the time complexity of the above functions?
 */
