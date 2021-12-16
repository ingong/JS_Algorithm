function solution(user_id, banned_id) {
  const permutation = (arr, selectNum) => {
    let result = [];
    if (selectNum === 1) return arr.map(item => [item]);

    arr.forEach((num, curIndex, array) => {
      const fixed = num;
      const restArr = array.filter((item, index) => curIndex !== index);
      const restPermutation = permutation(restArr, selectNum - 1);
      const fixedPermutation = restPermutation.map(item => [fixed, ...item]);

      result.push(...fixedPermutation);
    });

    return result;
  };

  const check = users => {
    for (let i = 0; i < banned_id.length; i++) {
      if (users[i].length !== banned_id[i].length) return false;
      else {
        for (let j = 0; j < users[i].length; j++) {
          if (banned_id[i][j] === '*') continue;

          if (users[i][j] !== banned_id[i][j]) return false;
        }
      }
    }
    return true;
  };

  const userSet = permutation(user_id, banned_id.length);

  const results = new Set([]);
  userSet.forEach(users => {
    if (check(users)) {
      results.add(users.sort().join(''));
    }
  });
  return results.size;
}

// 풀이를 참고한 풀이 https://velog.io/@kyoung-jnn/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8JavaScript-%EB%B6%88%EB%9F%89-%EC%82%AC%EC%9A%A9%EC%9E%90
