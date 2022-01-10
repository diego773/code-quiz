// Variables to track quiz
var currentQuestionIndex = 0;
var timerId;
var time = questions.length * 15;

// Dom variables
var timeEl = document.getElementById("timer");
var startButton = document.getElementById("start-button");
var startScreenEl = document.getElementById("start-screen");
var questionsEl = document.getElementById("questions");
var questionTitleEl = document.getElementById("question-title");
var choicesEl = document.getElementById("choices");
var feedbackEl = document.getElementById("feedback");
var endQuestionEl = document.getElementById("end-question");
var endScoreEl = document.getElementById("end-score");
var finalScore = document.getElementById("final-score");

// Start quiz
function startQuiz() {
  // Hide start screen
  startScreenEl.setAttribute("class", "hide");

  // Display questions
  questionsEl.removeAttribute("class");

  // Start timer
  timerId = setInterval(startTimer, 1000);

  // Display starting time
  timeEl.textContent = time;

  // Display first question
  showQuestion();
}

// Show questions
function showQuestion() {
  // Get current question object from array
  var currentQuestion = questions[currentQuestionIndex];

  // Display current question
  questionTitleEl.textContent = currentQuestion.question;

  // clear choices
  choicesEl.innerHTML = "";

  // Show choices for current question and add event listeners to each choice button to check answer when clicked on button
  for (var i = 0; i < currentQuestion.choices.length; i++) {
    // Created a variable to store the current choice
    var choice = currentQuestion.choices[i];

    // Create a button for each choice
    var choiceBtn = document.createElement("button");

    // Add class to button
    choiceBtn.setAttribute("class", "choice-button");

    // Add value to button
    choiceBtn.setAttribute("value", choice);

    // Append child button to parent element
    choicesEl.appendChild(choiceBtn);

    // Add text to button
    choiceBtn.textContent = i + 1 + "." + choice;

    // Check answer when choice button is clicked
    choiceBtn.addEventListener("click", checkAnswer);
  }
}

// Check answer
function checkAnswer() {
  // Get value of selected button choice and store in variable
  var userAnswer = this.value;

  // Get current question object from array and store in variable to compare user answer to correct answer
  var correctAnswer = questions[currentQuestionIndex].answer;

  // Check if user answer is correct and display feedback
  if (userAnswer !== correctAnswer) {
    // Decrease time by 10 seconds if wrong
    time -= 10;

    if (time < 0) {
      time = 0;
    }
    // Display new time
    timeEl.textContent = time;

    // Display feedback
    feedbackEl.textContent = "Wrong!";
  } else {
    feedbackEl.textContent = "Correct!";
  }

  // Display Correct! or Wrong! message for a second
  feedbackEl.setAttribute("class", "feedback");
  setTimeout(function () {
    feedbackEl.setAttribute("class", "hide");
  }, 1000);

  // Show next question
  currentQuestionIndex++;

  // End quiz if all questions have been answered
  if (currentQuestionIndex === questions.length) {
    endQuiz();
  } else {
    showQuestion();
  }
}

// End quiz
function endQuiz() {
  // Stop timer
  clearInterval(timerId);

  // Hide questions
  questionsEl.setAttribute("class", "hide");

  // Show end screen
  endQuestionEl.removeAttribute("class");

  // Display final score
  endScoreEl.removeAttribute("class");
  finalScore.textContent = time;
}

// Start timer by decrementing time by 1 second
function startTimer() {
  // Decrement time by 1 second and display new time
  time--;
  timeEl.textContent = time;

  // End quiz if time runs out
  if (time <= 0) {
    endQuiz();
  }
}

// Save score
function saveScore() {}

// Start quiz by clicking start button
startButton.onclick = startQuiz;
