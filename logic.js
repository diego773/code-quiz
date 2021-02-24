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
    var question = getQuestion("What is the closest planet to Jupiter?", "How much does basketball weight?", 
    "Who was the first man on the moon?", "Who played Batman in the 1992 Batman Returns?",
    "Who sang Ready or Not?"); 

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