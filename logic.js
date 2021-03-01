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
var button = document.createElement("button");
var titleElement = document.createElement("p")
var buttonChoice = document.createElement("p")


// startQuiz functions
function startQuiz() {
    startScreenEl.setAttribute("class", "hide");
    questionsEl.removeAttribute("class");
    
    timerId = setInterval(clockTick, 1000)
    timerEl.textContent = time;

    // gets one question from questions.js
    var questionEach = questions[0];

    // update question title on html
    var titleElement = document.getElementById
    ("question-title");
    titleElement.textContent = questionEach.title;
    console.log(titleElement);

    // clear old choices
    choicesEl.innerHTML = "";

    // getting choices
    for (i = 0; i < questionEach.choices.length; i++) {
        // create button
        var buttonChoice = document.createElement("button");
        // set button value
        buttonChoice.setAttribute("value", questionEach.
        choices[i]);

        buttonChoice.textContent = i + 1 + ". " + 
        questionEach.choices[i];

        choicesEl.appendChild(buttonChoice);
    };

    buttonChoice.addEventListener("click", choices);

    if (choicesEl == answerId) {
        console.log("Correct!");
        nextQuestion();
    } else {
        console.log("Wrong!");
        nextQuestion();
    }
}

// gets the next question from questions.js
function nextQuestion() {
    var questionsEl = questions[0];

    var titleElement = questionsEl.tittle;
        console.log(titleElement);

    choicesEl.innerHTML = "";

    // getting choices
    for (i = 0; i < questionsEl.choices.length; i++) {
        buttonChoice.textContent = i + 1 +". " + 
        questionsEl.choices[i] + "<br>";

        choicesEl.appendChild(buttonChoice);
    }

    if (choicesEl == answerId) {
        console.log("Correct!");
        nextQuestion();
    } else {
        console.log("Wrong!");
        nextQuestion();
    }

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
































