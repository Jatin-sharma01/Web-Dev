/*create a game where you start with any random
Number. Ask the user to keep guessing the game
number until the user enters the correct value*/

// pratice question 2 from tutorial 3
// tutorial 3, Date: 11-05-2024
let gamenum = 25;

let guess = prompt("Guess a number between 1 and 100");
console.log(guess);

while (guess != gamenum) {
    if (guess > gamenum) {
        console.log("Too high");
    }
    else if (guess < gamenum) {
        console.log("Too low");
    }
    guess = prompt("Guess a number between 1 and 100");
    console.log(guess);
}
console.log("congrations you entered the right number");