var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  $.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var childTree = Tree(value);
  this.children.push(childTree);
};

treeMethods.contains = function(target) {
  //look at the value of the current and check value
  if (this.value === target) {
    return true;
  }
  //if the current node has children, check if their value is target
  if (this.children.length > 0) {
    var childNodes = this.children;
    for (var i = 0; i < this.children.length; i++) {
      if (childNodes[i].contains(target)) {
        return true;
      }
    }
  }
  
  return false;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
