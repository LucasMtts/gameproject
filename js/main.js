// INITIAL DATA
let pointView = document.getElementById('points');
let lifesView = document.getElementById('lifes');
let life = 3;
let point = 0;
let timer = 5000;
let start = false;

// EVENTS
document.getElementById("enemy1").addEventListener("click", kill); 
//document.getElementById("GW").addEventListener("click", miss);
document.getElementById("reset").addEventListener('click', resetGame);
document.getElementById("start").addEventListener('click', startGame);

// FUNCTION
function startGame(){
    if(start == false){
        start = true;
        spawnEnemy();
    }else {
        console.log("ERROR");
    }
}

function resetGame() {
    start = false;
    life = 3;
    point = 0;
    timer = 5000;
    attScore();
    document.getElementById("enemy1").style.display = "none";
}

function spawnEnemy() {
    if(life > 0){
        generatePosition();
        document.getElementById("enemy1").style.display = "flex";
        startTimer();
    }
}

function despawnEnemy() {
    document.getElementById("enemy1").style.display = "none";
}

function kill (){
    point++;
    attScore();
    if(point === 100){

    }

    if(timer > 3000){
        timer -= 200;
    }else if(timer > 2000 && timer <= 3000){
        timer -= 100;
    }else if(timer > 1000 && timer <= 2000){
        timer -= 50;
    }else if(timer > 500  && timer <= 1000){
        timer -= 10;
    }else if(timer <= 500){}

    clearTimeout(timeSet);
    despawnEnemy();
    spawnEnemy();
}

function attScore() {
    pointView.innerText = `Points: ${point}`;
    lifesView.innerText = `Lifes: ${life}`;
}

function generatePosition() {
    function getRandomInt(min, max) {
        min = Math.ceil(0);
        max = Math.floor(90);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    let x = getRandomInt();
    let y = getRandomInt();

    document.getElementById("enemy1").style.inset = `${x}% auto auto ${y}%`;
}

function startTimer() {
    timeSet = setTimeout(() =>{
        console.log("time out");
        life--;
        attScore();
        despawnEnemy();
        spawnEnemy();
    }, timer);
}
/*
function miss (){
    if(start == true){
        life--;
        attScore();
    }
}
*/