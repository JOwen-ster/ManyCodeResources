// can access using player.attribute or player[attribute]
let player = {
    name: 'You',
    chips: 100,
};
let cards = [];
let sum = 0;
let hasBlackjack = false;
let isGameOngoing = false;
let isPlayerTurn = false;
let message = "";
let messageEl = document.getElementById('message-el');
let sumEl = document.getElementById('sum-el');
// More specific way to get an HTML object similar naming scheme to CSS
// let sumElSelector= document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");
let playerEl = document.querySelector("#player-el");
playerEl.textContent = player.name + ": $" + player.chips;
let startEl = document.querySelector("#start-btn");
let hitEl = document.querySelector("#hit-btn")
let stayEl = document.querySelector("#stay-btn")


function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13) + 1;
    if (randomCard === 1) {
        return 1; // ace value
    }else if (randomCard >= 11) {
        return 10; // face value
    } else {
        return randomCard;
    }
}

function startGame() {
    if (!isGameOngoing) {
        resetGame();
        toggleChoiceButtons('visible');
        let firstCard = getRandomCard();
        let secondCard = getRandomCard();
        cards.push(firstCard, secondCard);
        sum = firstCard + secondCard;
        renderGame();
    }
}

function renderGame() {
    cardsEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + ', ';
    }
    sumEl.textContent = "Sum: " + sum;

    if (sum <= 20) {
        message = 'Hit?';
    } else if (sum === 21) {
        message = "You've got blackjack!";
        hasBlackjack = true;
        isGameOngoing = false;
        toggleChoiceButtons('hidden');
    } else {
        message = "Bust...";
        isGameOngoing = false;
        toggleChoiceButtons('hidden');
    }
    messageEl.textContent = message;
}

function newCard() {
    if (isGameOngoing && !hasBlackjack) {
        let currentNewCard = getRandomCard();
        cards.push(currentNewCard)
        sum += currentNewCard;
        renderGame();
    }
}

function endPlayerTurn() {
    isGameOngoing = false;
    toggleChoiceButtons('hidden');
}

function resetGame() {
    cards.length = 0; // clear array
    sum = 0;
    hasBlackjack = false;
    isGameOngoing = true;
    isPlayerTurn = true;
    toggleChoiceButtons('hidden');
}

function toggleChoiceButtons(view) {
    if (view === 'visible') {
        hitEl.style.visibility = view;
        hitEl.disabled = false;

        stayEl.style.visibility = view;
        stayEl.disabled = false;

        startEl.style.visibility = 'hidden';
        startEl.disabled = true;
    } else {
        hitEl.style.visibility =  'hidden';
        hitEl.disabled = true;

        stayEl.style.visibility = 'hidden'
        stayEl.disabled = true;

        startEl.style.visibility = 'visible';
        startEl.disabled = false;
    }
}