var moveCount = 1;
var allMoves = [];
var xMoves = [];
var oMoves = [];

function serachInArray(key,array){
    for(var i=0;i<array.length;i++){
        if(key == array[i]){
            return true;
        }
    }
    return false;
}
function checkSameRow(array){
    for(i=0;i<3;i++){
        var rowCount = 0;
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
        var colCount = 0;
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
    var diagonal1 = ['00','11','22'];
    var diagonal2 = ['02','11','20'];
    var diaCount1 = 0;
    var diaCount2 = 0;
    for(var i=0;i<array.length;i++){
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
function checkWinner(){
    if(checkSameRow(xMoves) || checkSameCol(xMoves) || checkSameDiagonal(xMoves) ){
        alert('Player One Has Won The Game');
    }else if(checkSameRow(oMoves) || checkSameCol(oMoves) || checkSameDiagonal(oMoves) ){
        alert('Player Two Has Won The Game');
    }
}
function displayX(event){
    var loc = event.target.id;
    xLoc = document.getElementById(loc);
    xLoc.setAttribute('class','x');
}
function displayO(event){
    var loc = event.target.id;
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
            if(moveCount==10){
                alert('Game is Draw');
            }
        }
    
}

var cellElements = document.getElementsByTagName('td');
for(i=0;i<9;i++){
    cellElements[i].addEventListener('click',choseXorO);
}