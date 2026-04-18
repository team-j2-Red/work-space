


// ↓ abe_387 -------------------------
// 議題


// 現盤面(仮データ)
let board = ["○", "○", "○", "○", null, "×", "×", "○", "×"];

function getWinner(targetBoard){
    winPattern = [[0, 1, 2],
                  [3, 4, 5],
                  [6, 7, 8],
                  [0, 3, 6],
                  [1, 4, 7],
                  [2, 5, 8], 
                  [0, 4, 8],
                  [2, 4, 6]];
    let hasResult = false;  // 勝敗が決まったか
    let hasnull = false;     // nullがあるか(引き分け用)

    // マス目にまだ空欄があるかチェック
    for (let i=0; i<9; i++){
        if (targetBoard[i] == null) {
            hasnull = true;
            break;
        }
    }
                  
    for (let i=0; i<winPattern.length; i++){
        //現盤面の勝ちパターンに関係あるとこだけチェック    
        let a = targetBoard[winPattern[i][0]];
        let b = targetBoard[winPattern[i][1]];
        let c = targetBoard[winPattern[i][2]];
        
        if (a != null && a == b && a == c){
            showResult(a);
            hasResult = true;
            break;
        }

    }
    
    if (!hasResult) {
        if (!hasnull){
            showResult("draw");
        }
    }
}

function showResult(winner){
    let resultPage = document.getElementById("resultPage");
    let gamePage = document.getElementById("gamePage");
    let container = document.createElement(("div"));
    resultPage.append(container);

    // gamePageを一旦非表示
    gamePage.classList.add("d-none");

    // 結果画面の見た目調整
    container.classList.add("d-flex", "flex-column", "justify-content-center", "align-items-center", "mt-5", "bg-light", "w-75", "mx-auto", "border", "border-success", "border-3"); 

    if (winner != "draw"){
        container.innerHTML =
        `
        <h2 class="mt-2 text-primary">${winner}の勝ちです</h2>
        `;
    } 
    else {
        container.innerHTML = 
        "<h2>引き分けです</h2>";
    }
    
    // 再戦ボタンを作る
    let rematchBtn = document.createElement("button");
    container.append(rematchBtn)
    rematchBtn.classList.add("btn", "btn-outline-success", "my-3", "fw-bold");
    rematchBtn.innerText = "再戦";

    rematchBtn.addEventListener("click", function(){
        // ここで初期画面に戻りたい
        // 盤面のデータをリセット
        for (let i = 0; i < 9; i++) {
            board[i] = null;
        } 

        // ここで盤面の表示をリセットする関数を呼び出したい

        container.remove();
        gamePage.classList.remove("d-none")
    })
}

// 確認してみる
getWinner(board);

// ↑ abe_387 -------------------------
