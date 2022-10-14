//Chiedere all’utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma.

const word = prompt("Dimmi una parola");

let defineResult = wordDraw(word);

console.log(defineResult, "fuori la function");
alert(`La tua parola ${word} ${defineResult}`);




function wordDraw(singleWord) {
    let wordDivide = singleWord.split('');
    wordDivide = wordDivide.reverse();
    console.log(wordDivide);
    let wordInvert = wordDivide.join('');   
    console.log(wordInvert);

    let result = "";
    // Se la parola normale e quella invertita corrispondono
    if (singleWord === wordInvert){
        result = "è palindroma"
    } else {
        result = "non è palindroma"
    }
    console.log(result, "dentro la function");
    return result;
}
