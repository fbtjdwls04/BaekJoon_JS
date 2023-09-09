const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

let a = input;
let check0 = false;
let check1 = false;
let cnt0 = 0;
let cnt1 = 0;

for (let i = 0; i < a.length; i++) {
  if (a.charAt(i) == "0") {
    if (!check0) {
      check0 = true;
      check1 = false;
      cnt0++;
    }
  } else if (a.charAt(i) == "1") {
    if (!check1) {
      check1 = true;
      check0 = false;
      cnt1++;
    }
  }
}

console.log(cnt0 > cnt1 ? cnt1 : cnt0);
