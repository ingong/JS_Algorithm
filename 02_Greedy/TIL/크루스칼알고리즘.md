```
edge_set kruskal_MST(edge_set E, int n){
  sort(E); // 모든 간선을 오름차순으로 정렬
  edge_set MST_E = { };
  for(i = 0; i<n; i++) init_set(i); // n개의 집합(트리)를 생성

  while(MST_E의 간선 수 < n-1) // 종료조건 명시
    (u, v) = E의 최소 가중치 간선;
    E = E - {(u, v)};
    if(find(n) != find(v)){ // u와 v가 다른 집합(트리)의 원소인지 확인
        MST_E = MST_E U {(u, v)};
        union(u, v); // 두 집합을 합병하는 연산
    }
  }
  return MST_E;
}

```
