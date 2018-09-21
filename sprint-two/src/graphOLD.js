

// Instantiate a new graph
var Graph = function(val) {
  this.connections = [];
  this.value = val;
};


// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var newGraph = new Graph(node);
  this.connections.push(newGraph);
  newGraph.connections.push(this);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.find = function(node) {
  var visitedNodes = [];
  
  var findHelper = function() {

    if (node === this.value) {
      return this;
    } else {
      visitedNodes.push(this);
      console.log(this);
      var edges = this.connections;
      for (var i = 0; i < edges.length; i++) {
        if (! (visitedNodes.includes(edges[i]))) {
          var correctNode = findHelper.call(edges[i]);
          if (correctNode !== undefined) {
            return correctNode;
          }
        }
      }
    }
    return undefined;
  };
  return findHelper.call(this);
};

Graph.prototype.contains = function(node) {
  var foundNode = this.find(node);
  return foundNode !== undefined;
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


