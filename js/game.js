const gameItem=document.querySelectorAll(".game-item");
var MyChar={};

for (let i = 0; i < gameItem.length; i++) {
    gameItem[i].addEventListener('click',function () {
        const imgTaken = gameItem[i].querySelector('img');
        MyChar.src=imgTaken.getAttribute('src');
        MyChar.alt=imgTaken.getAttribute('alt');
        console.dir(MyChar);
        alert("you have chosen"+MyChar.alt);
        const myCharstring = JSON.stringify(MyChar);
        localStorage.setItem('MyCharPassed', myCharstring);
    }); 
}

// function gameBtn() {
//     const gameBtn = document.getElementById("gameBtn");
//     gameBtn.addEventListener('click', function () {
//     window.location.assign("../pages/GamePage.html");
//     })
// }


    