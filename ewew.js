// #9FA6B2 Background colour  https://mdbootstrap.com/docs/standard/content-styles/colors/


// Collect guesses for circle colours
var coloura = 0;
var colourb = 0;
var colourc = 0;
var colourd = 0;
var coloure = 0;

var counta;
var countb;
var countc;
var countd;
var counte;

// Have all entries been completed?
var completeAllEntries = 0;


function checkButtona() {
    if (document.getElementById('a-red').checked) {
        coloura = 1;
    } else if (document.getElementById('a-white').checked) {
        coloura = 2;
    } else if (document.getElementById('a-yellow').checked) {
        coloura = 3;
    } else if (document.getElementById('a-black').checked) {
        coloura = 4;
    } else if (document.getElementById('a-green').checked) {
        coloura = 5;
    } else {
        coloura = 6;
    }
}

function checkButtonb() {
    if (document.getElementById('b-red').checked) {
        colourb = 1;
    } else if (document.getElementById('b-white').checked) {
        colourb = 2;
    } else if (document.getElementById('b-yellow').checked) {
        colourb = 3;
    } else if (document.getElementById('b-black').checked) {
        colourb = 4;
    } else if (document.getElementById('b-green').checked) {
        colourb = 5;
    } else {
        colourb = 6;
    }
}

function checkButtonc() {
    if (document.getElementById('c-red').checked) {
        colourc = 1;
    } else if (document.getElementById('c-white').checked) {
        colourc = 2;
    } else if (document.getElementById('c-yellow').checked) {
        colourc = 3;
    } else if (document.getElementById('c-black').checked) {
        colourc = 4;
    } else if (document.getElementById('c-green').checked) {
        colourc = 5;
    } else {
        colourc = 6;
    }
}

function checkButtond() {
    if (document.getElementById('d-red').checked) {
        colourd = 1;
    } else if (document.getElementById('d-white').checked) {
        colourd = 2;
    } else if (document.getElementById('d-yellow').checked) {
        colourd = 3;
    } else if (document.getElementById('d-black').checked) {
        colourd = 4;
    } else if (document.getElementById('d-green').checked) {
        colourd = 5;
    } else {
        colourd = 6;
    }
}

function checkButtone() {
    if (document.getElementById('e-red').checked) {
        coloure = 1;
    } else if (document.getElementById('e-white').checked) {
        coloure = 2;
    } else if (document.getElementById('e-yellow').checked) {
        coloure = 3;
    } else if (document.getElementById('e-black').checked) {
        coloure = 4;
    } else if (document.getElementById('e-green').checked) {
        coloure = 5;
    } else {
        coloure = 6;
    }
}


// Generate random colours
function generateColour() {
    counta = Math.floor(Math.random() * 5) + 1;

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

    countb = Math.floor(Math.random() * 5) + 1;
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

    countc = Math.floor(Math.random() * 5) + 1;
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

    countd = Math.floor(Math.random() * 5) + 1;
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

    counte = Math.floor(Math.random() * 5) + 1;
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
}


function checkSubmitButton() {
    checkButtona();
    checkButtonb();
    checkButtonc();
    checkButtond();
    checkButtone();
    allGuessesMade()
}





function allGuessesMade() {
    if (coloura == 6) {
        completeAllEntries = 1;
    } else if (colourb == 6) {
        completeAllEntries = 1;
    } else if (colourc == 6) {
        completeAllEntries = 1;
    } else if (colourd == 6) {
        completeAllEntries = 1;
    } else if (coloure == 6) {
        completeAllEntries = 1;
    } else {
        completeAllEntries = 0;
    }

    if (completeAllEntries == 1) {
        document.getElementById("allGuessesMade").innerHTML = "Try Again You Must Guess All Colours!";
    } else completeAllEntries = 0;
}


function checkAllGuesses() {
    // Now compare guesses with circle colours

    let evaluateGuesses =
        (coloura === counta) &&
        (colourb === countb) &&
        (colourc === countc) &&
        (colourd === countd) &&
        (coloure === counte);

    return evaluateGuesses

}




// main program

generateColour();

wait(5000);



document.getElementById('circlea').style.backgroundColor = document.getElementById('circleb').style.backgroundColor = document.getElementById('circlec').style.backgroundColor = document.getElementById('circled').style.backgroundColor = document.getElementById('circlee').style.backgroundColor = "gray";

let success = false;

checkAllGuesses(success);

if (success) {
    alert('Well done - you guessed correctly');
    location.reload();
} else {
    alert('Wrong !!!!!!!');
    location.reload();
}