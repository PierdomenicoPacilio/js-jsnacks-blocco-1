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
    currentWord = firstWord
    console.log(`la parola più lunga è ${currentWord}`);
} else if (firstWord.length < secondWord.length){
    currentWord = secondWord
    console.log(`la parola più lunga è ${currentWord}`);
} else{
    console.log(`le parole "${firstWord}" e "${secondWord}" hanno la stessa lunghezza`);
}