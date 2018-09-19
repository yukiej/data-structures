class Queue {
  constructor() {
  	this.count = 0;
  	this.removed = 0;
  	this.storage = {};
  }

  size() {
  	return this.count - this.removed;
  }

  enqueue(value) {
  	this.count++;
  	this.storage[this.count] = value;
  }

  dequeue() {
  	if ((this.count - this.removed) > 0) {
  		var result = this.storage[1 + this.removed];
  		this.removed++;
  		return result;
  	}
  }

}
