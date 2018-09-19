var Stack = function() {
  var obj = Object.create(stackMethods);
  obj.count = 0; 
  obj.storage = {};
  return obj;
};

var stackMethods = {
	size : function() {
		return this.count;
	},
	push : function(value) {
		this.count++;
		this.storage[this.count] = value;
	},
	pop : function() {
		if (this.count > 0) {
			var result = this.storage[this.count];
			this.count--;
			return result;
		}
	}
};


