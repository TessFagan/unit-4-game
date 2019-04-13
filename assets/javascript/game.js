// variables:
// Random Number (range 19-120)
// 4 Crystals Random Numbers (range 1-12)
// Current Score 
// Total Wins
// Total Losses
// Game Running? t/f

var randomNumber = 0
var redDiamondNumber = 0
var yellowDiamondNumber = 0
var blueDiamondNumber = 0
var purpleDiamondNumber = 0
var currentScore = 0
var totalWins = 0
var totalLosses = 0
var gameRunning = true


// functions

function gameRandomNumber() {
    randomNumber = 18 + Math.floor(Math.random() * 102)
    console.log(randomNumber)
    $("#goalnumber").text(randomNumber);
}

function crystalsRandomNumber() {
    if (gameRunning === true) {
        redDiamondNumber = 1 + Math.floor(Math.random() * 12)
        console.log(redDiamondNumber)
        yellowDiamondNumber = 1 + Math.floor(Math.random() * 12)
        console.log(yellowDiamondNumber)
        blueDiamondNumber = 1 + Math.floor(Math.random() * 12)
        console.log(blueDiamondNumber)
        purpleDiamondNumber = 1 + Math.floor(Math.random() * 12)
        console.log(purpleDiamondNumber)
    }
}

// buttons
var blueDiamond = document.getElementById("bluediamond");
blueDiamond.onclick = function () {
    console.log("blueclicked");
    console.log("this is game Running: " + gameRunning);
    if (gameRunning === true) {
        currentScore = currentScore + blueDiamondNumber
        console.log(currentScore)
        $("#totalscore").text(currentScore);
        scoreEqualsNumber()
    }
}

var redDiamond = document.getElementById("reddiamond");
redDiamond.onclick = function () {
    console.log("redclicked");
    console.log("this is game Running: " + gameRunning);

    if (gameRunning === true) {
        currentScore = currentScore + redDiamondNumber
        console.log(currentScore)
        $("#totalscore").text(currentScore);
        scoreEqualsNumber()
    }
}

var purpleDiamond = document.getElementById("purplediamond");
purpleDiamond.onclick = function () {
    console.log("purpleclicked");
    console.log("this is game Running: " + gameRunning);

    if (gameRunning === true) {
        currentScore = currentScore + purpleDiamondNumber
        console.log(currentScore)
        $("#totalscore").text(currentScore);
        scoreEqualsNumber()
    }
}

var yellowDiamond = document.getElementById("yellowdiamond");
yellowDiamond.onclick = function () {
    console.log("yellowclicked");
    console.log("this is game Running: " + gameRunning);

    if (gameRunning === true) {
        currentScore = currentScore + yellowDiamondNumber
        console.log(currentScore)
        $("#totalscore").text(currentScore);
        scoreEqualsNumber()
    }
}


// more functions
function scoreEqualsNumber() {
    if (currentScore === randomNumber) {
        alert("youwin!")
        totalWins++
        $("#totalwins").text(totalWins);
        gameRunning = false
        console.log("this is game Running: " + gameRunning);
        resetGame()
        console.log("this is game Running: " + gameRunning);
    }

    else if (currentScore > randomNumber) {
        alert("youlose!")
        totalLosses++
        $("#totallosses").text(totalLosses);
        gameRunning = false
        console.log("this is game Running: " + gameRunning);
        resetGame()
        console.log("this is game Running: " + gameRunning);
    }
    else {
        alert("keepgoing")
    }
}

function resetGame() {
    currentScore = 0
    $("#totalscore").text(currentScore);
    gameRandomNumber()
    crystalsRandomNumber()
    console.log(redDiamondNumber)
    console.log(yellowDiamondNumber)
    console.log(blueDiamondNumber)
    console.log(purpleDiamondNumber)
    gameRunning = true
    console.log("this is game Running: " + gameRunning);

}

function runGame() {
    if (gameRunning === true) {
        gameRandomNumber()
        console.log(randomNumber)
        crystalsRandomNumber()
        console.log(redDiamondNumber)
        console.log(yellowDiamondNumber)
        console.log(blueDiamondNumber)
        console.log(purpleDiamondNumber)
    }
}

runGame()
