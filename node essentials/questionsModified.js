// const collectAnswers = require("./lib/collectAnswersModule");
const collectAnswers = require("./lib/collectAnswersWithEvent");

const questions = [
    "What is your name?",
    "Where do you live?",
    "What are you going to do with node js?"
];

// collectAnswers(questions, answers => {
//     console.log(`Thank you for your answers.`);
//     console.log(answers);
//     process.exit();
// });

// what is user doesn't want to return answers
// collectAnswers(questions);

// for with Event Emitters

const answerEvents = collectAnswers(questions);

answerEvents.on("answer", answer => {
    console.log(`question answered: ${answer}`)
});

answerEvents.on("complete", answers => {
    console.log(`Thank you for your answers.`);
    console.log(answers);
    process.exit();
});

answerEvents.on("complete", () => process.exit());
