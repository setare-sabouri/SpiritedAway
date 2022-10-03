
var gameContainer=document.getElementById("game-container");
var gameContent=document.getElementById("game-content");
var Score=document.getElementById("Score");

const myCharTaken = localStorage.getItem('MyCharPassed');
const GameChar = JSON.parse(myCharTaken);
var scoreCounter=2;
function initialChar() {
    var NewChar=document.createElement('img');
    NewChar.src=GameChar.src;
    NewChar.alt=GameChar.alt;
    NewChar.classList.add('game-character');
    rndmRotation=Math.random() * 360;
    NewChar.style.transform='rotate('+rndmRotation+'deg)';
    NewChar=LocationGenerator(NewChar)
    gameContent.appendChild(NewChar);
    NewChar.addEventListener('click',function(){
        Score.innerHTML = "Score : " + scoreCounter++;
        initialChar();  
    })
}
function LocationGenerator(input){
    var widthOfScreen=gameContent.clientWidth;
    var heightOfScreen=gameContent.clientHeight;
    input.style.top = Math.random() * (widthOfScreen-100) + 'px';
    input.style.left=Math.random() * (heightOfScreen-100) +'px';
    return input;
    // const y = Math.random() * height;
}
function startGame(){
    setTimeout(initialChar, 1000);

}

startGame();