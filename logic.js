console.log("Hello World")
function getComputerChoice() {
    rand=100*Math.random();
    let output
    if(rand<33){
        output="rock"
    }
    else if(rand<66){
        output="scissors"
    }
    else{
        output="paper"
    }
    return(output)
}
function getHumanChoice(){
    input=prompt("Enter your choice between Rock, Scissors and Paper")
    return input
}
let humanscore=0
let computerscore=0
function playRound(humanchoice,computerchoice){
    humanchoice=humanchoice.toLowerCase()
    let output
    if(humanchoice==computerchoice){
        output=`You both played ${humanchoice} so it is a draw `
    }
    else if(humanchoice=="rock" && computerchoice=="paper"){
        output=`You lose as paper beats rock`
        computerscore++
    }
    else if(humanchoice=="paper" && computerchoice=="scissors"){
        output="You lose as paper as scissors beats paper" 
        computerscore++
    }
    else if(humanchoice=="scissors" && computerchoice=="rock"){
        output="You lose as rock beats scissors"
        computerscore++
    }
    else{
        output=`You win as ${humanchoice} beats ${computerchoice}`
        humanscore++
    }
    return output
}