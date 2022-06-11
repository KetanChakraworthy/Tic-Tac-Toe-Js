let moveCount = 1;
let allMoves = [];
let xMoves = [];
let oMoves = [];

const resultContainer = document.getElementById('resultContainer');

const restartBtn = document.getElementById('restartBtn');
restartBtn.addEventListener("click", () => {
    window.location.reload();
});


function serachInArray(key,array){
    for(let i=0;i<array.length;i++){
        if(key == array[i]){
            return true;
        }
    }
    return false;
}
function checkSameRow(array){
    for(i=0;i<3;i++){
        let rowCount = 0;
        for(j=0;j<array.length;j++){
            if(array[j].charAt(0) == i){
                rowCount++;
                if(rowCount == 3){
                    return true;
                }
            }
        }
    }
    return false;
}
function checkSameCol(array){
    for(i=0;i<3;i++){
        let colCount = 0;
        for(j=0;j<array.length;j++){
            if(array[j].charAt(1) == i){
                colCount++;
                if(colCount == 3){
                    return true;
                }
            }
        }
    }
    return false;
}
function checkSameDiagonal(array){
    let diagonal1 = ['00','11','22'];
    let diagonal2 = ['02','11','20'];
    let diaCount1 = 0;
    let diaCount2 = 0;
    for(let i=0;i<array.length;i++){
        console.log(array[i]);
        if(serachInArray(array[i],diagonal1)){
            diaCount1++;
            console.log('Count1 '+diaCount1);
            if(diaCount1==3){ 
                return true;
            }
        }
        if(serachInArray(array[i],diagonal2)){
            diaCount2++;
            console.log('Count2 '+diaCount2);
            if(diaCount2==3){
                return true;
            }
        }
    }
    return false;
}
function checkWinner() {
    const resultText = document.getElementById('resultText');
    if (checkSameRow(xMoves) || checkSameCol(xMoves) || checkSameDiagonal(xMoves)) {
        resultContainer.style.display = 'flex';
        resultText.innerHTML = '<h3>Player One Has Won The Game</h3>';
        return false;
    } else if (checkSameRow(oMoves) || checkSameCol(oMoves) || checkSameDiagonal(oMoves)) {
        resultContainer.style.display = 'flex';
        resultText.innerHTML = '<h3>Player Two Has Won The Game</h3>';
        return false;
    } else {
        return true;
    }
}
function displayX(event){
    let loc = event.target.id;
    xLoc = document.getElementById(loc);
    xLoc.setAttribute('class','x');
}
function displayO(event){
    let loc = event.target.id;
    oLoc = document.getElementById(loc);
    oLoc.setAttribute('class','o');
}
function choseXorO(event){
        if(serachInArray(event.target.id,allMoves)){
            alert('You cannot Repeat Moves');
            }else{
            if(moveCount%2==0){
                displayO(event);
                moveCount++;
                allMoves.push(event.target.id);
                oMoves.push(event.target.id);
                    checkWinner();
            }else{
                displayX(event);
                moveCount++;
                allMoves.push(event.target.id);
                xMoves.push(event.target.id);
                    checkWinner();
            }
            if(checkWinner() && moveCount==10 ){
                resultContainer.style.display = 'flex';
                resultText.innerHTML = '<h3>Game is Draw</h3>';
            }
        }
    
}

let cellElements = document.getElementsByTagName('td');
for(i=0;i<9;i++){
    cellElements[i].addEventListener('click',choseXorO);
}