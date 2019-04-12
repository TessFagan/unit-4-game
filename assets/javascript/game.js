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

function gameRandomNumber() {
    var randomNumber = 18 + Math.floor(Math.random() * 102)
    console.log(randomNumber)
    $("#goalnumber").text(randomNumber);
}

function crystalRandomNumber() {
    var crystalRandomNumber = 1 + Math.floor(Math.random() * 12)
    console.log(crystalRandomNumber)
}

gameRandomNumber()
crystalRandomNumber()
crystalRandomNumber()
crystalRandomNumber()
crystalRandomNumber()

function calculateTotalCurrentScore() {
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

function runGame() {
    gameRandomNumber()
    crystalRandomNumber()
    totalCurrentScore()
    scoreEqualsNumber()
}

function resetGame() {
    totalCurrentScore = 0
}


$("#bluediamond").on("click", console.log("blueclicked"));
$("#reddiamond").on("click", console.log("redclicked"));
$("#purplediamond").on("click", console.log("purpleclicked"));
$("#yellowdiamond").on("click", console.log("yellowclicked"));
