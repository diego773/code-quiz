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
var nextQuestion = document.createElement("p")
var userInitials = document.getElementById("initials");
var getScores = document.getElementById("final-score");
var currQuestionIndex = 0;

// Finish quiz function
function finishQuiz() {
    let score = timerEl.textContent;
}
// Wrong answer function
function wrongAnswer() {
    console.log("Wrong!");
}

// startQuiz functions
function startQuiz() {
    startScreenEl.setAttribute("class", "hide");
    questionsEl.removeAttribute("class");

    // timer    
    timerId = setInterval(clockTick, 1000)
    timerEl.textContent = time;

    // gets one question from questions.js
    var questionEach = questions[currQuestionIndex];

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

    //store wrong answer
        if (questionEach.choices[i] == questionEach.answer) {
            buttonChoice.onclick = loadNextQuestion;
        }else {
            buttonChoice.onclick = wrongAnswer;
        }

        choicesEl.appendChild(buttonChoice);
    }
}

// gets the next question from questions.js
function loadNextQuestion() {
    currQuestionIndex = currQuestionIndex + 1

    if (currQuestionIndex >= questions.length) {
        timerEl.value;
    }

    var questionsEl = questions[currQuestionIndex];

    var titleElement = document.getElementById
    ("question-title");
    titleElement.textContent =(questionsEl.title);

    choicesEl.innerHTML = "";

    // getting choices
    for (i = 0; i < questionsEl.choices.length; i++) {
        let buttonChoice = document.createElement("button")
        // set button value
        buttonChoice.setAttribute("value", questionsEl.
        choices[i]);
        
        buttonChoice.textContent = i + 1 + ". " + 
        questionsEl.choices[i];
        
    // Load next questions and store wrong answer
        if (questionsEl.choices[i] == questionsEl.answer) {
            if (currQuestionIndex >= questions.length-1) {
                buttonChoice.onclick = finishQuiz;
            }else {
                buttonChoice.onclick = loadNextQuestion;
            }
        }else {
            buttonChoice.onclick = wrongAnswer;
        }  

        choicesEl.appendChild(buttonChoice);
        
    }

    // buttonChoice.textContent = i + 1 +". " + 
    // questionsEl.choices[i] + "<br>";

    // get the value of the click and check it against the value and console log

}
// Timer clock
function clockTick() {
    time--;
    timerEl.textContent = time;
    if (time <= 0 ) {


        //quizEnd()
    }


}

startButton.onclick = startQuiz;

        
        
        








    











































