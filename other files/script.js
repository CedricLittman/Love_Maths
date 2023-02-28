// This function does all the housekeeping before 
// the game starts
// function gameSetup() {
//     // Setup the listeners for the 3 buttons

//     document.getElementById("btn-plus").addEventListener("click", additionQuestion);
//     document.getElementById("btn-minus").addEventListener("click", subtractionQuestion);
//     document.getElementById("btn-submit").addEventListener("click", submitAnswer);

// }

// function gameLoop() {

// }

// function additionQuestion() {

//     let a = Math.floor(Math.random() * 20) + 1;
//     let b = Math.floor(Math.random() * 20) + 1;

//     let question = `${a} + ${b}`;
//     document.getElementById('question-holder').innerText = question;

// }

// function subtractionQuestion() {
//     let a = Math.floor(Math.random() * 20) + 1;
//     a = (a == 1) ? 2 : a;


//     let b = Math.floor(Math.random() * 20) + 1;

//     while (b > a) {
//         b = Math.floor(Math.random() * 20) + 1;
//     }

//     let question = `${a} - ${b}`;
//     document.getElementById('question-holder').innerText = question;
// }

// function submitAnswer() {
//     let question = document.getElementById('question-holder').innerText;
//     let answer = document.getElementById('answer-holder').value;

//     if (question.includes("+")) {
//         let operands = question.split("+");
//         let a = operands[0];
//         let b = operands[1];
//         let isAnswerCorrect = (parseInt(a) + parseInt(b)) == answer;

//         if (isAnswerCorrect) {
//             alert("Well done!");
//             increaseCorrect()
//         } else {
//             alert("Daft dumbell!");
//             increaseWrong()
//         }
//     } else if (question.includes("-")) {
//         let operands = question.split("-");
//         let a = operands[0];
//         let b = operands[1];
//         let isAnswerCorrect = (parseInt(a) - parseInt(b)) == answer;

//         if (isAnswerCorrect) {
//             alert("Well done!!!");
//             increaseCorrect()
//         } else {
//             alert("Sorry daft so and so");
//             increaseWrong()
//         }
//     }
// }

// function increaseCorrect() {
//     let correct = document.getElementById("correct-score").innerText;
//     correct++;
//     document.getElementById("correct-score").innerText = correct;
// }

// function increaseWrong() {
//     let wrong = document.getElementById("wrong-score").innerText;
//     wrong++;
//     document.getElementById("wrong-score").innerText = wrong;
// }

// // Main program
// gameSetup();
// gameLoop();

// [16:19] Richard Malhotra
    
// This function does all the housekeeping before 
// the game starts
// This function does all the housekeeping before 
// the game starts
function gameLaunch() {
    // Setup the listeners for the 3 buttons
    document.getElementById("btn-plus").addEventListener("click", additionQuestion);
    document.getElementById("btn-minus").addEventListener("click", subtractionQuestion);
    document.getElementById("btn-submit").addEventListener("click", submitAnswer);
    
    additionQuestion();
   }
    
   function additionQuestion() {
    
    let a = Math.floor(Math.random() * 20) + 1;
    let b = Math.floor(Math.random() * 20) + 1;
    
    let question = `${a} + ${b}`;
    document.getElementById('question-holder').innerText = question;
    
    setStateOfQuestionButtons(0);
    setStateOfSubmitButton(1);
    
    
   }
    
   function subtractionQuestion() {
    let a = Math.floor(Math.random() * 20) + 1;
    let b = Math.floor(Math.random() * 20) + 1;
    
    while (b > a) {
    b = Math.floor(Math.random() * 20) + 1;
    }
    
    let question = `${a} - ${b}`;
    document.getElementById('question-holder').innerText = question;
    
    setStateOfQuestionButtons(0);
    setStateOfSubmitButton(1);
    
   }
    
   function submitAnswer() {
    let question = document.getElementById("question-holder").innerText;
    let answer = document.getElementById("answer-holder").value;
    
    if (question.includes("+")) {
    let operands = question.split("+");
    let a = operands[0];
    let b = operands[1];
    let isAnswerCorrect = (parseInt(a) + parseInt(b)) == answer;
    
    if (isAnswerCorrect) {
    alert("Well done!!!!");
    increaseCorrect()
    } else {
    alert("Sorry stupid git");
    increaseWrong()
    }
    
    } else if (question.includes("-")) {
    
    let operands = question.split("-");
    let a = operands[0];
    let b = operands[1];
    let isAnswerCorrect = (parseInt(a) - parseInt(b)) == answer;
    
    if (isAnswerCorrect) {
    alert("Well done!!!!");
    increaseCorrect()
    } else {
    alert("Sorry stupid git");
    increaseWrong()
    }
    }
    
    setStateOfSubmitButton(0);
    setStateOfQuestionButtons(1);
    
   }
    
   function increaseCorrect() {
    let correct = document.getElementById("correct-score").innerText;
    correct++;
    document.getElementById("correct-score").innerText = correct;
   }
    
   function increaseWrong() {
    let wrong = document.getElementById("wrong-score").innerText;
    wrong++;
    document.getElementById("wrong-score").innerText = wrong;
   }
    
   function setStateOfQuestionButtons (state) {
    plusButton = document.getElementById('btn-plus');
    minusButton = document.getElementById('btn-minus');
    
    if (state==1) {
    plusButton.disabled = false;
    minusButton.disabled = false;
    } else {
    plusButton.disabled = true;
    minusButton.disabled = true;
    }
   }
    
   function setStateOfSubmitButton (state) {
    submitButton = document.getElementById('btn-submit');
    if (state==1) {
    submitButton.disabled = false
    } else {
    submitButton.disabled = true
    }
   }
    
   function setAnswerHolder (state) {
    submitButton = document.getElementById('btn-submit');
    if (state==1) {
    submitButton.disabled = false
    } else {
    submitButton.disabled = true
    }
   }
    
   // Main program
   gameLaunch();
