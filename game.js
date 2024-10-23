let userScore = 0;
let computerScore = 0;

const choice = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");


const userScorePara =document.querySelector("#user-score");
const computerScorePara =document.querySelector("#computer-score");


const genComputerChoice = () =>{
    const options = ["rock" , "paper", "scissors"];
    const randomIdx = Math.floor( Math.random() * 3);
     return options[randomIdx];
};

const drawGame =() => {
    // console.log("gane was draw.");
    msg.innerText = "game was draw.play again";
    msg.style.backgroundColor =" #081b31";
};


const showwinner =(userWin , userChoice , computerChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;

        // console.log("you win!");
        msg.innerText = `you win! your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor =" green";
    } else {
        computerScore++;
        computerScorePara.innerText =computerScore;


        // console.log("you lose");
        msg.innerText = `you lost. ${computerChoice} beats your ${userChoice}`;
        msg.style.backgroundColor =" red";
    }
};



const playGame = (userChoice) => {
    //  console.log("user choice =",userChoice);
     //generate computer choice
     const computerChoice = genComputerChoice();
    //  console.log("computer choice =",computerChoice);


     if(userChoice === computerChoice){
     drawGame();
     } else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissors,pAPER
            userWin = computerChoice === "paper"? false : true ;
        } else if(userChoice === "paper"){
            //rock,scissors
            userWin = computerChoice === "scissors"? false : true ;
        }else if(userChoice === "scissors"){
            // rock, paper
            userWin = computerChoice === "rock"? false : true ;
        }
        showwinner(userWin , userChoice ,computerChoice);
     }

};

choice.forEach( (choice) => {
    // console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute ("id")
        playGame(userChoice);
    });
});
