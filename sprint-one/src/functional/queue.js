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
    if (count > 0){
      count--;
      numRemoved++;
      return storage[1 + numRemoved];

    }
  };

  someInstance.size = function() {
    return count; 
  };

  return someInstance;
};
