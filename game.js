"use strict";

// VARIABLES

let playerPoints = 0, computerPoints = 0;
let playerSelection, computerSelection;

// FUNCTIONS

function computerPlay () {
    let randomNumber = Math.floor(Math.random() * 3);
    
    if (randomNumber === 0)
        return "rock";
    else if (randomNumber === 1)
        return "paper";
    else if (randomNumber === 2)
        return "scissors";
    else
        return "something went wrong";
}

function playRound (playerSelection = "", computerSelection = "") {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === "rock" && computerSelection === "paper") {
        computerPoints++;
        return "You lost this turn! Paper beats rock!";
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerPoints++;
        return "You won this turn! Rock beats scissors!";
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerPoints++;
        return "You lost this turn! Scissors beat paper!";
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        playerPoints++;
        return "You won this turn! Paper beats rock!";
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerPoints++;
        return "You lost this turn! Rock beats scissors!";
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerPoints++;
        return "You won this turn! Scissors beats paper!";
    }

    else if (playerSelection === computerSelection)
        return "Draw!";
}

function game () {
    
    let pointsNeeded = 5;

    while (playerPoints !== pointsNeeded && computerPoints > pointsNeeded || computerPoints !== pointsNeeded && playerPoints < pointsNeeded) {
        playerSelection = prompt("Choose: rock, paper or scissors?");
        computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        console.log("\nComputer chose: " + computerSelection);
        console.log("\nYour points: " + playerPoints + "\nComputer Points: " + computerPoints + "\n\n");
    }
    if (playerPoints === pointsNeeded)
        console.log("YOU WIN!");
    else
        console.log("YOU LOST...");
}

// "MAIN"

game();
