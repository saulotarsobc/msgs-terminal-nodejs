const figlet = require("figlet");

const generateAsciiArt = (text, font) => {
  return new Promise((resolve, reject) => {
    figlet.text(
      text,
      {
        font,
        horizontalLayout: "default",
        verticalLayout: "default",
      },
      (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      }
    );
  });
};

generateAsciiArt("Hello World", "Big")
  .then((asciiArt) => {
    console.log("\n\n", asciiArt);
  })
  .catch((err) => {
    console.error("Error generating ASCII art:", err);
  });

generateAsciiArt("Hello World", "alligator")
  .then((asciiArt) => {
    console.log("\n\n", asciiArt);
  })
  .catch((err) => {
    console.error("Error generating ASCII art:", err);
  });

generateAsciiArt("Hello World", "alligator2")
  .then((asciiArt) => {
    console.log("\n\n", asciiArt);
  })
  .catch((err) => {
    console.error("Error generating ASCII art:", err);
  });

generateAsciiArt("Hello World", "alphabet")
  .then((asciiArt) => {
    console.log("\n\n", asciiArt);
  })
  .catch((err) => {
    console.error("Error generating ASCII art:", err);
  });

generateAsciiArt("Hello World", "caligraphy")
  .then((asciiArt) => {
    console.log("\n\n", asciiArt);
  })
  .catch((err) => {
    console.error("Error generating ASCII art:", err);
  });
