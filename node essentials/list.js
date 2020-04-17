const fs = require("fs");

// const files = fs.readdirSync("./assets");  // run synchronously - everything else won't run until this line is completed

// execute asyncronously but can't set to variable.
fs.readdir("./assets", (err, files) => {
    if (err) {
        throw err;s
    }
    console.log("completed")
    console.log(files);
});

console.log("started reading the files");