/* *Pari e Dispari**
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */


//chiedere all'utente un numero pari o dispari da 1 a 5
//generiamo un numero random da 1 a 5 con una FUNCTION
//facciamo la somma dei due numeri
//stabiliamo se la somma dei due numeri è Pari o Dispari con una FUNCTION

//Dichiariamo il vincitore...

/* _________________ */


let userChoice = String(prompt("Dimmi se scegli tra pari o dispari"));
const userChoiceChecked = OddOrEvenValidatorChoice(userChoice);

let userNumber = parseInt(prompt("Dimmi un numero da 1 a 5"));
let userNumberChecked = numberValidator1to5(userNumber);
// Genero un numero random (da 1 a 5) per il computer (usando una funzione).
const cpuNumber = randomNumber1to5();

// Sommiamo i due numeri
const sum = cpuNumber + userNumberChecked;
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
const result = OddEven(sum);
console.log(result);
// Dichiariamo chi ha vinto.
let msg = "";

if (result === userChoiceChecked){
    msg = `Hai vinto! Numero finale ${sum}`;
} else {
    msg = `Hai perso! Numero finale ${sum}`;
}
alert(msg);





// FUNCTIONS
//Funzione per generare un numero random
/**
 * Description
 * @param {number} da1a5 minimo della funzione 1 e massimo della funzione 5
 * @returns {number} :restituisce un numero randomico da 1 a 5
 */
function randomNumber1to5 () {
    const randomNumber = Math.floor(Math.random() * 5) + 1;
    console.log(randomNumber, "numero random");
    return randomNumber;
}

// Analizzare se la somma è pari o dispari...
/**
 * Description
 * @param {number} number numero da analizzare;
 * @returns {string} :ouput se pari o dispari
 */
function OddEven(number) {
    let output;

    if (number % 2 === 0) {
        output = "pari";
    } else {
        output = "dispari";
    }
    console.log(output, "dentro");
    return output;
}



// Controllo della scelta tra pari e dispari..
/**
 * Description
 * @param {string} checkPariDispari stringa che può assumere solo valore: "pari" o "dispari"
 * @returns {string} output stringa verificata
 */
function OddOrEvenValidatorChoice(checkPariDispari) {
    
    const pari = "pari";
    const dispari = "dispari";

    while (checkPariDispari !== pari && checkPariDispari !== dispari) {
        checkPariDispari = prompt("Non hai scelto pari o dispari. Perfavore riprova");
        }

    const output = checkPariDispari; 
    
    return output;
}

// Controllo valore pari o dispari...
/**
 * Description
 * @param {number} checkNumber valore input da verificare SE numero e SE tra 1 e 5
 * @returns {number} output verificato numero tra 1 e 5
 */
function numberValidator1to5(checkNum) {
    while (checkNum % 1 !== 0 || (checkNum < 1 || checkNum > 5)){
        checkNum = parseInt(prompt("Non hai inserito un numero da 1 a 5. Perfavore riprova"))
    }

    const output = checkNum;

    return output;
}















