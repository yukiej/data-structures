//using pseudoclassical
//One class since every node is a tree
//properties: left, right
//methods: insert, contains, depthfirstlog
var BinarySearchTree = function(value) {
  var bst = Object.create(bstMethods);
  bst.value = value;
  bst.left = null;
  bst.right = null; 
  return bst;
};

var bstMethods = {
  insert: function(value) {
    var root = this.value;
    var newNode = BinarySearchTree(value);
  
    //input 
    var insertHelp = function(node, subtree) {
      if (node.value < subtree.value) {
        if (subtree.left === null) {
          subtree.left = node;
        } else {
          insertHelp(node, subtree.left);
        }
      } else {
        if (subtree.right === null) {
          subtree.right = node;
        } else {
          insertHelp(node, subtree.right);
        }
      }
    }
    insertHelp(newNode, this);
  },

  contains: function(value) {
    var containsHelp = function(value, subtree) {
      if (subtree.value === value){
        return true;
      }
      if (value < subtree.value) {
        if (subtree.left === null) {
          return false;
        } else {
          return containsHelp(value, subtree.left);
        }
      } else {
        if (subtree.right === null) {
          return false;
        } else {
          return containsHelp(value, subtree.right);
        }
      }
    }
    return containsHelp(value,this);
  },

  depthFirstLog: function(func) {

  },

}

/*
 * Complexity: What is the time complexity of the above functions?
 */
