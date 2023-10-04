const fs = require("fs");

const sourceFilePath = "source.txt";
const destinationFilePath = "destination.txt";

fs.readFile(sourceFilePath, "utf8", (err, data) => {
  if (err) {
    console.error(`Error reading file '${sourceFilePath}': ${err.message}`);
    return;
  }

  fs.writeFile(destinationFilePath, data, "utf8", (err) => {
    if (err) {
      console.error(
        `Error writing to file '${destinationFilePath}': ${err.message}`
      );
      return;
    }

    console.log(
      `File '${sourceFilePath}' copied to '${destinationFilePath}' successfully.`
    );
  });
});
