var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0; 
  var numRemoved = 0; 

  // Implement the methods below

  someInstance.enqueue = function(value) {
    count++;
    storage[count] = value;
  };

  someInstance.dequeue = function() {
    if ((count - numRemoved) > 0){
      var result = storage[1 + numRemoved];
      numRemoved++;
      return result;
    }
  };

  someInstance.size = function() {
    return count - numRemoved; 
  };

  return someInstance;
};
