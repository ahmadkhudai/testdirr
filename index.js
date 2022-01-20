// const clipboardy = require("clipboardy");
// import clipboard from "clipboardy";
// import copy fr/om "copy-to-clipboard";

// copy("Text");

// Copy

let text = `k
k1
k2
k4`;
// clipboard.writeSync(text);
let arr = text.split("\n");
arr.forEach((el) => copy(el));
// console.log(arr);
