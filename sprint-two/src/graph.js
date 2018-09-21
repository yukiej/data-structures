

// Instantiate a new node
var Node = function(val) {
  this.connections = [];
  this.value = val;
};

var Graph = function() {
  this.nodes = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var newNode = new Node(node);
  this.nodes.push(newNode);
};


// node is a value
Graph.prototype.find = function(node) {
  var nodeList = this.nodes;
  for (var i = 0; i < nodeList.length; i++) {
    if (nodeList[i] === node) {
      return nodeList[i];
    }
  }
  return undefined;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
//node is a value
Graph.prototype.contains = function(node) {
  console.log(this);
  //change find to loop through the graph array instead of recursing
  return this.nodes.includes(this.find(node));
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var foundNode = this.find(node);
  if (foundNode !== undefined) {
    var edges = foundNode.connections;
    for (var i = 0; i < edges.length; i++) {
      var self = edges[i].connections.indexOf(foundNode);
      edges[i].connections.splice(self, 1);
    }
    foundNode.connections = [];
  }
  
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var start = this.find(fromNode);
  var end = this.find(toNode);
  var fromEdges = start.connections;
  return fromEdges.includes(end);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  var start = this.find(fromNode);
  var end = this.find(toNode);
  start.connections.push(toNode);
  end.connections.push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


