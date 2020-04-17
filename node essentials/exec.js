const cp = require("child_process");

// Execute designed for Synchronous processes - 
// run and close and spit back as a one time event

// Comman will be based on operating system

//Open website
// cp.exec("open https://www.google.com/"); 

// cp.exec("open -a Terminal .");

// ls for linux, or dir for windows
cp.exec("dir", (err, data, stderr) => {
    if (err) {
        throw err;
    }
    console.log(data); 
    console.log(stderr);
});

// can run other commands 
cp.exec("node readStream", (err, data, stderr) => {
    if (err) {
        throw err;
    }
    console.log(data); 
    console.log(stderr);
});