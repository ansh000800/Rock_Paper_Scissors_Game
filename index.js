let userScore=0;
let compScore=0;
let drawMatches=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const newGameBtn=document.querySelector("#new-game");

const drawMatchesPara= document.querySelector("#draw-matches");
const userScorePara=document.querySelector("#user-score");
const compScorepara=document.querySelector("#computer-score");

const resetGame=()=>{
    userScore=0;
    compScore=0;
    drawMatches=0;
    drawMatchesPara.innerText=drawMatches;
    userScorePara.innerText=userScore;
    compScorepara.innerText=compScore;
    msg.innerText="Play your move";
    msg.style.backgroundColor="#081b31";


}

const genCompChoice=()=>{
    // Generating computer Move.
    const options=["rock","paper","scissors"];
    const ranIdx=Math.floor(Math.random()*3);
    return options[ranIdx];
};
const drawGame=()=>{
    drawMatches++;
    drawMatchesPara.innerText=drawMatches;
    msg.innerText="Game is Draw, Play again."
    msg.style.backgroundColor="#081b31";

};

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorepara.innerText=compScore;
        msg.innerText=`You lost. ${compChoice} beats your ${userChoice}.`;
        msg.style.backgroundColor="red";
    }
};


const playGame=(userChoice)=>{
    //generate computer choice
    const compChoice=genCompChoice();

    if(userChoice === compChoice){
        //Draw Game
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice === "rock"){
            userWin= compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper") {
            userWin= compChoice === "scissors"? false: true;
        }
        else if(userChoice === "scissors"){
            userWin= compChoice === "rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});

newGameBtn.addEventListener("click",resetGame);