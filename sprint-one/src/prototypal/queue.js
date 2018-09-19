var Queue = function() {
	var obj = Object.create(queueMethods);
	obj.count = 0; 
	obj.removed = 0; 
	obj.storage = {};
	return obj;
  
};

var queueMethods = {
	size: function() {
		return this.count - this.removed;
					},
	enqueue: function(value) {
		this.count++;
		this.storage[this.count] = value;
					},
	dequeue: function() {
		if (this.count - this.removed > 0) {
			result = this.storage[1 + this.removed];
			this.removed++;
			return result; 
		}
	}
};


