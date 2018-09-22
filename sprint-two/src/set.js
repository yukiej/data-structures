var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage.push(item);
};

setPrototype.contains = function(item) {
  return this._storage.includes(item);
};

//item is a value
setPrototype.remove = function(item) {
  if (this._storage.includes(item)) {
    this._storage.splice(this._storage.indexOf(item), 1);
    this.remove(item);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * Insert: O(1)
 * Remove: Usually O(n) for a small number of duplicates, but worst case O(n!) :(
 * Time complexity could be improved to O(n) by using LinkedList instead of array for set._storage
 * Contains: O(n)
 */
