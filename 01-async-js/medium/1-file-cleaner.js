// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require("fs");
function promisifiedReadFile(fileName, encoding) {
  console.log("Reading the file");
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, encoding, (err, data) => {
      if (err) reject(err);

      resolve(data);
    });
  });
}

function promisifiedWriteFile(fileName, data) {
  console.log("Writing the file");
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, data, (err) => {
      if (err) reject(err);
      resolve("File has been written successfully");
    });
  });
}

async function main() {
  const fileName = "file.txt";
  const encoding = "utf-8";
  const data = await promisifiedReadFile(fileName, encoding);
  const cleanedString = data.split(/\s+/).join(' '); //\s - whitespace \n \t etc 
  await promisifiedWriteFile(fileName, cleanedString);
  console.log("Program completed");
}

console.log("Program started");
main();
