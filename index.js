//  Use getRandomCard() to set the values of firstCard and secondCard

let firstCard = []
let secondCard = [0]
let cards = [firstCard, secondCard] // array - ordered list
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

let messageEl = document.getElementById("message-el")

let sumEl = document.getElementById("sum-el")

let cardsEl = document.getElementById("cards-el")

// Create the player object.Give it two keys, name and chips and set their values.
let player = {
    name:"Jesse",
    chips : 745
} 

//  Grab ahold of the player-el paragraph and store in the variable called playerEl
let playerEl = document.getElementById("player-el")

// Render the player s name and chips in playerEl
playerEl.textContent = player.name + ": $" + player.chips

console.log(cards)

// Create a function, getRandomCards(), that always returns the number 5
// Make this function return a random number between 1 to 13
 function getRandomCard() {
    // 1       --> return  11
    // 11 - 13 --> return  10
     let randomNumber = Math.floor(Math.random() * 13) + 1
     if (randomNumber > 10) {
    return 10
} else if (randomNumber === 1) {
    return 11
} else {
    return randomNumber
} 
} 
function startGame(){
    // Generate two random number
    renderGame()
}

function renderGame() {
cardsEl.textContent = "Cards: " 
// Create a for loop that renders out all the cards instead of jus two.

for (let i = 0; i < cards.length; i ++)  { 
    cardsEl.textContent += cards [i] + " "
}

sumEl.textContent = "Sum: " + sum

if (sum <= 20) {
    message = "Do you want to draw a new card? 😃 "
} else if (sum === 21){
    message = "Wohoo! you have got Balckjack! 🥳"
    hasBlackJack = true
}  else {
  message = "You are out of the game! 😂"
   isAlive = false
} 
messageEl.textContent = message
}

function newCard() {
    // Allow the player to get a new card only if alive and no Blackjack
    if (isAlive === true && hasBlackJack === false) {

 console.log("Drawing a new card from the deck!")
  // 1. Create a card variable, and hard code its value to a number (2-11)
    let card = getRandomCard()
    // 2. Add the new card to the sum variable
    sum += card
    // 3. Call startGame()
    cards.push(card)
    console.log(cards)
    renderGame()
    //console.log(getRandomCard())

}
}

