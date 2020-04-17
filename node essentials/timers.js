const waitTime = 5000;
const waitInterval = 500;
let currentTime = 0;

const incTime = () => {
    currentTime += waitInterval;
    const p = Math.floor((currentTime/waitTime) * 100);
    process.stdout.clearLine();     // clear the last line
    process.stdout.cursorTo(0);    // moving cursor back to start of line
    process.stdout.write(`waiting ... ${p}% `);
    // console.log(`waiting ${currentTime / 1000} seconds`);
}

console.log(`setting a ${waitTime / 1000} seconds delay`);

// const timerFinished = () => console.log("Done!"); // only doing one thing, don't need {}

const timerFinished = () => {
    clearInterval(interval);
    process.stdout.clearLine();
    process.stdout.cursorTo(0); 
    console.log("Done!");
};

const interval = setInterval(incTime, waitInterval);
setTimeout(timerFinished, waitTime);

