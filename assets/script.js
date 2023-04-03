let score = 0;
let currentQuestionIndex = 0;
let time = 30;

function startQuiz() {
  const startButton = document.getElementById('start-button');
  startButton.style.display = 'none';
  const gameContainer = document.getElementById('game-container');
  gameContainer.style.display = 'block';

  // Show the first question
  showQuestion(0);
}

  document.getElementById("start-button").addEventListener("click", function() {
  // Hide start button
  document.getElementById("start-button").style.display = "none";

  // Create timer
  var timeLeft = 30;
  var timer = setInterval(function() {
    timeLeft--;
    document.getElementById("timer").textContent = "Time left: " + timeLeft +" seconds";
    if (timeLeft === 0) {
      clearInterval(timer);
      endGame();
    }
  }, 1000);

  // Initialize score
  var score = 0;
  document.getElementById("score").textContent = "Score: " + score;

  // Show first question
  startQuiz();
  
});

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

function showQuestion(index) { 
  // Update question and choices
  document.getElementById("question").textContent = questions[index].question;

  var choices = document.getElementById("choices");
  choices.innerHTML = "";

  for (var i = 0; i < questions[index].choices.length; i++) {
    var input = document.createElement("input");
    input.type = "radio";
    input.name = "answer";
    input.value = i;

    var label = document.createElement("label");
    label.setAttribute("for", "answer" + i);
    label.textContent = questions[index].choices[i];
      
    var li = document.createElement("li");
    li.appendChild(input);
    li.appendChild(label);
    choices.appendChild(li);
  } 

// Answer button click event handler
document.getElementById("submit-button").addEventListener("click", function() {
  // Check if answer is correct
  var answer = document.querySelector('input[name="answer"]:checked').value;
  if (answer === "correct") {
    score++;
    document.getElementById("score").textContent = "Score: " + score;
    document.getElementById("result").textContent = "Correct!";
  } else {
    timeLeft -= 5;
    document.getElementById("result").textContent = "Wrong!";
  }

  // Move to next question
  var questionIndex = parseInt(document.getElementById("question-index").value);
  if (questionIndex < questions.length - 1) {
    showQuestion(questionIndex + 1);
  } else {
    endGame();
  }
});

// Show question function


  // Update question index
  document.getElementById("question-index").value = index;
}

// End game function
function endGame() {
  // Hide quiz container
  document.getElementById("quiz-container").style.display = "none";

  // Show high scores log page
  //document.getElementById
}

  const startButton = document.querySelector('#start-button');
const quizContainer = document.querySelector('#quiz-container');







const nextButton = document.getElementById('next-button');
nextButton.addEventListener('click', () => {
  // get the selected choice
  const selectedChoice = document.querySelector('input[name="choice"]:checked');
  if (!selectedChoice) {
    alert('Please select an answer.');
    return;
  }
  const choiceIndex = parseInt(selectedChoice.value);

  // check if the answer is correct
  const currentQuestion = questions[currentQuestionIndex];
  const isCorrect = currentQuestion.answer === choiceIndex;
  if (isCorrect) {
    score++;
  } else {
    timeLeft -= 5;
  }

 
  
  // move to the next question or end the game
  currentQuestionIndex++;
  if (currentQuestionIndex === questions.length || timeLeft === 0) {
    endGame();
  } else {
    displayQuestion(currentQuestionIndex);
  }
});



function checkAnswer() {
  const selectedChoice = document.querySelector('input[name="choice"]:checked');
  if (!selectedChoice) {
    alert("Please select an answer.");
    return;
  }

  const choiceIndex = parseInt(selectedChoice.value);
  const currentQuestion = questions[currentQuestionIndex];

  if (currentQuestion.answer === currentQuestion.choices[choiceIndex].value) {
    score++;
  } else {
    timeLeft -= 5;
  }
}

