let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetButton");
let newGameBtn = document.querySelector("#newGameButton");
let messg_container = document.querySelector("#message_container")
let messg = document.querySelector("#message")
let hide_id = document.querySelector

let turnofO = true; // PlayerX , PlayerY

const winPatterns = [
    [0 , 1 , 2],
    [3 , 4 , 5],
    [6 , 7 , 8],
    [0 , 3 , 6],
    [1 , 4 , 7], 
    [2 , 5 , 8],
    [0 , 4 , 8],
    [2 , 4 , 6]
];

boxes.forEach( (box) => {

    box.addEventListener ("click" , () => {

    if(turnofO == true) {
        box.innerText = 'O';
        turnofO = false;
    }

    else{
        box.innerText = 'X';
        turnofO = true;
    }

    box.disabled = true; // It helps to set to tap a button once

    checkWinner();

});

} )

const checkWinner = () => {

    for (let pattern of winPatterns) {
        
        let pattern1val = boxes[ pattern[0] ].innerText;
        let pattern2val = boxes[ pattern[1] ].innerText;
        let pattern3val = boxes[ pattern[2] ].innerText;

        if ( pattern1val != "" && pattern2val != "" && pattern3val != "") {
            
            if (pattern1val === pattern2val && pattern2val === pattern3val) {

                showWinner(pattern1val);

            }

        }
        
    }

}

const showWinner = (winner) => {

    messg.innerText = `Congrulations, Winner is ${winner}`;
    messg_container.style.display = "flex";

    disableBox();

} 

const disableBox = () => {

    for (let box of boxes) {
        box.disabled = true ; // It is done to stop clicking the boxes
    }

}

const resetGame = () => {
    turnofO = true;
    enableBoxs();
    messg_container.style.display = "none";
}

const enableBoxs = () => {
    
    for (let box of boxes) {
        box.disabled = false ;
        box.innerText = "";
    }

}

newGameBtn.addEventListener("click" , resetGame);
resetBtn.addEventListener("click" , resetGame);