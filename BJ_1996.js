// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let input = "5\n1....\n..3..\n.....\n.4...\n...9.".trim().split("\n");
let dy = [1, 0, -1, 1, -1, 1, 0, -1];
let dx = [1, 1, 1, 0, 0, -1, -1, -1];

let a = parseInt(input.shift());

let arr = new Array(a);
let cnt = Array.from(Array(a), () => new Array(a).fill(0));

for (let i = 0; i < a; i++) {
  arr[i] = input[i].split("");
}

for (let i = 0; i < a; i++) {
  for (let j = 0; j < a; j++) {
    if (arr[i][j] == ".") {
      let count = 0;
      for (let k = 0; k < 8; k++) {
        let x = i + dx[k];
        let y = j + dy[k];
        if (x >= 0 && x < a && y >= 0 && y < a && arr[x][y] != ".") {
          count += parseInt(arr[x][y]);
        }
      }
      count = count >= 10 ? "M" : count;
      cnt[i][j] = count;
    } else {
      cnt[i][j] = "*";
    }
  }
}

for (let i = 0; i < a; i++) {
  console.log(cnt[i].toString().replaceAll(",", ""));
}
