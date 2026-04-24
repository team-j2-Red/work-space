//クリックされたマスに"X" or "O"を表示し、色を変える関数
export function updateCellUI(cell, player) {
    cell.textContent = player;
    
    if (player === 'X') {
        cell.style.color = 'red';
    } else if (player === 'O') {
        cell.style.color = 'blue';
    }
}
// 勝敗結果を表示する関数
export function showResultUI(winner, clickedRematch) {
    let resultPage= document.getElementById("resultPage");

// resultPageの中身のリセット    
    resultPage.innerHTML = "";

// 結果表示用の要素を追加    
    let container = document.createElement("div");

// BootstrapでUIを整える    
    container.classList.add("d-flex", "flex-column", "justify-content-center", "align-items-center", "mt-5", "bg-light", "w-75", "mx-auto", "border", "border-success", "border-3"); 

// 勝敗結果の表示    
    if (winner !== "draw"){container.innerHTML =
        `<h2 class="mt-2 text-primary">${winner}の勝ちです</h2>`;
    } 
    else {container.innerHTML = "<h2>引き分けです</h2>";
    }

// 再戦ボタンの作成とクリックイベントの追加    
    let rematchBtn = document.createElement("button");
    rematchBtn.classList.add("btn", "btn-outline-success", "my-3", "fw-bold");
    rematchBtn.innerText = "再戦";
    rematchBtn.addEventListener("click", clickedRematch);

// resultPageに合体   
    container.appendChild(rematchBtn);
    resultPage.appendChild(container);
}
 


// マス目UIのリセット
export function resetUI(cells) {
    cells.forEach(cell => cell.textContent = '');
// 結果画面UIのリセット
    const resultPage = document.getElementById("resultPage");
    resultPage.innerHTML = "";
}
