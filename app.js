const gameItem=document.querySelectorAll(".game-item");
const gameBtn=document.getElementById("gameBtn");
const gameContainer=document.getElementById("game-container");
const gameContent=document.querySelector('.game-content');
var MyChar={};
//---------------------index.html-----------------------
// function moveCursor(e) {
//     let cursor = document.getElementById('mycursor');
//     cursor.style.top =  e.pageY + "px";
//     cursor.style.left = e.pageX + "px";
// } 
// window.addEventListener('mousemove', moveCursor);
//----------------------game.html Js-------------------------

for (let i = 0; i < gameItem.length; i++) {
    gameItem[i].addEventListener('click',function () {
        const imgTaken = gameItem[i].querySelector('img');
        MyChar.src=imgTaken.getAttribute('src');
        MyChar.alt=imgTaken.getAttribute('alt');
     }); 
}

//--------------------GamePage.html Js--------------------

function createCharacter(MyChar) {
    var NewChar=document.createElement('img');
    NewChar.innerHTML="i was added";
    console.log(MyChar.src);
}
function startGame(){
    createCharacter();
}
function playgame() {
    console.log('hhhhh');
    gameContent.innerHTML='dddddddddddddddddddddddd';
}
if (gameBtn) {
    gameBtn.addEventListener('click', function () {
        window.location="GamePage.html";
    })
}

//------------------noface page--------------------------------
var SignUpBtn=document.getElementById("signUpBtn");
function animate(params) {
    alert("dddddddddddd");
}
SignUpBtn.addEventListener('click',animate)