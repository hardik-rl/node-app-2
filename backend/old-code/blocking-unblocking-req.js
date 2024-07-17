const fs = require("fs");

// blocking req
// console.log("1");
// const  result = fs.readFileSync("./contact.txt", "utf-8");
// console.log("2");
// console.log(result);
// console.log("3");


// Non Blocking req

console.log("1");
fs.readFile("./contact.txt", "utf-8", (err, result)=> {
  console.log(result);
});
console.log("2");
console.log("3");