// INITIAL DATA
let pointView = document.getElementById('points');
let lifesView = document.getElementById('lifes');
let life = 3;
let point = 0;

// EVENTS
document.getElementById("enemy1").addEventListener("click", kill); 
document.getElementById("reset").addEventListener('click', resetGame);
document.getElementById("start").addEventListener('click', startGame);

// FUNCTION
function startGame(){
   attScore();
   document.getElementById("enemy1").style.display = "flex"
}

function kill (){
    point++;
   attScore();
    
    document.getElementById("enemy1").style.display = "none";
}

function resetGame() {
    life = 3;
    point = 0;
    attScore();
}

function attScore() {
    pointView.innerText = `Points: ${point}`;
    lifesView.innerText = `Lifes: ${life}`;
}