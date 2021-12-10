// 파이썬으로 풀었던 풀이를 참고한 풀이
function findParent(parent, x) {
  if (parent[x] !== x) parent[x] = findParent(parent, parent[x]);
  return parent[x];
}

function unionParent(parent, x, y) {
  x = findParent(parent, x);
  y = findParent(parent, y);
  if (x < y) parent[y] = x;
  else parent[x] = y;
}

function solution(n, costs) {
  let result = 0;
  const cost = 2;
  const parentArray = Array.from({ length: n }, (_, i) => i);
  costs.sort((a, b) => a[cost] - b[cost]);

  costs.forEach(value => {
    const [from, to, cost] = value;
    if (findParent(parentArray, from) !== findParent(parentArray, to)) {
      unionParent(parentArray, from, to);
      result += cost;
    }
  });
  return result;
}

// 다른 사람 Set 풀이 학습
function solution(n, costs) {
  costs.sort((a, b) => a[2] - b[2]);
  const [from, to, cost] = costs.shift();
  const connected = new Set([from, to]);
  let answer = cost;
  while (connected.size < n) {
    const index = costs.findIndex(
      ([from, to]) =>
        (connected.has(from) && !connected.has(to)) || (connected.has(to) && !connected.has(from))
    );
    const [[from, to, cost]] = costs.splice(index, 1);
    answer += cost;
    connected.add(from).add(to);
  }
  return answer;
}
