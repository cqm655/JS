/*
const car = {
	brand: "Honda",
	model: "Accord",
	prodYear: 2016,
	color: "gray"
};

console.log(car.brand, car.model, car.prodYear, car.color);

const person = {
	nume: "Vitalie",
	familie: "Mandru",
	age: 43,
	masini: ["BMW X2", "Toyota Auris", "Lincoln MKZ"]
};

console.log(person.nume, person.masini[2]);

const reseller = {
	nume: "Andrei",
	familie: "Hancu",
	areMajorat: true,
	stock: [
		["iPhone 12 Mini", "iPhone 12 Pro", 
			["iPhone 12 Pro Max Black", "iPhone 12 Pro Max White"]
		],
	[],[]]
};

console.log(reseller.stock[0][2][1]);

const car = {
	brand: "Mercedes-Benz",
	model: "E63s",
	prodYear: 2020,
	HP: 640,
	numOfOwners: 3,
	accident: true,
	summary: function() {
		return `Brand: ${this.brand} Model: ${this.model} Accidente: ${this.accident}`;
	}
};

console.log(car.summary());

const country = {
	name: "Moldova",
	populatie: 2000000
}

// Adaugam proprietate noua
country.code = "MD";

country.name = "Romania";

country.populatie += 100000001;

console.log(country);

delete country.code;

console.log(country);

Object.assign(country, {"imn": "Limba Noastra", "limba":"Romana"});

console.log(country);
*/

// DOM

// document.querySelector("h3").style.color = "red";

// document.querySelector("button").addEventListener("dblclick", function() {
//	document.querySelector("h3").style.color = "red";
// })

/*
document.getElementById("text").style.color = "pink";

console.log(document.getElementsByClassName("headings"));

console.log(document.querySelector("button"));
*/

/*
document.getElementById("main-text").textContent = "Hello friend";
document.getElementById("my-text").innerHTML = "Hey <strong>Welcome to my <em>page!</em></strong>";
*/

console.log(this);

let name = prompt("Introduceti numele: ");
console.log(name);
document.getElementById("name").textContent = name;

document.getElementById("mode").addEventListener("click", darkMode);
document.getElementById("mode2").addEventListener("click", function() {
	console.log(this);
});


function darkMode() {
	console.log(this);
	if (document.body.classList.contains("white-mode")) {
		document.body.classList.remove("white-mode");
		document.body.classList.add("dark-mode");
		this.textContent = "Turn White Mode";
	} else if (document.body.classList.contains("dark-mode")) {
		document.body.classList.remove("dark-mode");
		document.body.classList.add("white-mode");
		this.textContent = "Turn Dark Mode";
	}
}