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


const Player = () => {
  let sign = 'X'

  const getSign = () => {
    return sign;
  }
  
  return { getSign }
}

const Game = (() => {
  const field = document.querySelector('.game-board')
  const startScreen = document.querySelector('.start-screen')
  const startBtn = document.querySelector('.start-button')

  
  Array.from(field.children).forEach((block, i) => {
    block.addEventListener('click', () => {
      block.innerHTML = Player.getSign()
      gameBoard.updateBlock(i, Palyer.getSign())
    })
  })

  const startGame = () => {
    startScreen.style.display = 'none'
    field.style.display = 'inline-grid'
  }
  
  const endGame = () => {
    const endScreen = document.querySelector('.end-game-screen')
    endScreen.style.display = 'block'
  }

  const resetGame = () => {
    startScreen.style.display = 'block'
    gameBoard.reset()
  }
  
  //all possible winning scenarios
  const winScenarios = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];


  

  const checkWinningX = () => {
    winScenarios.some((arr) => {
      return arr.every((i) => gameBoard.getBlock(i) === 'X')
    })
  }

  const checkWinningO = () => {
    winScenarios.some((arr) => {
      return arr.every((i) => gameBoard.getBlock(i) === 'X')
    })
  }


  startBtn.addEventListener('click', startGame())

})();




