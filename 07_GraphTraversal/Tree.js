class Tree {
  constructor() {
    this.root = null;
  }

  BFS(fn) {
    if (this.root === null) return;

    // 초기화를 해준다
    const unvisitiedQueue = [this.root];
    while (unvisitiedQueue.length !== 0) {
      // 꺼내서 current 저장, 자식들을 뒤로 집어 넣고, 경로를 담는 배열에 꺼낸 current 를 넣는다
      const current = unvisitiedQueue.shift();
      unvisitiedQueue.push(...current?.children);
      fn(current);
    }
  }

  DFS(fn) {
    if (this.root === null) return;
    // 초기화
    const unvisitedList = [this.root];
    while (unvisitedList.length !== 0) {
      const current = unvisitedList.shift();
      unvisitedList.unshift(...current.children); // list 앞에다 넣어준다. (우선순위: 내 자식들이 먼저야! )
      fn(current);
    }
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    this.children.push(new Node(data));
  }

  remove(data) {
    this.children = this.children.filter(child => child.data !== data);
  }
}

const lettersBFS = [];
const lettersDFS = [];
const t = new Tree();
t.root = new Node('a');
t.root.add('b');
t.root.add('d');
t.root.children[0].add('c');

t.DFS(node => lettersDFS.push(node.data));
console.log(lettersDFS);
// a b c d

t.BFS(node => lettersBFS.push(node.data));
console.log(lettersBFS);
// a b d c
// 참고 https://jun-choi-4928.medium.com/javascript%EB%A1%9C-%ED%8A%B8%EB%A6%AC-bfs-dfs-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0-e96bcdadd1f3
