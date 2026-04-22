export const gameState = {
  board: ['', '', '', '', '', '', '', '', ''],
  currentPlayer: 'X',
  isGameActive: true,

  updateBoard(index) {
    if (this.board[index] === '' && this.isGameActive) {
      this.board[index] = this.currentPlayer;
      return true;
    }
    return false;
  },

  switchPlayer() {
    this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
  },

  endGame() {
    this.isGameActive = false;
  },

  reset() {
    this.board.fill('');
    this.currentPlayer = 'X';
    this.isGameActive = true;
  },
};
