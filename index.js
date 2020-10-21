'use strict'

/*KROK 1 Vytvoř si proměnnou, ve které bude uloženo kdo je na tahu. Začíná vždy kolečko, tak rovnou do proměnné přiřaď hodnotu circle.*/
/* KRO.K 2 Při kliknutí do pole ořidám třídu na btn__game, kt vyzobrazí kolečko*/




// pri kliku na tlacitko:
// 1. if circle is playing, it draws circle into current field
// 2. if cross is playing, it draws cross into current field
// 3. if there is already circle/cross, it does nothing
// 4. change current player
// 5. compute if there is a winner

// 1. 


let currentPlayer = 'circle';

const btnElements = document.querySelectorAll('.btn__game');

btnElements.forEach(btn => {
  btn.addEventListener("click", (e) => {
if (currentPlayer === 'circle') {
    e.currentTarget.classList.add('circle');
    currentPlayer = 'cross';
   } else if ((currentPlayer === 'cross')) {
    e.currentTarget.classList.add('cross');
currentPlayer = 'circle';
   } 
    }); 
}) 










