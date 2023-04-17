console.log("Welcome to Tic Tac Toe");
let music = new Audio("click");
let audioTurn = new Audio("ting");
let gameover = new Audio("gameover");

let turn = "X";

//Function to change the turn
const changeTurn = () => {
    return turn === "X"? 0 : X;
}

//Function to check for a win
const checkWin = () => {

}

//Main Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
    let boxtext = document.querySelector('.boxtext');
    boxtext.addEventListener('click', () => {
        if(e.innerText === ' '){
            e.innerText = turn;
            changeTurn();
            audioTurn.play();
            checkWin();
            document.getElementsByClassName(turn)[0].innerText = "Turn for " + turn;
            
        }
    })
})