const readline = require('readline-sync');
const gameState = require('../gameState');

function quiz() {

    const questions = [
        {
            question: "She ____ my friend.",
            options: ["1) am", "2) is", "3) are"],
            answer: "2"
        },
        {
            question: "They ____ students.",
            options: ["1) is", "2) are", "3) am"],
            answer: "2"
        },
        {
            question: "Im ___ Steve.",
            options: ["1)are", "2)it", "3)am"],
            answer: "3"
        },
        {
            question: "Flint ___ steel.",
            options: ["1)and", "2)are", "3)is"],
            answer: "1"
        }
    ];

    questions.forEach(q => {

        console.log("\n" + q.question);
        q.options.forEach(opt => console.log(opt));

        let answer = readline.question("Answer: ");

        if(answer === q.answer) {
            console.log("Correct!");
            gameState.addScore(10);
        } else {
            console.log("Wrong!");
            gameState.loseLife();
        }

    });

    readline.question("\nPress ENTER to continue...");
}

module.exports = quiz;