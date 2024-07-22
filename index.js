const inquirer=require("inquirer")
const fs=require("fs")
var qr=require('qr-image')
const prompt = inquirer.createPromptModule();
prompt([
    {message:"type your url:",
        name:"URL",
    }
  ])
  .then((answers) => {
    const url=answers.URL;
    var qr_svg=qr.image(url);
    qr_svg.pipe(fs.createWriteStream(
        "qr.png"
    ))
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });