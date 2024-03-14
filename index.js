const figlet = require("figlet");

const generateAsciiArt = (text) => {
  return new Promise((resolve, reject) => {
    figlet.text(
      text,
      {
        font: "Big",
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

generateAsciiArt("Hello World")
  .then((asciiArt) => {
    console.log(asciiArt);
  })
  .catch((err) => {
    console.error("Error generating ASCII art:", err);
  });
