let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#btn");
let newbtn=document.querySelector("#newbtn");
let msgcont=document.querySelector(".msg-container");
let message=document.querySelector("#msg");

let turn0=true;

let winningstats=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];

const resetgame=()=>
{
    turn0=true;
    enableBoxes();
    msgcont.classList.add("hide");
}
boxes.forEach((box)=>
{
    box.addEventListener("click",()=>
    {
        console.log("Box is clicked");
        if(turn0)
        {
            box.innerText="O";   // player 0 turn 
            turn0=false;
        }
        else
        {
            box.innerText="X";   // player X turn 
            turn0=true;
        }
        box.disabled=true;  // disable the change when click twice on same box . 
        checkwinner();      
    });
});

const disableBoxes = () =>             // functions to disables the buttons after winner will declared .
{
    for(let box of boxes)
    {
        box.disabled=true;
    }
}

const enableBoxes = () =>             // functions to disables the buttons after winner will declared .
{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
}


const checkwinner = () =>           // function to check the winner . 
{
    for (let pattern of winningstats)
    {
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!="" &&pos2!="" &&pos3!="" )
        {
            if(pos1==pos2 && pos2==pos3)
            {
                console.log("Winner",pos1);
                showwinner(pos1);
                return true;
            }
        }
    };
};

const showwinner = (winner) =>
{
    message.innerText =`Congratulations , " ${winner} " is winner . `
    msgcont.classList.remove("hide");
    disableBoxes();
}


newbtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);