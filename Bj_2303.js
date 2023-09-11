// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let input = "3\n7 5 5 4 9\n1 1 1 1 1\n2 3 3 2 10\n7 5 5 4 9".trim().split("\n");
let a = parseInt(input.shift());
let save = [];

for (let i = 0; i < input.length; i++) {
  let arr = input[i].split(" ");
  arr = arr.map((e) => parseInt(e));

  let max = 0;
  for (let j = 0; j < arr.length; j++) {
    for (let k = j + 1; k < arr.length; k++) {
      for (let l = k + 1; l < arr.length; l++) {
        let n = arr[j] + arr[k] + arr[l];
        if (max < n % 10) {
          max = n % 10;
        }
      }
    }
  }
  save[i] = [max, i + 1];
}
save.sort();
console.log(save);
console.log(save[save.length - 1][1]);
