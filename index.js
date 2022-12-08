rollDice = () => {
    console.log("Rolling the dice...");
    let diceNumber = 0;
    let dice = document.getElementById("dice");
    dice.classList.add("dice-animation");
    let diceAudio = document.getElementById("dice-audio");
    diceAudio.play();
    document.getElementById("myBtn").disabled = true;
    
    setTimeout(() => {

        document.getElementById("myBtn").disabled = false;
        dice.classList.remove("dice-animation");
        diceNumber = Math.floor(Math.random() * 6) + 1;
        document.getElementById("dice-counter").innerHTML = diceNumber;
        
    },800);
    
    
}

