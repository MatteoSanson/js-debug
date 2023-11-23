/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
// for (let i = 0; i > 5; i++) {
//     console.log(i);
// }

// 1) il codice inizializza un ciclo for dove viene dichiarata una variabile "i" (l'indice) a 0, ciclo quando il mio indice "i" è maggiore a 5 (la mia condizione), con un avanzamento di 1 sull'indice (incremento). Ad ogni ciclo stampo in console il valore di "i". 
// 2) la sintassi è corretta.
// 3) c'è un errore logico nella condizione del ciclo in quanto inizializziamo la variabile i a 0, poniamo la condizione che i > 5 che non è vera quindi non entrerà mai nel ciclo.
// la soluzione corretta è la seguente:
// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// ESERCIZIO 2
// function addIfEven(num) {
//     if (num % 2 = 0) {
//         return num + 5;
//     }
//     return num;
// }
// il codice inizializza una funzione addIfEven con un argomento (num) dove nel caso in cui num è divisibile per 2 senza lasciare resto mi restituisce num + 5, altrimenti mi restituisce solo num.
// 2) e 3) il codice così scritto nella condizione if utilizza un solo simbolo d'uguaglianza che equivale ad assegnare un valore, invece noi vogliamo fare un confronto e dobbiamo utilizzare "===". la funzione dovrebbe essere cosi scritta:
// function addIfEven(num) {
//     if (num % 2 === 0) {
//         return num + 5;
//     }
//     return num;
// }


// ESERCIZIO 3
// function loopToFive() {
//     for (let i = 0, i < 5, i++) {
//         console.log(i);
//     }
// }
// 1) il codice dovrebbe inizializzare una funzione loopToFive all'interno della quale c'è un ciclo for che per ogni elemento "i" (con "i" che comincia da 0, fino a quando "i" < 5, con un incremento di "i" di 1) stampa in console il suo valore.
// 2) c'è un errore di sintassi in quanto le condizioni all'interno del ciclo for dovrebbero essere separate da punto e virgola
// e non dalle sole virgole.
// 3) la logica è corretta salvo l'errore di sintassi.


// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
// function displayEvenNumbers() {
//     let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
//     let evenNumbers = [];
//     for (let i = 0; i < numbers.length - 1; i++;) {
//         if (numbers % 2 = 0); {
//             evenNumbers.push(i);
//         }
//         return evenNumbers;
//     }
// }
// displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]

// 1) il codice dovrebbe inizializzare una funzione displayEvenNumbers all'interno della quale dichiariamo due variabili contenenti un array di numeri (numbers) e un array vuoto (evenNumbers). sempre al suo interno con un ciclo for scorriamo all'interno dell'array numbers dove, se il numero è pari lo pushamo nell'array evenNumbers.
// 2) 3) c'è un punto e virgola dopo l'incremento di "i" all'interno del for.
// all'interno della condizione if dovrebbe essere numbers[i]. 
// all'interno della condizione if è da inserire il confronto di uguaglianza "===".
// c'è un punto e virgola dopo la condizione if prima della parentesi grafa
// se if è vero dovrebbe essere evenNumbers.push(numbers[i])
////// forse e dico forse aggiungo un console.lof di evenNUmbers per visualizzare qualcosa
// il comando return della funzione è all'interno del ciclo for, dovrebbe essere inserito dopo


function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
        }
    }

    console.log(evenNumbers);
    return evenNumbers;
}

displayEvenNumbers();