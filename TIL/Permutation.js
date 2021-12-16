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
