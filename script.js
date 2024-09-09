let boxes = document.querySelectorAll(".box");

let rstBtn = document.querySelector("#rstBtn");

let newBtn = document.querySelector("#newBtn");

let msgContainer = document.querySelector(".msg-container");

let msg = document.querySelector("#msg");

let turnO = true;

const winPatt = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box) =>{
    box.addEventListener("click",() =>{
        if(turnO){
            box.classList.remove("voilet");
            box.classList.add("red");
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.classList.remove("red");
            box.classList.add("voilet");
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const checkWinner = (() =>{
    for(let pattern of winPatt){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != "") {
            if(pos1val === pos2val && pos2val === pos3val){
                showWinner(pos1val);
            }
        }

    }
});

const enaableBoxes = (() =>{
    for (let box of boxes){
        box.disabled = false;
        box.innerText ="";
    }
});

const reset = (() =>{
    turnO = true;
    enaableBoxes();
    msgContainer.classList.add("hide");
});

newBtn.addEventListener("click", reset);
rstBtn.addEventListener("click", reset);


const disableBoxes = (() =>{
    for (let box of boxes){
        box.disabled = true;
    }
});

const showWinner = (winner) =>{
    msg.innerText = `Congratulations , the Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};



