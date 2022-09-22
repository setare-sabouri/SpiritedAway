const gameItem=document.querySelectorAll(".game-item");
var MyChar={};
for (let i = 0; i < gameItem.length; i++) {
    gameItem[i].addEventListener('click',function () {
        const imgTaken = gameItem[i].querySelector('img');
        MyChar.src=imgTaken.getAttribute('src');
        MyChar.alt=imgTaken.getAttribute('alt');
    }); 
}


function gameBtn() {
    const gameBtn = document.getElementById("gameBtn");
    gameBtn.addEventListener('click', function () {
    window.location.assign("../pages/GamePage.html");
    })
    console.log("click me")
    }


    const gameContainer=document.getElementById("game-container");
    const gameContent=document.querySelector('.game-content');
    
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
    
    