var scoreCounter = 0; //create a score counter variable set it to 0
var currentQuestion = 0; //current question starts from 0
var userAnswer = ""; // current answer the user picks set it to empty as it is still an unknown
var initialInput = document.querySelector("#initial");//select the id:initial and set it as the value of the variable
var timerElement = document.getElementById('timer'); //select the timer element by its id
var hideParagraph = document.getElementById("hide");
var start = document.getElementById("start-btn");
var submitButton = document.querySelector("#submitButton");
var timeLeft = 60;
start.addEventListener("click", startQuestion);

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
    optionA: "strings", 
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
    {question: "String values must be enclosed within _____ when being assigned to variables.",
    optionA: "commas", 
    optionB: "curly brackets", 
    optionC: "quotes", 
    optionD: "parentheses",
    answer: "C"
    },
]; 

function startTimer() {
    //var timeLeft = 60;      //the whole quiz is set for 60 seconds
    var timeInterval = setInterval(function(){
        if(timeLeft >1 && currentQuestion <5) {
            timerElement.textContent = timeLeft + ' seconds remaining';
            timeLeft--;
        }else if(timeLeft === 1 && currentQuestion <5) {
            timerElement.textContent = timeLeft + ' second remaining';
            timeLeft--;
        }else if(timeLeft >1 && currentQuestion > 5) {     //stop the timer when all question has been answered
            //clearInterval(timeInterval);
            displayMessage();
            console.log("hello");
        //}else{
            //timerElement.textContent = '';
            //clearInterval(timeInterval);
            //displayMessage();
        }
    
    }, 1000);
}


document.getElementById("start-btn").addEventListener("click", function(){
    startTimer();
});

function startQuestion(){
    start.style.display ="none";
    hideParagraph.style.display = "none";
    quizSection.style.display ="block";
    document.getElementById("questions").textContent = quiz[currentQuestion].question;
    userAnswer = quiz[currentQuestion].optionA ||quiz[currentQuestion].optionB ||quiz[currentQuestion].optionC ||quiz[currentQuestion].optionD;
    A.innerHTML = quiz[currentQuestion].optionA;
    B.innerHTML = quiz[currentQuestion].optionB;
    C.innerHTML = quiz[currentQuestion].optionC;
    D.innerHTML = quiz[currentQuestion].optionD;

    //document.getElementById("options").addEventListener("change",selectAnswer);
}
/*function stopTimer(){
    clearInterval(timeInterval);
}*/

function displayMessage(){
    //var input=document.createElement("input");
    //input.setAttribute("type", "text");
    //document.getElementByClass("result").textContent = "All done! Your score is " + scoreCounter + "." + "Enter your initial: " //<input type="text" name="initial" id="initial" placeholder="Enter your initial"/>"
    console.log("All done! Your score is " + scoreCounter + ". <br>Enter your initial: " + input);
    //should also allow user to input their initial
}

//examine whether the user select an option
function selectOption(){
    
    checkAnswer();
};
//compare answer to see if the users answer correctly
function checkAnswer(userAnswer){
    if (userAnswer==quiz[currentQuestion].answer && timeLeft >1){
        scoreCounter += 1;
        document.getElementById("answerResult").innerHTML = "Correct!"
        nextQuestion();
    }else if (userAnswer != quiz[currentQuestion].answer && timeLeft >1){
        document.getElementById("answerResult").innerHTML = "Incorrect!"
        timeLeft=timeLeft-5; //penalty by deducting 5s from the timer
        nextQuestion();
    }
}
//user advance to the next question
function nextQuestion(){
    if(currentQuestion<=quiz.length-1 && timeLeft>1){
        currentQuestion++;
        startQuestion(currentQuestion);
    }else if (currentQuestion>quiz.length-1 && timeLeft>1){
        displayMessage();
        console.log("hello");
        //stopTimer();
    } 
}

submitButton.addEventListener("click", function(event){
    event.preventDefault();
    var initial = document.querySelector("#initial");
    if (initial==="") {
        displayMessage("error", "Initial cannot be blank");
    }else{
        displayMessage("success", "Thank you!");
        localStorage.setItem("initial", initial);
        renderLastRegistered();
    }
});

function renderLastRegistered(){
    var initial = localStorage.getItem("initial");
    if (!initial) {
        return;
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
add a "go back" button and a clear highscores button.






*/