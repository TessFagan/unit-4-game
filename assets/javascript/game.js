// variables:
// Game Random Number (range 19-120)
// 4 Crystals Random Numbers (range 1-12)
// Total Current Score 
// Total Wins
// Total Losses
// Game Running?

var totalWins = 0
var totalLosses = 0
var totalCurrentScore = 0

// functions

function gameRandomNumber() {
    var randomNumber = 18 + Math.floor(Math.random() * 102)
    console.log(randomNumber)
    $("#goalnumber").text(randomNumber);
}

function crystalRandomNumber() {
    var crystalRandomNumber = 1 + Math.floor(Math.random() * 12)
    console.log(crystalRandomNumber)
}

function setCrystalValue() {

}

function score() {
    // sum of all buttons pressed
    // totalCurrentScore = x + y + z + q
    $("#totalscore").text(totalCurrentScore);
}

function scoreEqualsNumber() {
    if (totalCurrentScore === gameRandomNumber) {
        alert("youwin!")
        totalWins++
        $("#totalwins").text(totalWins);
    }

    else if (totalCurrentScore > gameRandomNumber) {
        alert("youlose!")
        totalLosses++
        $("#totallosses").text(totalLosses);
    }
    else {
        alert("keepgoing")
    }
}

function resetGame() {
    totalCurrentScore = 0
}

function runGame() {
    gameRandomNumber()
    crystalRandomNumber()
    score()
    scoreEqualsNumber()
}


// buttons
var blueDiamond = document.getElementById("bluediamond");
blueDiamond.onclick = function () {
    console.log("blueclicked");
}

var redDiamond = document.getElementById("reddiamond");
redDiamond.onclick = function () {
    console.log("redclicked");
}

var purpleDiamond = document.getElementById("purplediamond");
purpleDiamond.onclick = function () {
    console.log("purpleclicked");
}

var yellowDiamond = document.getElementById("yellowdiamond");
yellowDiamond.onclick = function () {
    console.log("yellowclicked");
}
