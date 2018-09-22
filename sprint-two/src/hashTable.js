

// var HashTable = function() {
//   this._limit = 8;
//   this._storage = LimitedArray(this._limit);
// };

// HashTable.prototype.insert = function(k, v) {
//   var index = getIndexBelowMaxForKey(k, this._limit);
//   this._storage.set(index, v);
// };

// HashTable.prototype.retrieve = function(k) {
//   var index = getIndexBelowMaxForKey(k, this._limit);
//   return this._storage.get(index);
// };

// HashTable.prototype.remove = function(k) {
//   var index = getIndexBelowMaxForKey(k, this._limit);
//   this._storage.set(index, undefined);
// };

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) !== undefined) {
    var linkedArray = this._storage.get(index);
    for (var i = 0; i < linkedArray.length; i++) {
      if (linkedArray[i][0] === k) {
        linkedArray[i][1] = v;
        return;
      }
    }
    this._storage.get(index).push([k, v]);
  } else {
    var linkedArray = [];
    linkedArray.push([k, v]);
    this._storage.set(index, linkedArray);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var retrievedArray = this._storage.get(index);
  for (var i = 0; i < retrievedArray.length; i++) {
    if (retrievedArray[i][0] === k) {
      return retrievedArray[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var linkedArray = this._storage.get(index);
  if (linkedArray !== undefined) {
    for (var i = 0; i < linkedArray.length; i++) {
      if (linkedArray[i][0] === k) {
        linkedArray.splice(i, 1);
      }
    }
  }

};



/*
 * Complexity: What is the time complexity of the above functions?
 * insert: Best case O(1) if there is no linkedArray, worst case is O(linkedArray.length), which should generally be much smaller than n. 
 * retrieve: Best case O(1) if there is no linkedArray, worst case is O(linkedArray.length)
 * remove: O(linkedArray.length) for most cases and O(1) if the key is not in the HashTable
 */


