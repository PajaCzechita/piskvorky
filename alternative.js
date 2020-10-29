const onBtnClick = (e) => {
  e.currentTarget.classList.add(`${currentPlayer}__symbol`);
  e.currentTarget.disabled = true;
  playersSymbol = document.querySelector('.symbol').classList.remove(currentPlayer); // we remove the class to stop showing sign of the current player

  const finalResult = isWinningMove(e.currentTarget);
  if (finalResult) { // "finalResult" is the same as "finalResult === true" here -> coz it compares if true === true
    const playAgain = (currentPlayer === 'circle') ? confirm('Vyhrálo kolečko. Chceš spustit novou hru?') : confirm('Vyhrál křížek. Chceš spustit novou hru?');
    if (playAgain) {
      location.reload();
    }
  }

  currentPlayer = (currentPlayer === 'circle') ? 'cross' : 'circle';
  playersSymbol = document.querySelector('.symbol').classList.add(currentPlayer);
}
