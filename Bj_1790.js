const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
let a = parseInt(input[0]);
let b = parseInt(input[1]);

let sum = 0;
for (let i = 1; i <= a; i++) {
  let n = i.toString();
  sum += n.length;
  if (sum == b) {
    console.log(n.charAt(n.length - 1));
    break;
  } else if (sum > b) {
    console.log(n.charAt(n.length - (sum - b) - 1));
    break;
  } else if (i == a && sum < b) {
    console.log(-1);
  }
}
