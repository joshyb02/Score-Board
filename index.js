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
    homeEl.textContent = 000;
    guestEl.textContent = 000;
}