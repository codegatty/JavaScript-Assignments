// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console.
// You can use the fs library to as a black box, the goal is to understand async tasks.
// Try to do an expensive operation below the file read and see how it affects the output.
// Make the expensive operation more and more expensive and see how it affects the output.

const fs = require("fs");

//micro task queue operation
fs.readFile("./test.txt", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data.toString());
});

const dummyPromise = new Promise((resolve, reject) => {
  resolve("Macro task queue operation completed");
});

//expensive operation
for (let i = 0; i < 2000000000; i++) {
  //loop it
}
console.log("Expensive operation completed");

//macro Task queue operation
dummyPromise.then((msg) => console.log(msg));
