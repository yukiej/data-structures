class Stack {
  constructor() {
  	this.count = 0;
  	this.storage = {};
  }

  size() {
  	return this.count;
  }

  push(value) {
  	this.count++;
  	this.storage[this.count] = value;
  }

  pop() {
  	if (this.count > 0) {
  		var result = this.storage[this.count];
  		this.count--;
  		return result;
  	}
  }
}