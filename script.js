// Button Test
function consoleLog () {
	console.log ("button works");
}

// Display
var currentValue = document.getElementById("calcoutput");

// Numbers
var number1 = document.getElementById("calcbttn1");
var number2 = document.getElementById("calcbttn2");
var number3 = document.getElementById("calcbttn3");
var number4 = document.getElementById("calcbttn4");
var number5 = document.getElementById("calcbttn5");
var number6 = document.getElementById("calcbttn6");
var number7 = document.getElementById("calcbttn7");
var number8 = document.getElementById("calcbttn8");
var number9 = document.getElementById("calcbttn9");
var number0 = document.getElementById("calcbttn0");

// Symbols
var bttnAdd = document.getElementById("calcbttn+");
var bttnMin = document.getElementById("calcbttn-");
var bttnMult = document.getElementById("calcbttn*");
var bttnDiv = document.getElementById("calcbttn/");
var bttnDec = document.getElementById("calcbttnpd");

// Eval and Clear Functions
var bttnEq = document.getElementById("calcbttn=");
var bttnClr = document.getElementById("calcbttnclr");

// Numbers
function showNumber1 () {
	currentValue.innerHTML = currentValue.innerHTML + number1.value;
	}
function showNumber2 () {
	currentValue.innerHTML = currentValue.innerHTML + number2.value;
	}
function showNumber3 () {
	currentValue.innerHTML = currentValue.innerHTML + number3.value;
	}
function showNumber4 () {
	currentValue.innerHTML = currentValue.innerHTML + number4.value;
	}
function showNumber5 () {
	currentValue.innerHTML = currentValue.innerHTML + number5.value;
	}
function showNumber6 () {
	currentValue.innerHTML = currentValue.innerHTML + number6.value;
	}
function showNumber7 () {
	currentValue.innerHTML = currentValue.innerHTML + number7.value;
	}
function showNumber8 () {
	currentValue.innerHTML = currentValue.innerHTML + number8.value;
	}
function showNumber9 () {
	currentValue.innerHTML = currentValue.innerHTML + number9.value;
	}
function showNumber0 () {
	currentValue.innerHTML = currentValue.innerHTML + number0.value;
	}

// Symbols
function showbttnAdd () {
	currentValue.innerHTML = currentValue.innerHTML + bttnAdd.value;
	}
function showbttnMin () {
	currentValue.innerHTML = currentValue.innerHTML + bttnMin.value;
	}
function showbttnMult () {
	currentValue.innerHTML = currentValue.innerHTML + bttnMult.value;
	}
function showbttnDiv () {
	currentValue.innerHTML = currentValue.innerHTML + bttnDiv.value;
	}
function showbttnDec () {
	currentValue.innerHTML = currentValue.innerHTML + bttnDec.value;
	}

// Eval and Clear Functions
function doMath () {
	var final = eval(document.getElementById("calcoutput").innerHTML);
	document.getElementById("calcoutput").innerHTML = final;
	}
function clear () {
	currentValue.innerHTML = "";
	}

// Numbers
number1.addEventListener("click", showNumber1);
number2.addEventListener("click", showNumber2);
number3.addEventListener("click", showNumber3);
number4.addEventListener("click", showNumber4);
number5.addEventListener("click", showNumber5);
number6.addEventListener("click", showNumber6);
number7.addEventListener("click", showNumber7);
number8.addEventListener("click", showNumber8);
number9.addEventListener("click", showNumber9);
number0.addEventListener("click", showNumber0);

// Symbols
bttnAdd.addEventListener("click", showbttnAdd);
bttnMin.addEventListener("click", showbttnMin);
bttnMult.addEventListener("click", showbttnMult);
bttnDiv.addEventListener("click", showbttnDiv);
bttnDec.addEventListener("click", showbttnDec);

// Eval and Clear Functions
bttnEq.addEventListener("click", doMath);
bttnClr.addEventListener("click", clear);




