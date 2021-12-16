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

const combination = (order, selectNum) => {
  const result = [];
  if (selectNum === 1) return order.map(item => [item]);

  order.forEach((menu, index, order) => {
    const fixed = menu;
    const restOrders = order.slice(index + 1);
    const restCombination = combination(restOrders, selectNum - 1);
    const resultCombination = restCombination.map(item => [fixed, ...item]);
    result.push(...resultCombination);
  });

  return result;
};
