
const gameContainer=document.getElementById("game-container");
const gameContent=document.getElementById("game-content");

const myCharTaken = localStorage.getItem('MyCharPassed');
const GameChar = JSON.parse(myCharTaken);

function initialChar() {
    var NewChar=document.createElement('img');
    NewChar.src=GameChar.src;
    NewChar.alt=GameChar.alt;
    NewChar.classList.add('game-character');
    rndmRotation=Math.random() * 360;
    NewChar.style.transform='rotate('+rndmRotation+'deg)';
    NewChar=LocationGenerator(NewChar)
    gameContent.appendChild(NewChar);
    console.log(NewChar+" added");
    console.log(gameContent.clientWidth);
}
function LocationGenerator(input){
    var widthOfScreen=gameContent.clientWidth;
    var heightOfScreen=gameContent.clientHeight;
    input.style.top = Math.random() * widthOfScreen + 'px';
    input.style.left=Math.random() * heightOfScreen +'px';
    return input;
    // const y = Math.random() * height;
}
function startGame(){
    setTimeout(initialChar, 1000)
}

startGame();