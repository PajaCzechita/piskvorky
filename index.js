'use strict'

// pri kliku na tlacitko:
// 1. if circle is playing, it draws circle into current field
// 2. if cross is playing, it draws cross into current field
// 3. if there is already circle/cross, it does nothing
// 4. change current player
// 5. compute if there is a winner

/* START - fce for adding class & see who is playin */
let currentPlayer = 'circle';
let playersSymbol = document.querySelector('.symbol').classList.add('circle');

const btnElements = document.querySelectorAll('.btn__game');

const onBtnClick = (e) => {
    if (currentPlayer === 'circle') {
        e.currentTarget.classList.add('circle__symbol');
        e.currentTarget.disabled = true;
        //currentPlayer = 'cross';

        //adjust X/O -> HRAJE
        playersSymbol = document.querySelector('.symbol').classList.remove('circle');
        playersSymbol = document.querySelector('.symbol').classList.add('cross');

    } else if ((currentPlayer === 'cross')) {
        e.currentTarget.classList.add('cross__symbol');
        e.currentTarget.disabled = true;
        //currentPlayer = 'circle';

        //adjust X/O -> HRAJE
        playersSymbol = document.querySelector('.symbol').classList.remove('cross');
        playersSymbol = document.querySelector('.symbol').classList.add('circle');
    }



    const finalResult = isWinningMove(e.currentTarget);
    if (finalResult) { // "finalResult" is the same as "finalResult === true" here -> coz it compares if true === true
        const playAgain = (currentPlayer === 'circle') ? confirm('Vyhrálo kolečko. Chceš spustit novou hru?') : confirm('Vyhrál křížek. Chceš spustit novou hru?');
        if (playAgain) {
            location.reload();
        }
    }

    currentPlayer = (currentPlayer === 'circle') ? 'cross' : 'circle';

}

btnElements.forEach(btn => {
    btn.addEventListener('click', onBtnClick)
});
/* END of function */

/* START fnce for getting position of specific field */
const gameField = 10; //size of the gameField
const wholeField = document.querySelectorAll('.btn__game'); //select the whole game field

/* 
1/ create variable that starts with 0
2/ loop that goes throug the field and compare "clicked field" with the game field
3/ if equal -> loop end & return row/column
4/ if not loop +1 & continues
5/ row = field position/index devided gameField + round down
6/ column = division remainder 
*/

const getPosition = (field) => {
    let fieldIndex = 0;
    while (fieldIndex < wholeField.length) {
        if (field === wholeField[fieldIndex]) {
            break
        } fieldIndex++
    }
    return {
        row: Math.floor(fieldIndex / gameField),
        column: fieldIndex % gameField
    }
}

//console.log(getPosition(wholeField[30]))

/* END of function */

const getField = (row, column) => {

    const index = row * 10 + column; //gives index of the field
    return wholeField[index] //gives the filed on the counted index
}

/* START fce, which return 'cross' or 'circle' or undefined. */

const getSymbol = (field) => {

    if (field.classList.contains('cross__symbol')) {
        return 'cross'
    } else if (field.classList.contains('circle__symbol')) {
        return 'circle'
    }
}
/* END of the function */

/* START fnce that counts cross & circle and gives winner */
const symbolsToWin = 5;
const isWinningMove = (field) => {
    const origin = getPosition(field)
    const symbol = getSymbol(field)

    let i
    let inRow = 1 //number for current clicked field

    //look to the left
    i = origin.column
    while (i > 0 && symbol === getSymbol(getField(origin.row, i - 1))) {
        inRow++
        i--
    }

    //look to the right
    i = origin.column
    while (i < gameField - 1 && symbol === getSymbol(getField(origin.row, i + 1))) {
        inRow++
        i++
    }

    if (inRow >= symbolsToWin) {
        return true
    }


    let inColumn = 1 //number for current clicked field

    //look to the top
    i = origin.row
    while (i > 0 && symbol === getSymbol(getField(i - 1, origin.column))) {
        inColumn++
        i--
    }

    //look to the bottom
    i = origin.row
    while (i < gameField - 1 && symbol === getSymbol(getField(i + 1, origin.column))) {
        inColumn++
        i++
    }

    if (inColumn >= symbolsToWin) {
        return true
    }

    return false
}

/* END of the function */
