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


const Player = (sign) => {
  let s = sign

  const getSign = () => {
    return s
  }

  const switchSign = (newSign) => {
    s = newSign
  }
  
  return { getSign, switchSign }
}

const Game = (() => {
  const field = document.querySelector('.game-board')
  const startScreen = document.querySelector('.start-screen')
  const startBtn = document.querySelector('.start-button')
  const gameContainer = document.querySelector('.game-container')
  const resetBtn = document.querySelector('.resetBtn')

  let user = Player('X')

  Array.from(field.children).forEach((block, i) => {
    block.addEventListener('click', () => {
      block.innerHTML = user.getSign()
      gameBoard.updateBlock(i, user.getSign())
      if(user.getSign() === 'X') {
        user.switchSign('O')
      }
      else {
        user.switchSign('X')
      }

      checkWinningO()
      checkWinningX()
    })
  })

  const startGame = () => {
    startScreen.style.display = 'none'
    gameContainer.style.display = 'flex'
  }
  
  const endGame = (winner) => {
    const endScreen = document.querySelector('.end-screen')
    endScreen.style.display = 'block'
    resetBtn.addEventListener('click', resetGame)
  }

  const resetGame = () => {
    startScreen.style.display = 'block'
    gameContainer.style.display = 'none'
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
    if(winScenarios.some((arr) => {
      return arr.every((i) => gameBoard.getBlock(i) === 'X')
    })) {
      endGame('X')
    }
  }

  const checkWinningO = () => {
    if(winScenarios.some((arr) => {
      return arr.every((i) => gameBoard.getBlock(i) === 'X')
    })) {
      endGame('O')
    }
  }


  startBtn.addEventListener('click', startGame)

})();




