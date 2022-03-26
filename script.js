var scoreCounter = 0; //create a score counter variable set it to 0
var currentQuestion = 0; //current question starts from 0
var userAnswer = ""; // current answer the user picks set it to empty as it is still an unknown
var timeLeft = 60;
var highscores = [];
//create object's properties and set up a quiz questions array
var quiz = [
    {question: "A very useful tool used during development and debugging for printing content to the debugger is: ",
    options: ["JavaScript", "terminal/bash", "for loops", "console.log"],
    answer: "console.log"
    },
    {question: "Commonly used data types DO NOT include: ",
    options: ["strings", "booleans", "alerts", "numbers"], 
    answer: "alerts"
    },
    {question: "The condition in an if / else statement is enclosed within _______. ",
    options: ["quotes", "curly brackets", "parentheses", "square brackets"], 
    answer: "curly brackets"
    },
    {question: "Arrays in JavaScript can be used to store _______.",
    options: ["numbers and strings", "other arrays", "booleans", "all of the above"], 
    answer: "all of the above"
    },
    {question: "String values must be enclosed within _____ when being assigned to variables.",
    options: ["commas", "curly brackets", "quotes", "parentheses"],
    answer: "quotes"
    },
]; 
var questionCount = quiz.length; //this variable w/ an initial value of the quiz's length

var initialInput = document.querySelector("#initial");//select the id:initial and set it as the value of the variable
var timerElement = document.getElementById("timer"); //select the timer element by its id
var hideParagraph = document.getElementById("hide");
var start = document.getElementById("start-btn").addEventListener("click", startQuestion); //select the start button from html
document.getElementById("start-btn").addEventListener("click", function(){
    startTimer();
});

var highscoreButton = document.querySelector("#highscoreButton");
var highscoreList = document.querySelector("#highscoreList");

//set up timer
function startTimer() {
    var timeInterval = setInterval(function(){
        if(timeLeft >1 && currentQuestion <5) {
            timerElement.textContent = timeLeft + ' seconds remaining'; // update the text element of the timer 
            timeLeft--;
        }else if(timeLeft === 1 && currentQuestion <5) {
            timerElement.textContent = timeLeft + ' second remaining';
            timeLeft--;
        }else if(timeLeft >1 && currentQuestion > 5) {     //stop the timer when all question has been answered
            clearInterval(timeInterval);
            displayMessage();
        }else if (timeLeft === 0){  //when the timer is 0, displays alert  
            clearInterval(timeInterval);
            alert("Game Over!")
            displayMessage();
        }else{
            timerElement.textContent = '';
            clearInterval(timeInterval);
            displayMessage();
        }
    }, 1000);
}

function startQuestion(){
    hideParagraph.style.display = "none";
    quiz.textContent = quiz[currentQuestion].question;  //get text content from the quiz array
    if (currentQuestion < questionCount){       //if current question is within the questions available
        document.getElementById("questionElement").textContent= quiz[currentQuestion].question;
        
    }
    var ul = document.getElementById("options");
    ul.innerHTML="";
    for(var i=0; i < quiz[currentQuestion].options.length; ++i){
        var li = document.createElement("li");
        li.innerText = quiz[currentQuestion].options[i];
        let answer = quiz[currentQuestion].options[i];
        li.addEventListener('click', function() {checkAnswer(answer);});
        ul.appendChild(li);     //add li to ul
        
    }
}
//user to input their initial
function displayMessage(){
    prompt("All done! Your score is " + scoreCounter + ". Enter your initial: " );
    renderLastRegistered();
}

//compare answer to see if the users answer correctly
function checkAnswer(userAnswer){
    if (userAnswer==quiz[currentQuestion].answer && timeLeft >1){
        scoreCounter += 1;
        document.getElementById("answerResult").innerHTML = "Correct!";
        currentQuestion++;
        nextQuestion();
    }else if (userAnswer != quiz[currentQuestion].answer && timeLeft >1){
        document.getElementById("answerResult").innerHTML = "Incorrect!";
        currentQuestion++;
        timeLeft=timeLeft-5; //penalty by deducting 5s from the timer
        nextQuestion();
    }
}
//user advance to the next question
function nextQuestion(){
    if(currentQuestion<=quiz.length-1 && timeLeft>1){
        startQuestion(currentQuestion);
    }else if (currentQuestion>quiz.length-1 && timeLeft>1){
        hideParagraph.style.display = "none";
    } 
}

function renderLastRegistered(){
    highscoreList.innerHTML = "";  //clear highscore list element and the list will be updated 
    for (var i = 0; i < highscores.length; i++){
        var highscore = highscores[i];
        var li = document.createElement("li");
        li.textContent = highscore;
        li.setAttribute("data-index", i);
    }
};
/*
function init() {
    var storedHighscores = JSON.parse(localStorage.getItem("highscores"));
    if (highscores !== null) {
        highscores = storedHighscores;
    }
    renderLastRegistered();
}

function storeHighscores(){
    localStorage.setItem("highscores", JSON.stringify(highscores));
}

highscoreForm.addEventListener("submit", function(event){
    event.preventDefault();
    var highscoreText = highscoreInput.value.trim();

    if (highscoreText === ""){
        return;
    }
    highscores.push(highscoreText);
    highscoreInput.value= "";

    storeHighscores();
    renderLastRegistered();

});
init()
/*    var initial = localStorage.getItem("initial");
    
    highscoreButton.addEventListener("click", function(event){
        hideParagraph.style.display = "none";
        document.getElementById("initial").textContent="Highscores:" + initial +" <li>1</li><li>2</li>";
    }
)};*/




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
add a "go back" button and a clear highscores button.






*/