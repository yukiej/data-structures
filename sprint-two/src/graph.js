

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
Graph.prototype.contains = function(node) {
  var visitedNodes = [];
  
  var find = function() {

    if (node === this.value) {
      return true;
    } else {
      visitedNodes.push(this);
      var edges = this.connections;
      console.log(this, edges); 
      for (var i = 0; i < edges.length; i++) {
        if (! (visitedNodes.includes(edges[i]))) {
          if (find.call(edges[i])) {
            return true;
          }
        }
      }
    }
    return false;
  };
  return find.call(this);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
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


