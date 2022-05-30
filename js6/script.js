// // console.log("Classes!");

// class Car {
//     type;

//     // definim propietati
//     constructor(brand, model, color) {
//         this.brand = brand;
//         this.model = model;
//         this.color = color;
//     }

//     // metode = functie
//     summary() {
//         console.log(`The object's properties are ${this.type} ${this.brand} ${this.model} ${this.color}`);
//     }
// }

// let car1 = new Car("Honda", "Accord", "Gray");
// // console.log(car1);
// car1.type = "Mouse";
// car1.summary();

// class Bus extends Car {
//     numberOfPassengers;

//     helloBus() {
//         console.log(`${this.brand} ${this.model} has ${this.numberOfPassengers} of seats`);
//     }
// }

// let bus1 = new Bus("MAN", "Long Boi", "Blue");
// bus1.numberOfPassengers = 50;
// // console.log(bus1);
// bus1.summary();
// bus1.helloBus();

// const arr = [];
// arr.push(car1);
// arr.push(bus1);
// // console.log(arr);
// arr.forEach((obj) => {
//     console.log(obj);
// })





// - Definiți o interfață (obiect) de tip User, cu proprietățile id, nume, prenume, email, balance și metodele getUser, updateUser.
// - Definiți o listă Users cu 3 obiecte statice de tip User.
// - Implementați interfața User definită mai sus, într-o clasă cu numele Client, care să conțină suplimentar și metoda addBalance,
// care ar primi ca parametru id user și valoarea numerică amount și ar face următorii pași:
// a) caută userul in lista Users definită mai sus după proprietatea id, daca nu găsește returnează null.
// b) dacă găsește , adaugă valoarea din amount la valoare balance al acelui obiect.

// class User {
//     // proprietati
//     constructor(id, nume, prenume, email, balance) {
//         this.id = id;
//         this.nume = nume;
//         this.prenume = prenume;
//         this.email = email;
//         this.balance = balance;
//     }

//     // metode
//     static getUser() {
//         let str = `${this.nume} ${this.prenume} ${this.email} ${this.balance}`;
//         return str;
//     }
//     updateUser(email) {
//         this.email = email;
//     }
// }

// let user1 = new User(1, "Ana-Maria", "Kalin", "anakalin@gmail.com", 10.25);
// let user2 = new User(2, "Marin", "Lintul", "marinlin@gmail.com", 150.87123);
// let user3 = new User(3, "John", "Mayers", "johnmayers@gmail.com", 781235.3154);

// const users = [user1, user2, user3];
// // users.push(user1);
// // users.push(user2);
// // users.push(user3);

// // console.log(users);

// class Client extends User {
//     addBalance(id, amount) {
//         this.balance += amount;
//     }
// }

// let client1 = new Client(1, "Ana-Maria", "Kalin", "anakalin@gmail.com", 10.25);
// let client2 = new Client(2, "Marin", "Lintul", "marinlin@gmail.com", -150.87123);
// let client3 = new Client(3, "John", "Mayers", "johnmayers@gmail.com", 781235.3154);

// const clients = [client1, client2, client3];

// let id = 3;
// clients.forEach(client => {
//     // console.log(client);
//     if (client['id'] == id) {
//         client.addBalance(id, 100000);
//         console.log(client['balance']);
//     } else {
//         console.log(null);
//     }
// })

// // console.log(clients);

// const okClients = clients.filter(client => {
//     return client['balance'] > 0;
// })

// console.log(okClients);

// const sumOfValue = clients.reduce((sum, client) => {
//     return sum += client['balance'];
// }, 0)

// console.log(sumOfValue);

// function changeColor(number, htmlElement) {
//     if (number > 0) {
//         htmlElement.style.color = "green";
//     } else {
//         htmlElement.style.color = "red";
//     }
// }

// const addBtn = document.getElementById("add");
// const value = document.querySelector("h1");
// const subBtn = document.getElementById("subtract");

// addBtn.addEventListener("click", () => {
//     let numberValue = value.textContent;
//     numberValue = Number(numberValue);
//     numberValue += 1;
//     value.textContent = numberValue;
//     console.log(numberValue);
//     changeColor(value.textContent, value);
// })

// subBtn.addEventListener("click", () => {
//     let numberValue = value.textContent;
//     numberValue = Number(numberValue);
//     numberValue -= 1;
//     value.textContent = numberValue;
//     console.log(numberValue);
//     changeColor(value.textContent, value);
// })

// let str = "2+2-10+1000";
// console.log(eval(str));

let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map(button => {
    button.addEventListener("click", (event) => {
        // console.log("clicked");
        // console.log(button.textContent);
        // console.log(event.target);
        // console.log(event.target.innerText);

        switch (event.target.innerText) {
            case 'C':
                display.innerText = "";
                break;
            case '←':
                if (display.innerText) {
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;
            case '=':
                try {
                    display.innerHTML = eval(display.innerText);
                } catch {
                    display.innerHTML = 'Error!';
                }
                break;
            default:
                display.innerText += event.target.innerText;
        }
    })
})

let str = "Ion are mere.";
str = str.slice(1);
console.log(str);
// console.log(str.splice(3, 7));