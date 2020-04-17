const fs = require("fs");

// check if directory already exists
if (fs.existsSync("storage-files")){
    console.log("Directory already exist.")
} else {
    fs.mkdir("storage-files", err => {
        if (err) {
            throw err;
        }
        console.log("directory created");
    });
}


