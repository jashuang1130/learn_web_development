const cp = require("child_process");

// will run question module in separate process
const questionApp = cp.spawn("node", ["questionsModified.js"]);

questionApp.stdin.write("Jason ]\n");
questionApp.stdin.write("NJ ]\n");
questionApp.stdin.write("Change the world ]\n");

questionApp.stdout.on("data", data => {
    console.log(`from question app: ${data}`);
});

questionApp.on("close", () => {
    console.log(`questionApp process exited`);
})