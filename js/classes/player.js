class Player extends Game {
  constructor(round, players, gameState, playerName, playerNum, score) {
    super(round, players, gameState);
    this.playerNum = playerNum;
    this.playerName = prompt(`Player ${playerNum}, enter your name!`);
    this.score = score;
  }

  submitAnswer() {

  }

  submitWager() {

  }

  updateScore() {

  }
}

if (typeof module !== 'undefined') {
module.exports = Player;
}
