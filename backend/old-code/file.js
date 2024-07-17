const fs = require("fs");

/* writeFile */

// sync
// fs.writeFileSync("./test.txt", "hello")

//async
// fs.writeFile("./test.txt", "hello", (err)=>{})



/* readFile */

// sync
const result = fs.readFileSync("./contact.txt", "utf-8");


// async
// fs.readFile("./contact.txt", "utf-8", (err, result)=>{
//   if (err) {
//     console.log(err);
//   }
//   else {
//     console.log(result);
//   }
// })


// sync

fs.appendFileSync("./test.txt", `append data\n`);

// console.log();