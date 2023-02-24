// #9FA6B2 Background colour  https://mdbootstrap.com/docs/standard/content-styles/colors/



let  counta = Math.floor(Math.random() * 5) + 1;

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


function myFunction() {
    document.getElementById('circlea').style.backgroundColor = document.getElementById('circleb').style.backgroundColor = document.getElementById('circlec').style.backgroundColor = document.getElementById('circled').style.backgroundColor = document.getElementById('circlee').style.backgroundColor = "gray";
}
setTimeout(myFunction, 5000);