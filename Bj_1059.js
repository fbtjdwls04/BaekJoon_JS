// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let input = "5\n4 8 13 24 30\n10".trim().split("\n");
let a = parseInt(input[0]);
let arr = input[1].split(" ").map((e) => parseInt(e));
let c = input[2];

arr.sort((x, y) => x - y);

let min = 1;
let max = 1000;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < c) {
    min = arr[i] + 1;
  } else if (arr[i] > c) {
    max = arr[i];
    break;
  } else if (arr[i] == c) {
    console.log(0);
    return;
  }
}
let cnt = 0;

for (let i = min; i < max; i++) {
  for (let j = i + 1; j < max; j++) {
    if (j >= c && i <= c) {
      cnt++;
    }
  }
}

console.log(cnt);
