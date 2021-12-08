// 분할 정복
function solution(arr) {
  const answer = [0, 0];
  let n = arr.length;

  while (n >= 2) {
    let tempArr = [];
    for (let i = 0; i < arr.length; i += n) {
      for (let j = 0; j < arr[i].length; j += n) {
        const square = arr.slice(i, i + n).map(v => v.slice(j, j + n));
        const sum = square.flatMap(v => v).reduce((a, b) => a + b);
        sum % (n * n) === 0 ? answer[sum / (n * n)]++ : tempArr.push(square);
      }
    }

    arr = tempArr.flatMap(v => v);
    n /= 2;
  }

  arr.flatMap(v => v).forEach(v => answer[v]++);
  return answer;
}

// Pseudo Code
// answer = [0, 0] 으로 초기화한다. 0 과 1 의 개수를 세는데 활용한다
// tempArr 변수를 활용해서 중간에 계산되는 과정에서 계산 된 값을 넣어준다
// for 전체 사각형에 대해서 탐색한다 : 행에 대해서는 전체 길이에 대해서, 열에 대해서는 해당하는 배열 행의 길이만큼
// if 합을 전체 사각형 개수로 나눴을 때 0 이면 === 모두 같은 수라는 의미이며
// 해당하는 answer 에 1 을 더해준다
// 아니라면 tempArr 에 집어넣는다
// 사각형에 대한 순회가 종료됐다면 tempArr 을 flatMap 을 통해서 한 차원을 줄여서 arr 에 대입하고, n 을 절반으로 나눈다.
// 모든 순회가 종료됐다면 arr 을 flatMap 을 통해 1차원을 낮추고, 이는 더 이상 쪼갤 수 없다는 의미이므로 answer 에 count 로 더 해준다

// 새로 알게 된
// flatMap 이라는 함수에 대해서 알게됐다. => 해당 함수를 활용하면 2차원 배열의 총합을 구할 수 있다.
// 나눳을 때 0 이면 모두 동일한 수라는 것을 적용했다.
// 배열을 slice 하는 것까지는 의도에 맞게 풀었다.

// 개선이 필요한
// 2차원 배열에서 2번째 for 문에서 arr[i].length 로 했어야했다
// 외부로부터 한 번씩 돌면서 들어오는게 맞다. 안에서 부터 나누기 시작하면 안된다
// while 문을 통해 종료조건을 명확히 명시해야한다 n 이 1 이 되면 for 문을 도는 의미가 없다

// 풀이 참고 블로그
// https://velog.io/@alvin/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EB%AC%B8%EC%A0%9C%ED%92%80%EC%9D%B4-%EC%BF%BC%EB%93%9C%EC%95%95%EC%B6%95-%ED%9B%84-%EA%B0%9C%EC%88%98-%EC%84%B8%EA%B8%B0
