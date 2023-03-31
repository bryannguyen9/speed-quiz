var timerEl = document.getElementById('countdown');
var quizEndEl = document.getElementById('quizEndScreen');
var nameLogEl = document.getElementById('nameLog');

//create the quiz function that has a question and answer choices
//it also gives out a 'correct' or 'wrong' when answer is chosen (use focus element)
//answers have hover attribute that highlights when hovered over
//when answer is chosen move to next question and have a score counter incrementing when correct answer
function quiz() {

}

//countdown function countsdown
//when count reaches 0 go to 'nameInput' page
function countdown() {
  
  // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeLeft = 2;
  var timeInterval = setInterval(function () {
    
    timeLeft--;
    timerEl.textContent = "Time: " + timeLeft;
    
    

    if (timeLeft === 0) {
      clearInterval(timeInterval);
      nameInputPage();

    }
  }, 1000);
}

//allows user to input their name to log their score
//should show the score they got when the count reached 0 or when quiz finished
//include submit button
//when submit button is pressed go to highscore log where user will see their score (use onclick function 04-13)
function nameInputPage() {
    quizEndEl.textContent = "Quiz has ended!";
    nameLogEl.textContent = "HI";
}

// Displays highscore log and saves user scores with name and score number
function displayScorePage() {
    //need to put a place to fill in name and submit button
    //need to after they press submit go to a highscore page log
  
  
}

countdown();

//var highScorePage = 


//setTimeout() repeats given function at repeated time intervals, could be used to switch
