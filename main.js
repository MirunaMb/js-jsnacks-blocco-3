const firstNumber = parseInt(prompt("Inserisci un numero"));

const secondNumber = parseInt(prompt("Inserisci un numero"));
 
const randomNumber = Math.floor(Math.random () * firstNumber)+secondNumber;

console.log (randomNumber);