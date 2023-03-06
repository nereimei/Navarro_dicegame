function rollDice(){
    var diceValue = parseInt(Math.random()*6)+1;

    document.getElementById("dFace").innerHTML = diceValue;

    if(diceValue>=3){
        document.getElementById("dMsg").innerHTML = "You rolled " + diceValue + " You lose <span class='text-danger'> boohoo</span>!";
    }
    else{
        document.getElementById("dMsg").innerHTML = "You rolled " + diceValue + " You win <span class='text-primary'>hurrah!</span>"
    }
}