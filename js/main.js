// INITIAL DATA
let pointView = document.getElementById('points');
let lifesView = document.getElementById('lifes');
let life = 3;
let point = 0;
let timer = 5000;

// EVENTS
document.getElementById("enemy1").addEventListener("click", kill); 
document.getElementById("reset").addEventListener('click', resetGame);
document.getElementById("start").addEventListener('click', startGame);

// FUNCTION
function startGame(){
    attScore();
    generatePosition();
    document.getElementById("enemy1").style.display = "flex"
}

function kill (){
    point++;
    attScore();
    
    document.getElementById("enemy1").style.display = "none";
    generatePosition();
    document.getElementById("enemy1").style.display = "flex"
}

function resetGame() {
    life = 3;
    point = 0;
    attScore();
    document.getElementById("enemy1").style.display = "none";
}

function attScore() {
    pointView.innerText = `Points: ${point}`;
    lifesView.innerText = `Lifes: ${life}`;
}

function spawnEnemy() {
    setTimeout(() =>{
        
        generatePosition();
     }, timer);
}

function generatePosition() {
    let x = getRandomInt();
    let y = getRandomInt();

    document.getElementById("enemy1").style.inset = `${x}% auto auto ${y}%`;
}

function getRandomInt(min, max) {
    min = Math.ceil(0);
    max = Math.floor(90);
    return Math.floor(Math.random() * (max - min)) + min;
}