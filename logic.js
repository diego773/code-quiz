var startButton = document.getElementById("start");
var startScreenEl = document.getElementById("start-screen");
var questionsEl = document.getElementById("questions");
var timerId;
var time = questions.length * 15
var timerEl = document.getElementById("time");
var question = document.createElement("question");

function startQuiz() {
    startScreenEl.setAttribute("class", "hide");
    questionsEl.removeAttribute("class");
    
    timerId = setInterval(clockTick, 1000)
    timerEl.textContent = time;
    
// Append child    
    questionsEl.appendChild(question); 
    for (var i = 0; i <= questions.length; i++);
    

}

function clockTick() {
    time--;
    timerEl.textContent = time;
    if (time <= 0 ) {
        //quizEnd()
    }


}

startButton.onclick = startQuiz;
































