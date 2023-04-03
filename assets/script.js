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
    if (timeLeft === 0) {
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
    endGame();
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

  // Show high scores log page
  //document.getElementById
}

const startButton = document.querySelector('#start-button');
const quizContainer = document.querySelector('#quiz-container');







