// import filesystem module fs

const fs = require("fs");

// specify encoding of file

// Synchronously
const text = fs.readFileSync("./assets/Readme.md", "UTF-8");

// Asynchronously
fs.readFile("./assets/Readme.md", "UTF-8", (err, text) => {
    console.log("file content read");
    console.log(text);
});

// can also read images, reads into binary
fs.readFile("./assets/alex.jpg", (err, img) => {
    if(err){
        console.log(`Error occured ${err.message}`);
        process.exit();
    }
    console.log("read image");
    console.log(img);
})
