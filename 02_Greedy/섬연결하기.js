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
  // 정점의 수가 n 일 경우 종료, 간선의 수가 n - 1 일 때 종료할 수도 있음
  while (connected.size < n) {
    // 둘 중 하나만 연결된 경우가 costs 에 존재한다면 index 를 반환한다
    // 무조건 연결이 보장되어있다.
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

// 크루스림 알고리즘과 프림 알고리즘
// 공통점 : 비용이 낮은 간선부터 선택, 최소 신장 트리를 만들기 위해서 활용하는 알고리즘
// 크루스칼 알고리즘: 트리를 유지시키지 않으면서 완성시킨다, 사이클의 존재를 확인해야함
// 프림 알고리즘: 트리를 유지시키면서 완성시킨다, 사이클의 존재를 확인할 필요가 없음
