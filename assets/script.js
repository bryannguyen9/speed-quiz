var score = 0;
let currentQuestionIndex = 0;
let timeLeft = 30;

//function to start quiz upon clicking start button
function startQuiz() {
  const startButton = document.getElementById('start-button');
  startButton.style.display = 'none';
  const gameContainer = document.getElementById('game-container');
  gameContainer.style.display = 'block';
  
  // Show the first question
  showQuestion(0);
}

//event listener for start-button (should include a hover for styling later)
  document.getElementById("start-button").addEventListener("click", function() {
  // Hide start button after starting quiz
  document.getElementById("start-button").style.display = "none";

  // Creates 30s timer
  timeLeft = 30;
  var timer = setInterval(function() {
    timeLeft--;
    document.getElementById("timer").textContent = "Time left: " + timeLeft +" seconds";
    if (timeLeft === 0 || currentQuestionIndex === questions.length) {
      clearInterval(timer);
      endGame();
    }
  }, 1000);

  document.getElementById("score-container").textContent = "Score: " + score;
  // Show first question
  startQuiz();
});


//questions array filled with different arrays within arrays
const questions = [  
  { 
    question: "What is the capital of France?",    
    choices: ["London", "Paris", "Berlin"],
    correctAnswer: "Paris"
  },
  {
    question: "What is the largest planet in our solar system?",
    choices: ["Mars", "Venus", "Jupiter"],
    correctAnswer: "Jupiter"
  },
  {
    question: "What is the tallest mammal?",
    choices: ["Elephant", "Giraffe", "Hippopotamus"],
    correctAnswer: "Giraffe"
  },
  {
    question: "What is the largest ocean?",
    choices: ["Atlantic Ocean", "Arctic Ocean", "Pacific Ocean"],
    correctAnswer: "Pacific Ocean"
  },
  {
    question: "What is the smallest country in the world?",
    choices: ["Vatican City", "Monaco", "San Marino"],
    correctAnswer: "Vatican City"
  }
];

//function to display question
function showQuestion(index) { 
  document.getElementById("question").textContent = questions[index].question;

  var choices = document.getElementById("choices");
  choices.innerHTML = "";

  for (var i = 0; i < questions[index].choices.length; i++) {
    var input = document.createElement("input");
    input.type = "radio";
    input.name = "answer";
    input.value = questions[index].choices[i];

    var label = document.createElement("label");
    label.setAttribute("for", "answer" + i);
    label.textContent = questions[index].choices[i];
      
    var li = document.createElement("li");
    li.appendChild(input);
    li.appendChild(label);
    choices.appendChild(li);

    
  }
}

//function to compare userChoice and correctAnswer then move to next question
function checkAnswer() {
  const selectedChoice = document.querySelector('input[name="answer"]:checked');
  if (!selectedChoice) {
    alert("Please select an answer.");
    return;
  }

  //reads in current question and the selected choice value
  const userChoice = selectedChoice.value;
  const currentQuestion = questions[currentQuestionIndex];
  const feedbackEl = document.createElement("p");

  //comparison operator
  if (userChoice === currentQuestion.correctAnswer) {
    feedbackEl.textContent = "CORRECT";
    document.getElementById("feedback").appendChild(feedbackEl);
    score++;
    document.getElementById("score-container").textContent = "Score: " + score;
    console.log(score);

  } else {
    feedbackEl.textContent = "WRONG";
    document.getElementById("feedback").appendChild(feedbackEl);
    timeLeft -= 5;
  }

  //moves to next question
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion(currentQuestionIndex);
  } else {
    endGame(); //needs to be highscore page
  }

}


// Answer button click event handler
const submitButton = document.getElementById('submit-button');
submitButton.addEventListener('click', function() {
  checkAnswer();
  })


//ENDED HERE
// End game function
function endGame() {
  // Hide quiz container
  document.getElementById("quiz-container").style.display = "none";
  //document.getElementById("high-scores-container").style.display="block";
  // Save the score to local storage
  localStorage.setItem("score", score);

  // Redirect to the highscore page
  showHighScoreForm();
}


function showHighScoreForm() {
  window.location.href = "highscores.html";
}




const startButton = document.querySelector('#start-button');
const quizContainer = document.querySelector('#quiz-container');
const highScoreContainer = document.querySelector('#high-scores-container');

//need to put bootstrap for css


// Define variables
const highScoreButton = document.getElementById("high-score-button");
const nameInput = document.getElementById("name-input");
const highScoresList = document.getElementById("high-scores-list");
let highScores = [];

// Load high scores from local storage
if (localStorage.getItem("highScores")) {
  highScores = JSON.parse(localStorage.getItem("highScores"));
}

// Function to display the high scores on the page
function displayHighScores() {
  // Clear the high scores list
  highScoresList.innerHTML = "";

  // Loop through the high scores array and create list items for each
  for (let i = 0; i < highScores.length; i++) {
    const highScore = highScores[i];

    const li = document.createElement("li");
    li.textContent = `${highScore.name}: ${highScore.score}`;
    highScoresList.appendChild(li);
  }
}

// Add event listener to the high score submit button
highScoreButton.addEventListener("click", function(event) {
  event.preventDefault();

  // Get the name entered by the user and their score from local storage
  const name = nameInput.value;
  const score = localStorage.getItem("score");

  // Check if the user entered a valid name
  if (!name) {
    alert("Please enter a valid name.");
    return;
  }

  // Create an object to store the name and score
  const highScore = {
    name: name,
    score: score
  };

  // Push the high score object into the array of high scores
  highScores.push(highScore);

  // Sort the high scores array by score
  highScores.sort(function(a, b) {
    return b.score - a.score;
  });

  // Store the updated high scores in local storage
  localStorage.setItem("highScores", JSON.stringify(highScores));

  // Clear the name input field
  nameInput.value = "";

  // Display the updated high scores on the page
  displayHighScores();
});

// Display the high scores on the page
displayHighScores();

