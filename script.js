var scoreCounter = 0; //create a score counter variable set it to 0
var currentQuestion = 0; //current question 
var userAnswer = ""; // current answer the user picks
// select the HTML timer element with a countdown function
var timerElement = document.getElementById('timer');

function startTimer() {
    var timeLeft = 60;      //the whole quiz is set for 60 seconds
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
            displayMessage();
            
        }
    }, 1000);
}
//timer();

//create object's properties and set up a quiz questions array
var quiz = [
    {question: "A very useful tool used during development and debugging for printing content to the debugger is: ",
    optionA: "JavaScript", 
    optionB: "terminal/bash", 
    optionC: "for loops", 
    optionD: "console.log",
    answer: "D"
    },
    {question: "Commonly used data types DO NOT include: ",
    optionA: "A. strings", 
    optionB: "booleans", 
    optionC: "alerts", 
    optionD: "numbers",
    answer: "C"
    },
    {question: "The condition in an if / else statement is enclosed within _______. ",
    optionA: "quotes", 
    optionB: "curly brackets", 
    optionC: "parentheses", 
    optionD: "square brackets",
    answer: "B"
    },
    {question: "Arrays in JavaScript can be used to store _______.",
    optionA: "numbers and strings", 
    optionB: "other arrays", 
    optionC: "booleans", 
    optionD: "all of the above",
    answer: "D"
    },
    {quesiton: "String values must be enclosed within _____ when being assigned to variables.",
    optionA: "commas", 
    optionB: "curly brackets", 
    optionC: "quotes", 
    optionD: "parentheses",
    answer: "C"
    },
];

//start the quiz when user click on the start quiz button
/*function startQuiz(){
    
    document.getElementById("start-btn").addEventListener("click", selectOption());
    startQuestion(currentQuestion);    //start asking the first question
}*/
var hideParagraph = document.getElementById("hide");
var start = document.getElementById("start-btn");
start.addEventListener("click", startQuestion);

function selectAnswer(event){
    currentAnswer = event.target.value;
}
function startQuestion(currentQuestion){
    start.style.display ="none";
    hideParagraph.style.display = "none";
    startTimer();    //start the timer
    userAnswer = quiz[currentQuestion].options[0];
    document.getElementById("question").textContent = quiz[currentQuestion].question;
    var options ="";
    var i=0;
    while(i<quiz[currentQuestion].options.length){
        options += quiz[currentQuestion].options[i];
        i++;
    }
    
    document.getElementById("options").addEventListener("change",selectAnswer);
}

function displayMessage(){
    var input=document.createElement("input");
    input.setAttribute("type", "text");
    console.log("All done! Your score is " + scoreCounter + ". <br>Enter your initial: " + input);
    //should also allow user to input their initial
}

//examine whether the user select an option
function selectOption(){
    
    checkAnswer();
};
//compare answer to see if the users answer correctly
function checkAnswer(){
    if (userAnswer==quiz[currentQuestion].options[quiz[currentQuestion].answer]){
        scoreCounter += 1;
        console.log("correct!")
        nextQuestion();
    }else{
        console.log("Incorrect!")
        //penalty by deducting 5s from the timer
        nextQuestion();
    }
}
//user advance to the next question
function nextQuestion(){
    if(currentQuestion<quiz.length-1){
        currentQuestion++;
        startQuestion(currentQuestion);
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