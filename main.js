import { gameState } from './state.js';
import { getWinner } from './logic.js';
import { updateCellUI, showResultUI, resetUI } from './ui.js';

// logic.js について

// getWinner( [配列] )
// 役割：勝敗がついたかをチェックし、チェック結果に基づいて３つ返り値のうち、いずれかを返す
// 詳細：
// ・配列を受けとり、返り値として以下の３つのいずれかを返す
// 　・勝敗決定 => true
// 　・引き分け => "draw"
// 　・まだ終わっていない => false

// ui.js について

// updateCellUI(なんらかの要素, 文字列)
// 役割：画面のマス目にcurrentPlayer("X" または "O"）を入れる
// 詳細：
// ・div要素のテキストに文字列を入れる.
// ・第一引数 => 例：<div class="cell" id="cell2"></div>
// ・第二引数 => 例："X"

// showResultUI(getWinner関数の返り値, なんらかの関数)
// 役割：ゲームの結果が分かったら、なんらかの関数を実行する
// 詳細：第一引数の値が true または "draw" の場合、「なんらかの関数」を実行する

// resetUI( [複数の要素が入った配列] )
// 役割：画面のリセット（結果画面 と マス目 のリセット）
// 詳細：
// ・配列内のすべての要素それぞれについて、テキスト部分を空にする
// ・結果画面の中身を空にする. 中身とはinnerHTMlのこと(showResultUI関数で作るやつ)

const cells = document.querySelectorAll('.cell');

function handleClick(event) {
  // clickedCell にはクリックされた要素そのものが代入される(例：<div class="cell" id="cell5"></div>)
  const clickedCell = event.target;
  const clickedCellIndex = Number(clickedCell.id.replace('cell', ''));

  // 状態の更新（すでに埋まっている or ゲームが終わっている => false）
  const isSuccess = gameState.updateBoard(clickedCellIndex);
  if (!isSuccess) return;

  // 画面の更新
  updateCellUI(clickedCell, gameState.currentPlayer);

  //　勝敗判定
  const winner = getWinner(gameState.board);

  if (winner) {
    gameState.endGame();
    // UIに結果表示を依頼. また、再戦ボタンが押された時の処理を渡す
    showResultUI(winner, handleRematch);
  } else {
    // 勝負がついていなければプレイヤー交代
    gameState.switchPlayer();
  }
}

function handleRematch() {
  gameState.reset(); // データの初期化
  resetUI(cells); // 画面の初期化
}

// マス目にイベントリスナーを追加
cells.forEach((cell) => cell.addEventListener('click', handleClick));
