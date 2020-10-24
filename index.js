'use strict'

// pri kliku na tlacitko:
// 1. if circle is playing, it draws circle into current field
// 2. if cross is playing, it draws cross into current field
// 3. if there is already circle/cross, it does nothing
// 4. change current player
// 5. compute if there is a winner


let currentPlayer = 'circle';
const btnElements = document.querySelectorAll('.btn__game');
//console.log(btnElements)
let playersSymbol = document.querySelector('.symbol').classList.add('circle');

const onBtnClick = (e) => {
  if (currentPlayer === 'circle') {
      e.currentTarget.classList.add('circle__symbol');
      e.currentTarget.disabled=true;
      currentPlayer = 'cross';

//upravuje X/O za HRAJE
      playersSymbol = document.querySelector('.symbol').classList.remove('circle');
      playersSymbol = document.querySelector('.symbol').classList.add('cross');

     } else if ((currentPlayer === 'cross')) {
      e.currentTarget.classList.add('cross__symbol');
      e.currentTarget.disabled=true;
      currentPlayer = 'circle';

      //upravuje X/O za HRAJE
      playersSymbol = document.querySelector('.symbol').classList.remove('cross');
      playersSymbol = document.querySelector('.symbol').classList.add('circle');
     } 
  }

btnElements.forEach(btn => {
  btn.addEventListener('click', onBtnClick) 
});



//const whoMoves = currentPlayer.querySelector('.navigation__menu').innerHTML; 
  //document.querySelector('#dnes').innerHTML = namedayHas;










