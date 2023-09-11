const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let a = parseInt(input.shift());
let arr = new Array(1000001).fill(0);
arr[1] = 1;
arr[2] = 2;
arr[3] = 4;
let div = 1000000009;
for (let i = 4; i < arr.length; i++) {
  arr[i] = arr[i - 1] + arr[i - 2] + arr[i - 3];
  if (arr[i] >= div) {
    arr[i] %= div;
  }
}

for (let i of input) {
  console.log(arr[parseInt(i)]);
}
