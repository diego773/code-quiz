// Show High Scores
function showHighscores() {
  // get high scores from local storage or set to empty array
  var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
  highscores.sort(function (a, b) {
    return b.score - a.score;
  });

  // display each high scores in the high scores list
  highscores.forEach(function (score) {
    // Create element for list high scores
    var listTag = document.createElement("li");
    listTag.textContent = score.initials + "-" + score.score;

    // Append child to parent element to display high scores
    var olTag = document.getElementById("highscores");
    olTag.appendChild(listTag);
  });
}

// Clear high scores
function clearScores() {
  window.localStorage.clear("highscores");
  location.reload();
}

// on click event for clear button
document.getElementById("clear").addEventListener("click", clearScores);

showHighscores();
