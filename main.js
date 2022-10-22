let computerNum = 0
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chances = 5;
let gameOver = false;
let chanceArea = document.getElementById("chance-area");
let history = [];

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus", function (){
    userInput.value = "";
});

function pickRandomNum (){
    computerNum = Math.floor(Math.random()*30)+1;
    console.log("정답:", computerNum);
}

function play(){
    let userValue = userInput.value;

    if(userValue < 1 || userValue > 30){
        resultArea. textContent="1과 30사이 숫자를 입력해 주세요"
        return;
    }
    if(history.includes(userValue)){
        resultArea.textContent = "이미 입력한 숫자입니다. 다른 숫자를 입력해 주세요."
        return;
    }
    chances -- ;
    chanceArea.textContent = `남은기회:${chances}번`;

    if(userValue < computerNum){
        resultArea.textContent = "Up!!!"
    }else if(userValue > computerNum){
        resultArea.textContent = "Down!!!"
    }else {
        resultArea.textContent = "맞추셨습니다!!!"
        gameOver = true;
    }

    history.push(userValue)

    if(chances < 1){
        gameOver = true;
    }

    if(gameOver == true){
        playButton.disabled = true;
    }
}

function reset(){
    userInput.value = "";
    pickRandomNum();
    resultArea.textContent = "리셋되었습니다";
    gameOver = false;
    playButton.disabled = false;
    chances = 5;
    chanceArea.innerHTML = `남은 기회:${chances}`;
}

pickRandomNum();




