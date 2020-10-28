'use strict'

// pri kliku na tlacitko:
// 1. if circle is playing, it draws circle into current field
// 2. if cross is playing, it draws cross into current field
// 3. if there is already circle/cross, it does nothing
// 4. change current player
// 5. compute if there is a winner


let currentPlayer = 'circle';
let playersSymbol = document.querySelector('.symbol').classList.add('circle');

const btnElements = document.querySelectorAll('.btn__game');

const onBtnClick = (e) => {
  if (currentPlayer === 'circle') {
      e.currentTarget.classList.add('circle__symbol');
      e.currentTarget.disabled=true;
      currentPlayer = 'cross';

      //adjust X/O -> HRAJE
      playersSymbol = document.querySelector('.symbol').classList.remove('circle');
      playersSymbol = document.querySelector('.symbol').classList.add('cross');

     } else if ((currentPlayer === 'cross')) {
      e.currentTarget.classList.add('cross__symbol');
      e.currentTarget.disabled=true;
      currentPlayer = 'circle';

      //adjust X/O -> HRAJE
      playersSymbol = document.querySelector('.symbol').classList.remove('cross');
      playersSymbol = document.querySelector('.symbol').classList.add('circle');
     } 
  }

btnElements.forEach(btn => {
  btn.addEventListener('click', onBtnClick) 
});


/* fnce for getting the field */
const gameField = 10; //size of the gameField
const wholeField = document.querySelectorAll('game__field'); //select the whole game field

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
  row: Math.floor(fieldIndex/gameField),
  column: fieldIndex % gameField
}
}