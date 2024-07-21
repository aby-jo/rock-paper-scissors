console.log("Hello World")
function getComputerChoice() {
    rand=100*Math.random();
    output=undefined
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
    console.log(input)
}
getHumanChoice()