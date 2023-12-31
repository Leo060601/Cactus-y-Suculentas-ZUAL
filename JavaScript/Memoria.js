const cards = document.querySelectorAll('.memory-card');
const movesCounter = document.querySelector('#moves');
const gameOverMessage = document.querySelector('#game-over-message');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let moves = 0;
let matchedPairs = 0;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    // Primer click
    hasFlippedCard = true;
    firstCard = this;
    return;
  }

  // Segundo click
  secondCard = this;

  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  if (isMatch) {
    disableCards();
    matchedPairs++;
  } else {
    unflipCards();
  }

  moves++;
  movesCounter.textContent = moves;

  checkGameOver();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1500);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

cards.forEach(card => card.addEventListener('click', flipCard));

function checkGameOver() {
  if (matchedPairs === 6) {
    gameOverMessage.textContent = `¡Felicitaciones! ¡Has ganado en ${moves} movimientos!`;
    lockBoard = true;
  }
}