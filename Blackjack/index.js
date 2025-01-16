let firstCard = 0;
let secondCard = 0;
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard;
let hasBlackjack = false;
let isGameOngoing = true;
let message = "";
let messageEl = document.getElementById('message-el');
let sumEl = document.getElementById('sum-el');
// More specific way to get an HTML object similar naming scheme to CSS
// let sumElSelector= document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");

function startGame() {
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: " + cards[0] + ', ' + cards[1]
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = 'Hit or Stay?';
    } else if (sum === 21) {
        message = "You've got blackjack!";
        hasBlackjack = true;
    } else {
        message = "Bust...";
        isGameOngoing = false;
    }
    messageEl.textContent = message;
}

function newCard() {
    let currentNewCard = 1;
    sum += currentNewCard
    renderGame()
}