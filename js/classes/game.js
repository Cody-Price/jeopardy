class Game {
  constructor(round, players, gameState) {
    this.round = round;
    this.players = players;
    this.gameState = gameState;
  }

  // appendNamesAndScores(playerOne, playerTwo, playerThree) {
  //     document.querySelector('.player-one-name').innerHTML = playerOne.playerName;
  //     document.querySelector('.player-two-name').innerHTML = playerTwo.playerName;
  //     document.querySelector('.player-three-name').innerHTML = playerThree.playerName;
  //     document.querySelector('.player-one-score').innerHTML = playerOne.score;
  //     document.querySelector('.player-two-score').innerHTML = playerTwo.score;
  //     document.querySelector('.player-three-score').innerHTML = playerThree.score;
  // };

  populateGameBoard() {
    
  }

  // startGame() {
  //   playerOne = new Player(this.round, undefined, this.gameState, undefined, 0, 1);
  //   playerTwo = new Player(this.round, undefined, this.gameState, undefined, 0, 2);
  //   playerThree = new Player(this.round, undefined, this.gameState, undefined, 0, 3);
  //   this.appendNamesAndScores(playerOne, playerTwo, playerThree);
  //   populateGameBoard()
  // }

  quitGame() {

  }

  incrementRoud() {

  }

  declareWinner() {

  }

  rollDice() {

  }

  newTextPrompt(prompt) {
    return prompt;
  }

}
