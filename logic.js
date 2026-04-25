export function getWinner(targetBoard){
    const winPattern = [[0, 1, 2],
                  [3, 4, 5],
                  [6, 7, 8],
                  [0, 3, 6],
                  [1, 4, 7],
                  [2, 5, 8], 
                  [0, 4, 8],
                  [2, 4, 6]];
    let hasnull = false     // まだ空きマスがあるか

    // マス目にまだ空欄があるかチェック
    for (let i=0; i<9; i++){
        if (targetBoard[i] === '') {
            hasnull = true;
            break;
        }
    }
                  
    for (let i=0; i<winPattern.length; i++){
        //現盤面の勝ちパターンに関係あるとこだけチェック    
        let a = targetBoard[winPattern[i][0]];
        let b = targetBoard[winPattern[i][1]];
        let c = targetBoard[winPattern[i][2]];
        
        if (a !== '' && a == b && a == c){
            return a;   // 勝敗決定
        }

    }
    
    if (!hasnull){
            return "draw";  // 引き分け
    }
    

    return false;    // まだ勝敗ついていない
}

