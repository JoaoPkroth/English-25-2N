const readline = require('readline-sync')
const gameState = require('../gameState')

function sentence(){

    const Challenge = [
        {
            words: ["developer","is","He","a"],
            answer: "He is a developer"
        },
        {
            words: ["he","a","is","student"],
            answer: "He is a student"
        }
    ]
    
    Challenge.forEach(c => {
        console.log("Recorder the words to from a setence: ")
        console.log(c.words.join(" | "))
        
        let answer = readline.question("Write the setence in the right order: ")

        if (answer === c.answer){
            console.log("Correct!")
            gameState.addScore(10)
        } else {
            console.log(`Wrong! The right answer is ${c.answer}`)
            gameState.loseLife();
        }
    
        readline.question("\nPress ENTER to continue...")
    })

}

module.exports = sentence