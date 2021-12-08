let node = 5;
let edge = 5;

function unDirectedGraph(node, edge) {
  let graph = Array.from(Array(node + 1), () => Array(edge + 1).fill(0));
  let input = [
    [1, 2],
    [1, 3],
    [2, 4],
    [3, 4],
    [2, 5],
  ];

  for (let [a, b] of input) {
    graph[a][b] = 1;
    graph[b][a] = 1;
  }

  return graph;
}

function directedGraph(node, edge) {
  let graph = Array.from(Array(node + 1), () => Array(node + 1).fill(0));
  let input = [
    [1, 2],
    [1, 3],
    [2, 4],
    [3, 4],
    [2, 5],
  ];

  for (let [a, b] of input) {
    graph[a][b] = 1;
  }

  return graph;
}

function weightedDirectedGraph(node, edge) {
  let graph = Array.from(Array(node + 1), () => Array(node + 1).fill(0));
  let input = [
    [1, 2, 2],
    [2, 5, 5],
    [3, 4, 5],
    [1, 3, 4],
    [4, 2, 2],
  ];

  for (let [a, b, c] of input) {
    graph[a][b] = c;
  }

  return graph;
}

console.log(unDirectedGraph(node, edge));
console.log(directedGraph(node, edge));
console.log(weightedDirectedGraph(node, edge));
