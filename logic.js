var startButton = document.getElementById("start");
var startScreenEl = document.getElementById("start-screen");
var questionsEl = document.getElementById("questions");
var timerId;
var time = questions.length * 15
var timerEl = document.getElementById("time");


function startQuiz() {
    startScreenEl.setAttribute("class", "hide");
    questionsEl.removeAttribute("class");

    timerId = setInterval(clockTick, 1000)
    timerEl.textContent = time;
    //getQuestion(); 

}

function clockTick() {
    console.log(time);
    time--;
    timerEl.textContent = time;
    if (time <= 0 ) {
        //quizEnd()
    }


}

startButton.onclick = startQuiz;