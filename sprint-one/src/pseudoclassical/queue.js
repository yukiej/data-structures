var Queue = function() {
  this.count = 0;
  this.storage = {};
  this.removed = 0;
};

Queue.prototype.size = function() {
	return this.count - this.removed;
}

Queue.prototype.enqueue = function(value) {
	this.count++;
	this.storage[this.count] = value
}

Queue.prototype.dequeue = function() {
	if (this.count - this.removed > 0) {
		var result = this.storage[1 + this.removed]
		this.removed++;
		return result;
	}
	
}


