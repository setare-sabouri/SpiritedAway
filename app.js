const gameItem=document.querySelectorAll(".game-item");
const gameBtn=document.getElementById("game-btn");
const gameContainer=document.getElementById("game-container");

//----------------------game.html Js-------------------------

for (let i = 0; i < gameItem.length; i++) {
    gameItem[i].addEventListener('click',function () {
        alert("YOu are selecting"+" item "+ (i+1) );
        const img = gameItem[i].querySelector('img');
        const src = img.getAttribute('src');
        const alt = img.getAttribute('alt');
        console.log(alt);
        console.log(src);
     }); 
}

//--------------------GamePage.html Js--------------------
function createCharacter() {
    const NeweChar=document.createElement('div');
    NeweChar.innerHTML="i am noface";
    gameContainer.appendChild(NeweChar);
    console.log('here you areeee');
}
function startGame(){
    createCharacter();
}
function playgame() {
    startGame();

}



const SelectBtn=document.getElementById("Select-btn");
SelectBtn.addEventListener('click',function (params) {
    SelectBtn.style.backgroundColor='Green';
});
 playgame();