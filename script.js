const Player = (symbol) => {
  this.symbol = symbol;
  
}

const gameBoard = (() => {
  const board = ["", "", "", "", "", "", "", "", ""];

  const setField = (index, sign) => {
    if (index > board.length) return;
    board[index] = sign;
  };

  const getField = (index) => {
    if (index > board.length) return;
    return board[index];
  };

  const reset = () => {
    for (let i = 0; i < board.length; i++) {
      board[i] = "";
    }
  };

  return { setField, getField, reset };
})();

const game = (() => {

  // declare players
  const playerOne = createPlayer('Player 1', 'bolt');
  const playerTwo = createPlayer('Player 2', 'heart');

  // starting point
  let activePlayer = playerOne;
  let winnerDeclared = false;
  let remainingSpots = 9;

  // selectors
  let subtext = document.querySelector('.subtext'); // display winner/tie
  let playerName = document.querySelector('.player-name'); // purpose: alert player turn

  // winning conditions
  const winningAxes = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
  ];

  // check winner
  function checkWinner() {
      winningAxes.forEach((item, index) => { // [0, 1, 2, 3, 4, 5, 6, 7]
          if (gameBoard.board[item[0]] === this.activePlayer.marker && gameBoard.board[item[1]] === this.activePlayer.marker && gameBoard.board[item[2]] === this.activePlayer.marker) {
              console.log('winner!');
              subtext.innerHTML = `<b>${this.activePlayer.name} wins!</b>`;
              this.winnerDeclared = true;
          } 
      })
  }

  // alert next player
  function alertNextPlayer() {
      this.activePlayer === playerOne ? playerName.textContent = 'Player 2' : playerName.textContent = 'Player 1';
  }

  // next player
  function nextPlayer() {
      this.activePlayer === playerOne ? this.activePlayer = playerTwo : this.activePlayer = playerOne;
      console.log('nextPlayer() function ran')
      console.log('active player: ' + activePlayer.name);
  }

  // declare tie
  function declareTie() {
      subtext.innerHTML = "<b>Tie game!</b>";
  }

  // return
  return {
      activePlayer,
      remainingSpots,
      checkWinner,
      alertNextPlayer,
      nextPlayer,
      declareTie,
      winnerDeclared
  };
})();

