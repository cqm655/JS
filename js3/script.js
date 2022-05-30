/*
console.log("Metode pentru string");

let myName = "Tristan";
console.log(`Hello ${myName}`); // backticks ``

let str = "Eu sunt un string!";

// Metode de string
// length
let strLen = str.length;
console.log(strLen);

// []
console.log(str[str.length-1]);

// slice(start, finish)
let miniStr = str.slice(3, 7);
console.log(miniStr);

// toLowerCase()
console.log(str.toLowerCase());

// toUpperCase()
console.log(str.toUpperCase());

// charAt(number)
console.log(str.charAt(str.length-1));

// indexOf(string(char))
console.log(str.indexOf("s"));

// subString(start, finish)
console.log(str.substring(3, 7));
*/

/*
const date = new Date();
console.log(date);

let onlyDate = new Date(2021, 06, 17, 13, 50, 12);
console.log(onlyDate);

let date2 = new Date("July 17, 1110 09:03:07");
console.log(date2);
*/

// String -> Number
/*
let id = "1";
console.log(typeof id);
id = Number(id);
console.log(typeof id);

// Number -> String
let num = 5.123;
console.log(num);
num = num.toString();
console.log(num);
*/

/*
// Math Object
// Math.floor()
let num = 5.7;
console.log(Math.floor(num));

// Math.ceil()
console.log(Math.ceil(num));

// Math.round()
console.log(Math.round(num));
*/

/*
function randomNumber(maxNumber) {
	return Math.floor(Math.random() * maxNumber);
}

console.log(randomNumber(100));
*/

/*
function guessingGame(maxNumber){
	// generam un numar random
	const randomNumber = Math.floor(Math.random() * maxNumber);
	
	// citirea unui numar de la utilizator
	let userNumber = Number(prompt("Introduceti un numar: "));
	
	// functionalul jocului
	while (userNumber !== randomNumber) {
		userNumber = Number(prompt("Introduceti un numar din nou: "));
	}
	
	// finisarea jocului
	if (userNumber === randomNumber) {
		console.log("Ai castigat!");
		document.write("<h1>Ai castigat jocul!</h1>");
	}
}

guessingGame(11);
*/

// DOM
/*
let myHeading = document.querySelector("h1");
console.log(myHeading);

let myP = document.getElementById("myText");
console.log(myP);

let myH3s = document.getElementsByClassName("myH3");
console.log(myH3s);

myHeading.style.backgroundColor = "blue";
myHeading.style.color = "#fff";
myHeading.style.padding = "10px";

myP.style.fontFamily = "monospace";
myP.style.fontSize = "24px";
*/

/*
for (let i = 0; i < myH3s.length; i++) {
	myH3s[i].style.color = "red";
}
*/

/*
let colorArray = ["green", "blue", "brown"];
let fontArray = ["serif", "sans-serif", "monospace"];


for (let i = 0; i < myH3s.length; i++) {
	myH3s[i].style.color = colorArray[i];
	myH3s[i].style.fontFamily = fontArray[i];
	
	let randomNumber = Math.floor(Math.random() * 50);
	myH3s[i].style.fontSize = `${randomNumber}px`;
}
*/

// Events
let btn1 = document.getElementById("first-btn");
let btn1Text = document.getElementById("first-btn-text");

let btn2 = document.getElementById("second-btn");
let btn2Text = document.getElementById("second-btn-text");

let btn3 = document.getElementById("third-btn");
let btn3Text = document.getElementById("third-btn-text");

/*
	click
	dblclick
	mouseover
	mouseup
	mousedown
	mouseenter
	mouseleave
	mousemove
*/

btn1.addEventListener("click", () => {
	console.log("BTN1 clicked!");
	btn1Text.classList.toggle("light");
});

btn2.addEventListener("dblclick", () => {
	console.log("BTN2 double clicked!");
	btn2Text.classList.add("night");
	btn2Text.textContent = "Good night!";
});

btn3.addEventListener("mouseover", () => {
	console.log("Mouse over BTN3!");
	btn3Text.classList.remove("third-text");
	btn3Text.textContent = "Class deleted!";
});

