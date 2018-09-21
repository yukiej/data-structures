var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
  };

  list.removeHead = function() {
    var oldHead = this.head;
    this.head = this.head.next;
    oldHead.next = null;
    return oldHead.value;
  };

  list.contains = function(target) {
    var currentNode = this.head;
    if (currentNode.value === target) {
      return true;
    }
    while (currentNode.next != null) {
      if (currentNode.value === target) {
        return true;
      } else {
        currentNode = currentNode.next;
      }
    }
    
    return this.tail.value ===target;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
