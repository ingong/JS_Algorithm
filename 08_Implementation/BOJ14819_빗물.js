let input = [];
let result = 0;
const stack = [];

require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', function (line) {
    input.push(line.trim());
  })
  .on('close', function () {
    const [H, W] = input[0].split(' ');
    const blocks = input[1].split(' ').map(v => parseInt(v));
    let leftMaxHeight = blocks[0];
    for (let i = 1; i < blocks.length; i++) {
      if (blocks[i] < leftMaxHeight) stack.push(blocks[i]);
      else {
        while (stack.length > 0) {
          const value = stack.pop();
          result += leftMaxHeight - value;
        }
        leftMaxHeight = blocks[i];
      }
    }

    if (stack.length > 0) {
      let rightMaxHeight = stack.pop();
      while (stack.length > 0) {
        const value = stack.pop();
        if (value < rightMaxHeight) result += rightMaxHeight - value;
        else rightMaxHeight = value;
      }
    }
    console.log(result);
  });
