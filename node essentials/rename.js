const fs = require("fs");

// moving files
fs.renameSync("./assets/colors copy.json", "./assets/colorData.json");

// can rename and move file
fs.rename("./assets/notes copy.md", "./storage-files/notes copy.md", err => {
    if (err) {
        throw err;
    }
});

setTimeout (() => {
    fs.unlinkSync("./assets/alex copy.jpg");
}, 4000);