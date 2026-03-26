let score = 0;
let lives = 3;

function addScore(points) {
    score += points;
}

function loseLife() {
    lives--;
}

function getScore() {
    return score;
}

function getLives() {
    return lives;
}

function resetGame() {
    score = 0;
    lives = 3;
}

module.exports = {
    addScore,
    loseLife,
    getScore,
    getLives,
    resetGame
}