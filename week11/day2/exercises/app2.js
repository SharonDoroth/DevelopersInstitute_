const { readFile, writeFile } = require("./fileManager");

const helloContent = readFile("Hello World.txt");

if (helloContent !== null) {
  writeFile("Bye World.txt", "Writing to the file");
}
//On this file need to take out the  // "type": "module", from package.json 