// let scorePlayerOne = 0;
// let scorePlayerTwo = 0;
// let scoreElOne = document.getElementById("score-el-1");
// let scoreElTwo = document.getElementById("score-el-2");



// function addOneO() {
//     scorePlayerOne = scorePlayerOne + 1;
//     scoreElOne.innerText = scorePlayerOne;
// }

// function addTwoO() {
//     scorePlayerOne = scorePlayerOne + 2;
//     scoreElOne.innerText = scorePlayerOne;
// }

// function addThreeO() {
//     scorePlayerOne = scorePlayerOne + 3;
//     scoreElOne.innerText = scorePlayerOne;
// }

// function addOneT() {
//     scorePlayerTwo = scorePlayerTwo + 1;
//     scoreElTwo.innerText = scorePlayerTwo;
// }

// function addTwoT() {
//     scorePlayerTwo = scorePlayerTwo + 2;
//     scoreElTwo.innerText = scorePlayerTwo;
// }

// function addThreeT() {
//     scorePlayerTwo = scorePlayerTwo + 3;
//     scoreElTwo.innerText = scorePlayerTwo;
// }

// function reset() {
//     scoreElOne.innerText = 0
//     scoreElTwo.innerText = 0
//     scorePlayerOne = 0;
//     scorePlayerTwo = 0;
// }

let homeEl = document.getElementById("home-el");
let guestEl = document.getElementById("guest-el");
let scoreHome = 0;
let scoreGuest = 0;

function pointsHome() {
    scoreHome += 1;
    homeEl.textContent = scoreHome;
}
function pointsGuest() {
    scoreGuest += 1;
    guestEl.textContent = scoreGuest;
}

function addOneHome() {
    pointsHome();
  
}
function addTwoHome() {
    pointsHome();
    pointsHome();
}
function addThreeHome() {
    pointsHome();
    pointsHome();
    pointsHome();
}

function addOneGuest() {
    pointsGuest();
  
}
function addTwoGuest() {
    pointsGuest();
    pointsGuest();
}
function addThreeGuest() {
    pointsGuest();
    pointsGuest();
    pointsGuest();
}

function reset() {
    scoreHome = 0;
    scoreGuest = 0; 
    homeEl.textContent = 0;
    guestEl.textContent = 0;
}