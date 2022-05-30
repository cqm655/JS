let btn1 = document.getElementById("first-button");
let btn1Text = document.getElementById("first-button-text");
let btn2 = document.getElementById("second-button");
let btn2Text = document.getElementById("second-button-text");
let btn3 = document.getElementById("third-button");
let btn4 = document.getElementById("fourth-button");
let btn5 = document.getElementById("five-button");


//////Sarcina 1, prin click sa se afiseze promt in care introducem numele 
btn1.addEventListener("click", () => {
    console.log("introduceti numele");
    let numele = String(prompt("Introduceti numele"));
    btn1Text.textContent = ("= " + numele);
})
/////Sarcina 2, prin dbclick sa se faca un random 
btn2.addEventListener("dblclick", () => {
    let randomNumber = Math.floor(Math.random()*11);
    console.log(randomNumber);
    btn2Text.textContent = ("= " + randomNumber);
})
/////Sarcina 3 prin mouse over sa se schimbe culoarea la background in rosu
btn3.addEventListener("mouseover", () =>{
       btn3.style.backgroundColor = 'red'; 
    
})
btn3.addEventListener("mouseleave", () =>{
    btn3.style.backgroundColor = 'white'; 
 
})
////Sarcina 4 la click sa se mareasca textul din buttonul 3, cum de facut inapoi sa fie cum era textul
btn4.addEventListener("click", () => {
    btn3.style.fontSize = '24px';
})
////Sarcina 5 sa se adauge un text aditional, sa se adauge o clasa la dorinta
btn5.addEventListener("click", () => {
    
})