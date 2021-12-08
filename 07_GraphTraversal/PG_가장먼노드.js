// 처음 풀이
function solution(n, edges) {
  let graph = Array.from(Array(n + 1), () => Array());
  let visited = Array.from({ length: n + 1 }, () => 0);
  let queue = [1];
  visited[1] = 1;

  for (let [a, b] of edges) {
    graph[a].push(b);
    graph[b].push(a);
  }

  while (queue.length) {
    let current = queue.shift();
    for (let i = 0; i < graph[current].length; i += 1) {
      if (!visited[graph[current][i]]) {
        visited[graph[current][i]] = visited[current] + 1;
        queue.push(graph[current][i]);
      }
    }
  }

  return visited.filter(v => v === Math.max(...visited)).length;
}

// 해수님 풀이 참고한 풀이
function getDistArr(graph, n) {
  const result = Array.from({ length: n + 1 }, () => -1);
  const queue = [[1, 0]];
  result[1] = 0;

  while (queue.length) {
    const [cNode, cDistance] = queue.shift();
    for (const node of graph[cNode]) {
      if (result[node] > -1) continue;
      result[node] = cDistance + 1;
      queue.push([node, cDistance + 1]);
    }
  }

  return result;
}

function solution(n, edges) {
  const graph = Array.from(Array(n + 1), () => Array());
  let answer = 0;

  for (let [a, b] of edges) {
    graph[a].push(b);
    graph[b].push(a);
  }

  const distArr = getDistArr(graph, n);
  const maxDist = Math.max(...distArr);
  const maxDistNodeCount = distArr.filter(v => v === maxDist).length;

  return answer + maxDistNodeCount;
}
