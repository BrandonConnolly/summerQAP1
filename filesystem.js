const fs = require("fs");

const content = "This is the content to be written to the file.";

fs.writeFile("filesystem-working.txt", content, "utf8", (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("File was written successfully.");
});

// After running this code in the terminal using "node filesystem.js"
// A new file will be created called "filesystem-working.txt".
