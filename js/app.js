// jsnack1
// L’utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore.

const firstNum = Number(prompt('Inserisci il primo numero.'));
const secondNum = Number(prompt('Inserisci il secondo numero.'));
if (isNaN(firstNum) || isNaN(secondNum)){
    console.log('dati inseriti non validi');
} else{
    let currentNum;
    if (firstNum > secondNum){
        currentNum = firstNum;
    } else {
        currentNum = secondNum;
    };
    console.log(`il numero più grande è ${currentNum}`);
};

// jsnack2
// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

const firstWord = prompt('Inserisci la prima parola.');
const secondWord = prompt('Inserisci la seconda parola.');
let currentWord;
if (firstWord.length > secondWord.length){
    currentWord = firstWord;
    console.log(`la parola più lunga è ${currentWord}`);
} else if (firstWord.length < secondWord.length){
    currentWord = secondWord;
    console.log(`la parola più lunga è ${currentWord}`);
} else{
    console.log(`le parole "${firstWord}" e "${secondWord}" hanno la stessa lunghezza`);
};

// jsnack3
// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
let sumNum = 0;
for(i = 0; i < 10; i++){
    const currentNum = Number(prompt(`inserisci il ${i}° numero`));
    if(isNaN(currentNum)){
        console.log('dati inseriti non validi');
        break
    };
    sumNum = sumNum + currentNum
}
console.log(`la somma dei numeri è ${sumNum}`);

// jsnack4
// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array

const array = [];
for (i= 0; i < 6; i++){
    const currentNum = Number(prompt(`inserisci il ${i}° numero`));
    if(currentNum % 2 !== 0){
        array.push(currentNum);
    };      
};
console.log(array);