const gameBoard = (() => {
  const board = ["", "", "", "", "", "", "", "", ""];

  const updateBlock = (index, sign) => {
    board[index] = sign
  }

  const getBlock = (index) => {
    if(index > board.length) return;
    return board[index]
  }

  const reset = () => {
    for(let i = 0; i < board.length; i++) {
      board[i] = ""
    }
  }

  return { updateBlock, getBlock, reset };
})();

const game = (() => {
  const winGame = () => {
    
  }
})();

const Player = (sign) => {
  const getSign = () => {
    return sign;
  }
  
  return { getSign }
}


const playerX = document.querySelector('.player-x')
const playerO = document.querySelector('.player-o')
const startScreen = document.querySelector('.start-screen')
let player 
playerX.addEventListener('click', () => { 
  player = Player('X') 
  startScreen.style.display = 'none'
})
playerO.addEventListener('click', () => { 
  player = Player('O') 
  startScreen.style.display = 'none'
})


