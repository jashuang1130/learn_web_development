const readline = require("readline");
const { EventEmitter } = require("events");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// module.exports = (questions, done) => {
//     const answers = [];
//     const [firstQuestion] = questions;
//     const questionAnswered = answer => {
//         answers.push(answer);
//         if (answers.length < questions.length) {
//             rl.question(questions[answers.length], questionAnswered);
//         } else {
//             done(answers);
//         }
//     }
//     rl.question(firstQuestion, questionAnswered);
// }

// make it optional for user who doesn't want to see answers returned
// f => f default arrow function. returns arguements that was sent to it.
module.exports = (questions, done = f => f) => {
    const answers = [];
    const [firstQuestion] = questions;

    const emitter = new EventEmitter();

    const questionAnswered = answer => {
        emitter.emit("answer", answer);
        answers.push(answer);
        if (answers.length < questions.length) {
            rl.question(questions[answers.length], questionAnswered);
        } else {
            done(answers);
            emitter.emit("complete", answers);
        }
    }
    rl.question(firstQuestion, questionAnswered);

    return emitter;
}