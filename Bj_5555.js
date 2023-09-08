// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let input = "PQR\n3\nPQRAAAAPQR\nBBPQRBBBBB\nCCCCCCCCCC".trim().split("\n");
let s = input.shift();
let a = parseInt(input.shift());

let cnt = 0;
for (let i = 0; i < a; i++) {
  for (let j = 0; j < 10; j++) {
    let check = true;
    for (let k = 0; k < s.length; k++) {
      let index = j + k >= 10 ? (j + k) % 10 : j + k;
      if (s.charAt(k) != input[i].charAt(index)) {
        check = false;
        break;
      }
    }
    if (check) {
      cnt++;
      break;
    }
  }
}

console.log(cnt);
