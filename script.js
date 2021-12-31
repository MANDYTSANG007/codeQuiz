var scoreCounter = 0; //create a score counter variable set it to 0
var currentQuestion = 0; //current question 
var userAnswer = ""; // current answer the user picks
// select the HTML timer element with a countdown function
var timerElement = document.getElementById('timer');

function timer() {
    var timeLeft = 60;
    var timeInterval = setInterval(function(){
        if(timeLeft >1) {
            timerElement.textContent = timeLeft + ' seconds remaining';
            timeLeft--;
        }else if(timeLeft === 1) {
            timerElement.textContent = timeLeft + ' second remaining';
            timeLeft--;
        }else {
            timerElement.textContent = '';
            clearInterval(timeInterval);
            //displayMessage();
            
        }
    }, 1000);
}
//timer();

//create object's properties and set up a quiz questions array
var quiz = [
    {question1: "A very useful tool used during development and debugging for printing content to the debugger is: ",
    options: [ "A. JavaScript", "B. terminal/bash", "C. for loops", "D. console.log"],
    answer: "D. console.log"
    },
    {question2: "Commonly used data types DO NOT include: ",
    options: [ "A. strings", "B. booleans", "C. alerts", "D. numbers"],
    answer: "C. alerts"
    },
    {question3: "The condition in an if / else statement is enclosed within _______. ",
    options: ["A. quotes", "B. curly brackets", "C. parentheses", "D. square brackets"],
    answer: "B. curly brackets"
    },
    {question4: "Arrays in JavaScript can be used to store _______.",
    options: ["A. numbers and strings", "B. other arrays", "C. booleans", "D. all of the above"],
    answer: "D. all of the above"
    },
    {quesiton5: "String values must be enclosed within _____ when being assigned to variables.",
    options: ["A. commas", "B. curly brackets", "C. quotes", "D. parentheses"],
    answer: "C. quotes"
    },
];
//start the quiz when user click on the start quiz button
function startQuiz(){
    document.getElementById("btn").addEventListener("click", selectOption)
    startQuestion(currentQuestion);    //start asking the first question
}
function startQuestion(currentQuestion){
    timer();    //start the timer
    userAnswer = quiz[currentQuestion].options[0];
    

}

//examine whether the user select an option
function selectOption(){
    checkAnswer();
}
//compare answer to see if the users answer correctly
function checkAnswer(){
    if (userAnswer==quiz[currentQuestion].options[quiz[currentQuestion].answer]){
        scoreCounter += 1;
        nextQuestion();
    }else{
        //penalty by deducting 5s from the timer
        nextQuestion();
    }
}


/*pseudocode
create a counter to record score and initially set its value to zero
create a start button
create a timer
create an array in which includes quiz questions
when the user presses on the button, it set off the timer
once the timer starts, a prompt will be displayed to ask the first question
after the user picks an answer and presses submit, the program will examine the answer
examine if the answer is answered correctly 
if true (when answer correctly)
    - display "Right"
    -increment the counter by 1
    - move to the next question. 
if false (when answer incorrectly), 
    - display "Wrong"
    - subtract time from the clock
use for loop to move through each question one by one
when all questions are answered or when the time ran out, the game comes to an end. 
display a box asking user to input his/her initial
when user clicks submit
display highscores - need to set up a local storage. When user refreshes the browser, the scores remain. 







*/