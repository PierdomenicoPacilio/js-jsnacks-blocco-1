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