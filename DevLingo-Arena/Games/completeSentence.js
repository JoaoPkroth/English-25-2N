const readline = require('readline-sync')
const gameState = require('../gameState')

function completeSentence() {
    const setenses = [
        {
            text: "I ___ a developer.",
            answer: "am"
        },
        {
            text: "She ___ coding now",
            answer: "is"
        },
        {
            text: "___ John Mastorn Micah",
            answer: "It's"
        },
        {
           text: "___ my name",
            answer: "Say"
        }
    ]
    //para cada setença dentro do array 
    setenses.forEach(s => {
        console.log("\nComplete:")
        console.log(s.text) //mostra o texto da questão

        let answer = readline.question("Answer: ") //pede para o jogador digitar a resposta no terminal 

        if(answer === s.answer){
            console.log("Correct!")
            gameState.addScore(10)
        } else {
            console.log("Incorrect!")
            gameState.loseLife()
        }

    })
}

module.exports = completeSentence