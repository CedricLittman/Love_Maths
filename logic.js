// #9FA6B2 Background colour  https://mdbootstrap.com/docs/standard/content-styles/colors/

// function runGame() {
var endLoop = false;
var score = 0;
var start = 0;


// Do not allow guesses until colours have disappeared
function allowGuesses() {

}
// Make question buttons invisible while cicles visible
document.getElementById("displayButtonA").style.visibility = "hidden";
document.getElementById("displayButtonB").style.visibility = "hidden";
document.getElementById("displayButtonC").style.visibility = "hidden";
document.getElementById("displayButtonD").style.visibility = "hidden";
document.getElementById("displayButtonE").style.visibility = "hidden";


// Collect guesses for circle colours
let circlea = [0, 0, 0, 0, 0, 0];
let coloura = 0;

function checkButtona() {
    if (document.getElementById('a-red').checked) {
        circlea = [1, 0, 0, 0, 0, 0];
        coloura = 1;

    } else if (document.getElementById('a-white').checked) {
        circlea = [0, 1, 0, 0, 0, 0];
        coloura = 2;

    } else if (document.getElementById('a-yellow').checked) {
        circlea = [0, 0, 1, 0, 0, 0];
        coloura = 3;

    } else if (document.getElementById('a-black').checked) {
        circlea = [0, 0, 0, 1, 0, 0];
        coloura = 4;

    } else if (document.getElementById('a-green').checked) {
        circlea = [0, 0, 0, 0, 1, 0];
        coloura = 5;

    } else {
        circlea = [0, 0, 0, 0, 0, 1];
    }
}

let circleb = [0, 0, 0, 0, 0, 0];
let colourb = 0;

function checkButtonb() {
    if (document.getElementById('b-red').checked) {
        circleb = [1, 0, 0, 0, 0, 0];
        colourb = 1;

    } else if (document.getElementById('b-white').checked) {
        circleb = [0, 1, 0, 0, 0, 0];
        colourb = 2;

    } else if (document.getElementById('b-yellow').checked) {
        circleb = [0, 0, 1, 0, 0, 0];
        colourb = 3;

    } else if (document.getElementById('b-black').checked) {
        circleb = [0, 0, 0, 1, 0, 0];
        colourb = 4;

    } else if (document.getElementById('b-green').checked) {
        circleb = [0, 0, 0, 0, 1, 0];
        colourb = 5;

    } else {
        circleb = [0, 0, 0, 0, 0, 1];
    }
}

let circlec = [0, 0, 0, 0, 0, 0];
let colourc = 0;

function checkButtonc() {
    if (document.getElementById('c-red').checked) {
        circlec = [1, 0, 0, 0, 0, 0];
        colourc = 1;

    } else if (document.getElementById('c-white').checked) {
        circlec = [0, 1, 0, 0, 0, 0];
        colourc = 2;

    } else if (document.getElementById('c-yellow').checked) {
        circlec = [0, 0, 1, 0, 0, 0];
        colourc = 3;

    } else if (document.getElementById('c-black').checked) {
        circlec = [0, 0, 0, 1, 0, 0];
        colourc = 4;

    } else if (document.getElementById('c-green').checked) {
        circlec = [0, 0, 0, 0, 1, 0];
        colourc = 5;

    } else {
        circlec = [0, 0, 0, 0, 0, 1];
    }
}


let circled = [0, 0, 0, 0, 0, 0];
let colourd = 0;

function checkButtond() {
    if (document.getElementById('d-red').checked) {
        circled = [1, 0, 0, 0, 0, 0];
        colourd = 1;

    } else if (document.getElementById('d-white').checked) {
        circled = [0, 1, 0, 0, 0, 0];
        colourd = 2;

    } else if (document.getElementById('d-yellow').checked) {
        circled = [0, 0, 1, 0, 0, 0];
        colourd = 3;

    } else if (document.getElementById('d-black').checked) {
        circled = [0, 0, 0, 1, 0, 0];
        colourd = 4;

    } else if (document.getElementById('d-green').checked) {
        circled = [0, 0, 0, 0, 1, 0];
        colourd = 5;

    } else {
        circled = [0, 0, 0, 0, 0, 1];
    }
}

let circlee = [0, 0, 0, 0, 0, 0];
let coloure = 0;

function checkButtone() {
    if (document.getElementById('e-red').checked) {
        circlee = [1, 0, 0, 0, 0, 0];
        coloure = 1;

    } else if (document.getElementById('e-white').checked) {
        circlee = [0, 1, 0, 0, 0, 0];
        coloure = 2;

    } else if (document.getElementById('e-yellow').checked) {
        circlee = [0, 0, 1, 0, 0, 0];
        coloure = 3;

    } else if (document.getElementById('e-black').checked) {
        circlee = [0, 0, 0, 1, 0, 0];
        coloure = 4;

    } else if (document.getElementById('e-green').checked) {
        circlee = [0, 0, 0, 0, 1, 0];
        coloure = 5;

    } else {
        circlee = [0, 0, 0, 0, 0, 1];
        // document.getElementById("error").innerHTML = "You have not selected any season";
    }
}



// Generate random colours
let counta = Math.floor(Math.random() * 5) + 1;
if (counta < 2) {
    document.getElementById('circlea').style.backgroundColor = "red"
} else if (counta < 3) {
    document.getElementById('circlea').style.backgroundColor = "white";
} else if (counta < 4) {
    document.getElementById('circlea').style.backgroundColor = "yellow"
} else if (counta < 5) {
    document.getElementById('circlea').style.backgroundColor = "black"
} else {
    document.getElementById('circlea').style.backgroundColor = "green"
}


let countb = Math.floor(Math.random() * 5) + 1;
if (countb < 2) {
    document.getElementById('circleb').style.backgroundColor = "red"
} else if (countb < 3) {
    document.getElementById('circleb').style.backgroundColor = "white";
} else if (countb < 4) {
    document.getElementById('circleb').style.backgroundColor = "yellow"
} else if (countb < 5) {
    document.getElementById('circleb').style.backgroundColor = "black"
} else {
    document.getElementById('circleb').style.backgroundColor = "green"
}


let countc = Math.floor(Math.random() * 5) + 1;
if (countc < 2) {
    document.getElementById('circlec').style.backgroundColor = "red"
} else if (countc < 3) {
    document.getElementById('circlec').style.backgroundColor = "white";
} else if (countc < 4) {
    document.getElementById('circlec').style.backgroundColor = "yellow"
} else if (countc < 5) {
    document.getElementById('circlec').style.backgroundColor = "black"
} else {
    document.getElementById('circlec').style.backgroundColor = "green"
}


let countd = Math.floor(Math.random() * 5) + 1;
if (countd < 2) {
    document.getElementById('circled').style.backgroundColor = "red"
} else if (countd < 3) {
    document.getElementById('circled').style.backgroundColor = "white";
} else if (countd < 4) {
    document.getElementById('circled').style.backgroundColor = "yellow"
} else if (countd < 5) {
    document.getElementById('circled').style.backgroundColor = "black"
} else {
    document.getElementById('circled').style.backgroundColor = "green"
}


let counte = Math.floor(Math.random() * 5) + 1;
if (counte < 2) {
    document.getElementById('circlee').style.backgroundColor = "red"
} else if (counte < 3) {
    document.getElementById('circlee').style.backgroundColor = "white";
} else if (counte < 4) {
    document.getElementById('circlee').style.backgroundColor = "yellow"
} else if (counte < 5) {
    document.getElementById('circlee').style.backgroundColor = "black"
} else {
    document.getElementById('circlee').style.backgroundColor = "green"
}

let generatedColours = [counta, countb, countc, countd, counte];

// Compare generated colours with answers
// First check all colours guessed

function checkSubmitButton() {
    checkButtona();
    checkButtonb();
    checkButtonc();
    checkButtond();
    checkButtone();

    // Have all entries been completed?
    let completeAllEntries = 0;
    if (circlea[5] == 1) {
        completeAllEntries = 1;
    } else if (circleb[5] == 1) {
        completeAllEntries = 1;
    } else if (circlec[5] == 1) {
        completeAllEntries = 1;
    } else if (circled[5] == 1) {
        completeAllEntries = 1;
    } else if (circlee[5] == 1) {
        completeAllEntries = 1;
    } else completeAllEntries = 0;
    if (completeAllEntries == 1) {
        document.getElementById("allGuessesMade").innerHTML = "Try Again - You Must Guess ALL Colours!";
    } else completeAllEntries = 0;

    let evaluateGuesses =
        (coloura === counta) &&
        (colourb === countb) &&
        (colourc === countc) &&
        (colourd === countd) &&
        (coloure === counte);

    alert("Evaluation  of guesses is  " + evaluateGuesses);
    if (score == 0) {
        document.getElementById("score").innerHTML = score++
    } else if (evaluateGuesses == 0) {
        document.getElementById("allGuessesMade").innerHTML = "You LOSE!"
    } else if (evaluateGuesses == 1) {
        document.getElementById("score").innerHTML = score++;
    }

}


function greyCircles() {
    document.getElementById('circlea').style.backgroundColor = document.getElementById('circleb').style.backgroundColor = document.getElementById('circlec').style.backgroundColor = document.getElementById('circled').style.backgroundColor = document.getElementById('circlee').style.backgroundColor = "gray";
    document.getElementById("displayButtonA").style.visibility = "visible";
    document.getElementById("displayButtonB").style.visibility = "visible";
    document.getElementById("displayButtonC").style.visibility = "visible";
    document.getElementById("displayButtonD").style.visibility = "visible";
    document.getElementById("displayButtonE").style.visibility = "visible";
}
setTimeout(greyCircles, 5000);

start = 1;
//     if (evaluateGuesses == true) runGame();
// }

// runGame();