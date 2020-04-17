const path = require("path");
const util = require("util");
const v8 = require("v8");

 
// Core modules that came with node
const dirUploads = path.join(__dirname, 'www', 'files', 'uploads');
console.log(dirUploads)
util.log(path.basename(__filename));

util.log("^ the name of the current file");

util.log(v8.getHeapStatistics()); // get memory statistics


// const { log } = require("util") // destructure from util module
// log(getHeapStatistics());