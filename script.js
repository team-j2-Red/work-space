//初期設定
let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let isGameActive = true;

//DOM要素の取得
const cells = document.querySelectorAll('.cell');

//特定の cell がクリックされた時にその cell に "currentPlayer" を入れる
function handleClick(event) {
  const clickedCell = event.target;

  //id="cell0" のような文字列から、"cell" を消して "0" だけを取り出し、数値に変換する
  const cellId = clickedCell.id;
  const clickedCellIndex = Number(cellId.replace('cell', ''));

  //クリックした cell について、既に文字が入っている、またはゲームが終了済みの場合は処理をストップする
  if (board[clickedCellIndex] !== '' || !isGameActive) {
    return;
  }

  board[clickedCellIndex] = currentPlayer;

  clickedCell.textContent = currentPlayer;

  getWinner(board);
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

//クリックイベントを追加する
cells.forEach((cell) => cell.addEventListener('click', handleClick));

