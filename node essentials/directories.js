const fs = require("fs");

// rename directory
fs.renameSync("./storage-files", "./storage");

// will unlink or remove any time in ./storage
fs.readdirSync("./storage").forEach(fileName => {
    fs.unlinkSync(`./storage/${fileName}`);
});

// can only remove empty directory
fs.rmdir("./storage", err => {
    if (err) {
        throw err;
    }
    console.log("./storeage directory removed");
});