


let homeScore = document.querySelector("#home-score")
let awayScore = document.querySelector("#away-score")
let scoreHome = 0
let scoreAway = 0

let home1 = document.querySelector("#add-home1")
let home2 = document.querySelector("#add-home2")
let home3 = document.querySelector("#add-home3")

let away1 = document.querySelector("#add-away1")
let away2 = document.querySelector("#add-away2")
let away3 = document.querySelector("#add-away3")

endBtn = document.querySelector("#end-btn")
newBtn = document.querySelector("#new-btn")
gameText = document.querySelector("#declare-winner")

newBtn.addEventListener("click", newGame)
function newGame() {
    homeScore.textContent = 0
    awayScore.textContent = 0
    scoreHome = 0
    scoreAway = 0
    gameText.textContent = null
}

 home1.addEventListener("click", addOne)
function addOne() {
        homeScore.textContent = scoreHome += 1
}

home2.addEventListener("click", addTwo)
function addTwo() {
    homeScore.textContent = scoreHome += 2  
}

home3.addEventListener("click", addThree)
function addThree() {
    homeScore.textContent = scoreHome += 3  
}



away1.addEventListener("click", awayPlusOne)
function awayPlusOne() {
    awayScore.textContent = scoreAway += 1
}

away2.addEventListener("click", awayplusTwo)
function awayplusTwo() {
    awayScore.textContent = scoreAway += 2
}

away3.addEventListener("click", awayplusThree)
function awayplusThree() {
    awayScore.textContent = scoreAway += 3
}


endBtn.addEventListener("click", gameOver,)
function gameOver() {
    if (scoreHome > scoreAway) {
        gameText.textContent = "HOME WINS"
    } else if (scoreHome < scoreAway) {
        gameText.textContent = "AWAY WINS"
    } else {
        gameText.textContent = "DRAW"
    }
}
