const fs = require("fs");

const readFile = (fileName) => {
  try {
    return fs.readFileSync(fileName, "utf8");
  } catch (error) {
    console.error(`Error reading file '${fileName}': ${error.message}`);
    return null;
  }
};

const writeFile = (fileName, content) => {
  try {
    fs.writeFileSync(fileName, content, "utf8");
    console.log(`File '${fileName}' has been successfully written.`);
  } catch (error) {
    console.error(`Error writing to file '${fileName}': ${error.message}`);
  }
};

module.exports = { readFile, writeFile };
//appp.js