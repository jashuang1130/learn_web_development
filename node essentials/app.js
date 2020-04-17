// const name = require("./myModule"); // import customize module. need to specify directory
// console.log(name);  //print Klazymonkie

// const counter = require("./myModule");

// counter.inc();
// counter.inc();
// counter.inc();

// console.log(counter.getCount());

// or 

const { inc, dec, getCount } = require("./myModule");
inc();
inc();
inc();
dec();

console.log(getCount());