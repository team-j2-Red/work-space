//クリックされたマスに"X" or "O"を表示し、色を変える関数
export function updateCellUI(cell, player) {
    cell.textContent = player;
    
    if (player === 'X') {
        cell.style.color = 'red';
    } else if (player === 'O') {
        cell.style.color = 'blue';
    }
}

// マス目UIのリセット
export function resetUI(cells) {
    cells.forEach(cell => cell.textContent = '');
// 結果画面UIのリセット
    const resultPage = document.getElementById("resultPage");
    resultPage.innerHTML = "";
}
