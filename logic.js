var startButton = document.getElementById("start");
var startScreenEl = document.getElementById("start-screen");
var questionsEl = document.getElementById("questions");
var timerId;
var time = questions.length * 15
var timerEl = document.getElementById("time");
var question = document.createElement("p");
    question.innerText = "";
var choicesId;
var choicesEl = document.getElementById("choices");
var choices = document.createElement("p");
var answerId;   
var answer = document.createElement("p");



// startQuiz functions
function startQuiz() {
    startScreenEl.setAttribute("class", "hide");
    questionsEl.removeAttribute("class");
    
    timerId = setInterval(clockTick, 1000)
    timerEl.textContent = time;

// Append questions
    questionsEl.appendChild(question);
    
    choicesEl.appendChild(choices)

// Loops questions    
    for ( i = 0; i < questions.length; i++);


}

// Adds buttons to the questions    
    // questionsEl.addEventListener("click", question);




// Timer clock
function clockTick() {
    time--;
    timerEl.textContent = time;
    if (time <= 0 ) {


        //quizEnd()
    }


}

startButton.onclick = startQuiz;
































