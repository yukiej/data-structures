var bstHelp = function(node, subtree, insert) {
  if (subtree.value === node.value){
    return true;
  }
  if (node.value < subtree.value) {
    if (subtree.left === null) {
      if (insert){
        subtree.left = node;
      }
      return false;
    } else {
      return bstHelp(value, subtree.left);
    }
  } else {
    if (subtree.right === null) {
      if (insert){
        subtree.right = node;
      }
      return false;
    } else {
      return bstHelp(value, subtree.right);
    }
  }
}