import("chalk")
  .then((chalk) => {
    const styledMessage = chalk.bold.green("Hello, Chalk!");

    console.log(styledMessage);
  })
  .catch((error) => {
    console.error("Error importing chalk:", error);
  });
