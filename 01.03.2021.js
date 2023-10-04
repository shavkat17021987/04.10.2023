const game = ()=> {
    let pScore= 0;
    let cScore= 0;

const startGame = () => {
    const playBtn=document.querySelector(".intro button");
    const introScreen =document.querySelector(".intro");
    const match =document.querySelector(".match");

    playBtn.addEventListener("click", ()=>{
        introScreen.classList.add("fadeOut");
        match.classList.add("fadeIn");
  
    });
};
const playMatch =()=> {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
   const computerOptions =["rock", "paper", "scissors"];

options.forEach(option =>{
    option.addEventListener("click", function() {
        console.log(this);
    });

   const computerNumber =Math.floor(Math.random() *3); 
   const computerChoice =computerOptions[computerNumber];  

 playerHand.src 

});
});
};
cost compareHands =(playerChoice,computerChoice) =>{
    const winner = document.querySelector('.winner');
 if(playerChoice ===computerChoice) {
     winner.textContent ='It is a tie';
     return;
 }
 if(playerChoice === 'rock' ){ 
     if(computerChoice ==='scissors'){
        winner.textContent='player Wins'
        return;
     }else{
         winner.textContent='computer Wins';
          return;
     }   
}
if(playerChoice === 'paper' ){ 
    if(computerChoice ==='scissors'){
       winner.textContent='computer Wins'
       return;
    }else{
        winner.textContent='player Wins';
         return;
}
}
if(playerChoice === 'scissors' ){ 
    if(computerChoice ==='rock'){
       winner.textContent='computer Wins'
       return;
    }else{
        winner.textContent='player Wins';
         return;
 startGame();
 playMatch();
};
game();
}