console.log(process.pid); //process id
console.log(process.versions.node);
console.log(process.argv);
// With the process object, we can get environment information, read environment variables, 
// communicate with the terminal or parent processes through standard input and standard output

// We can also use it to exit the current process. 
// One of the things we can do with the process object is collect information from the terminal when we load the application. 

const [, , firstName, lastName] = process.argv;
console.log(`Your name is ${firstName} ${lastName}`)
// can provide flags to see what kind of variables are being PermissionRequestedEvent

// node globalProcess --user ned --greeting "Hidely Hoe"

const grab = flag => {
    let indexAfterFlag = process.argv.indexOf(flag) + 1;
    return process.argv[indexAfterFlag];
}

const greeting = grab("--greeting");
const user = grab("--user");

console.log(`${greeting} ${user}`)