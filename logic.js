console.log("Hello World")
let humanscore=0
let computerscore=0
let text
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
    function playRound(humanchoice,computerchoice){
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
        output=output+","+"Your Score: "+humanscore+" Computer Score: "+computerscore
        return output

}
function playGame(input){
    computerchoice=getComputerChoice()
    console.log(computerchoice)
    text=playRound(input,computerchoice)
    addtheanswer(text)
    if(humanscore==5){
        addtheanswer("You Win")
        humanscore=0
        computerscore=0
    }
    else if(computerscore==5){
        addtheanswer("You Lose")
        humanscore=0
        computerscore=0
    }

}
let rock_btn=document.createElement("button")
let paper_btn=document.createElement("button")
let scissors_btn=document.createElement("button")
rock_btn.addEventListener("click",()=>{
    let input="rock"
    playGame(input)
})
rock_btn.textContent="Rock"
paper_btn.addEventListener("click",()=>{
    let input="paper"
    playGame(input)
})
paper_btn.textContent="Paper"
scissors_btn.addEventListener("click",()=>{
    let input="scissors"
    playGame(input)
})
scissors_btn.textContent="Scissors"
let bod=document.querySelector("body")
bod.appendChild(rock_btn)
bod.appendChild(scissors_btn)
bod.appendChild(paper_btn)
//new div to show the output
let div=document.createElement("div")
function addtheanswer(text){
    let para=document.createElement("p")
    para.textContent=text
    div.appendChild(para)
}
bod.appendChild(div)