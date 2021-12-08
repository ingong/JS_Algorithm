function solution(cacheSize, cities) {
  if (!cacheSize) return cities.length * 5;

  let cache = [];
  let execTime = 0;
  const citiesLowerCase = cities.map(v => v.toLowerCase());

  for (const city of citiesLowerCase) {
    if (cache.includes(city)) {
      execTime += 1;
      cache = [...cache.filter(v => v !== city), city];
    } else {
      if (cache.length === cacheSize) cache = [...cache.filter((v, i) => i > 0), city];
      else cache.push(city);
      execTime += 5;
    }
  }

  return execTime;
}

// 처음 7, 17 테스트 케이스만 실패함
// 0 인 경우 cache 가 존재하지 않는다 하지만 해당 로직을 별도로 고려하지 않았기 때문에
// 처음에는 cache 가 city 를 포함 할 일이 없으며,
// else 문에서 둘 다 0 으로 동일해도 city 를 넣어주게 됨
// 그렇다면 cache length 가 cacheSize 보다 커지게 되고, 위에 if 문도 실행이 될 수 있으며
// 이후에도 else 문에서 cache 안에 city 를 넣어주게 됨.
