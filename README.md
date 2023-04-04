# Speed-Quiz
This is a speed quiz for users to test their knowledge on some fun facts!

## Technology Used 

| Technology Used         | Resource URL           | 
| ------------- |:-------------:| 
| HTML    | [https://developer.mozilla.org/en-US/docs/Web/HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) | 
| CSS     | [https://developer.mozilla.org/en-US/docs/Web/CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)      |   
| Git | [https://git-scm.com/](https://git-scm.com/)     |  
| JavaScript | [https://developer.mozilla.org/en-US/docs/Web/javascript](https://developer.mozilla.org/en-US/docs/Web/javascript) |

## Description

[Visit the Deployed Site](https://bryannguyen9.github.io/speed-quiz/)

This project is a website that allows users to perform a speed quiz.

This quiz consists of 5 questions and logs scores based on if you received the question right or wrong. If user got the question wrong it subtracts 5 seconds from the initial time given of 30 seconds.

Again here is a link to my fully deployed website: 
[Site Landing Page](https://bryannguyen9.github.io/speed-quiz/)

## Table of Contents

* [Mock Up](#mock-up)
* [Code Example](#code-example)
* [Usage](#usage)
* [Learning Points](#learning-points)
* [Author Info](#author-info)
* [Credits](#credits)
* [License](#license)

## Mock-Up

The following image shows the web application's appearance and functionality:

![The homepage of my Speed Quiz](.../Assets/homepage.png)

## Code Example

Here is an example of my checkAnswer() function that allows the users to see a 'CORRECT' or 'WRONG' feedback based on what answer choice they submit for each question.

```javascript
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
```

## Usage
 
Here you can see the home page of my quiz:

![Speed Quiz Homepage Screenshot](../../Assets/homepage.png)

Here you can see that when you click 'Start' the first question of the quiz shows up:

![Prompt Window Popup Screenshot](../Assets/quiz.png)

Here you can see that after the timer counts down to 0 or when the user finishes all questions the highscore page shows up where user can log in their name and score:

![Generated Password Screenshot](../Assets/highscores.png)


## Learning Points 

There was a lot of stopping points in this project. Namely how to get all of the different pages and functions to work in unison. Points of abrasion include but are not limited to:

1. Javascript and different event listeners in order to get the quiz to work in a way that is user friendly and allows for the 'speed' element to be an actual 'speed' element.

2. Getting my high-scores log to show up after users inputted their name. (Still have not implemented this use case as I could not figure out but will return back in the future!)

3. Getting another html page to work in unison with the initial html page in this case I had a high-scores html page that popped up when the timer ran out or when users ran out of questions.

These are some links that helped me:

1. [W3 schools](https://www.w3schools.com/howto/howto_js_redirect_webpage.asp)
2. [GeeksforGeeks](https://www.geeksforgeeks.org/how-to-create-a-simple-javascript-quiz/)
3. [Stack-Overflow](https://stackoverflow.com/questions/75110260/creating-a-multiple-choice-quiz)

## About Me

Hi, my name is Bryan Nguyen I am an up and coming full-stack web developer working
on getting into the space with projects that support both my growth, belief, and imagination. I hope to one day work within the realm of AI, web-development, and even site-reliability/the space of cyber-security.

## My links

* [Portfolio](https://bryannguyen9.github.io/Bryan-Nguyen-Portfolio/)
* [LinkedIn](https://linkedin.com/in/bryannguyen9)
* [Github](https://github.com/bryannguyen9)


## Credits

### Special thanks to David Chung: 
 
 * His Github Portfolio: [David-Chung-Github](https://github.com/dchung13/)
 * His Linked-In: [David-Chung-LinkedIn](https://www.linkedin.com/in/david-chung-77141526b/)
 * His Portfolio Site: [David-Chung-Portfolio](https://dchung13.github.io/David-Chung-Portfolio/) 

### Special thanks to these reference websites that taught me different functionalities within my website for me to create a seamless experience for users.

1. [W3 Schools](https://www.w3schools.com/JS/js_random.asp)
2. [Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
3. [Stack-Overflow](https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range)


## License

MIT License

Copyright (c) [2023] [Bryan-Nguyen]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
