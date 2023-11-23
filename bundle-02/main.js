/*******************************************************************************
​
    Per questo esercizio, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/


// ESERCIZIO 1
// function checkAge() {
//     const myAge = 32;
//     const message = '';

//     if (myAge < 18) {
//         message = `Sei troppo giovane! Hai ${myAge} anni!`;
//     } else {
//         message = 'Hai più di 18 anni!';
//     }
// }
// checkAge();

// 1) viene inizializzata una funzione, al suo interno vengono dichiarate due variabili, myAge un numero e message una stringa vuota. poi c'è una condizione se myAge < 18 allora si riassegna il valore di message, altrimenti message avrà un altro valore. infine la funzione viene richiamata.
// 2) la sintassi è corretta 
// 3) la variabile message viene inizializzata come const ma poi viene riassegnata il che è un errore, bisgona inizializzarla come let.
// al termine delle condizioni ho fatto un console.log di message in modo da poter visualizzare in console al richiamo della funzione.

// function checkAge() {
//     const myAge = 32;
//     let message = '';

//     if (myAge < 18) {
//         message = `Sei troppo giovane! Hai ${myAge} anni!`;
//     } else {
//         message = 'Hai più di 18 anni!';
//     }
//     console.log(message);
// }
// checkAge();


// ESERCIZIO 2
// function printColorsNumber() {
//     const colors = ['blue', 'red', 'yellow', 'green', 'black'];
//     console.log(`Nella mia palette ci sono ${colors.lenght} colori!`);
// }
// printColorsNumber();

// 1) abbiamo una funzione printColorsNumber, al suo interno stabiliamo una variabile con un array di stringhe. facciamo un console.log con un messaggio tra backtick per mostrare anche il valore della proprietà della variabile interessata.
// 2) c'è un errore di sintassi perchè bisogna scrivere .length e non .lenght 
// 3) non ci sono errori logici
// codice corretto
// function printColorsNumber() {
//     const colors = ['blue', 'red', 'yellow', 'green', 'black'];
//     console.log(`Nella mia palette ci sono ${colors.length} colori!`);
// }
// printColorsNumber();


// ESERCIZIO 3
// function addNumbers() {
//     const userNumber = prompt('Inserisci un numero');
//     const total = userNumber + 12;

//     console.log(`Il risultato finale è ${total}`);
// }
// addNumbers();
// 1) abbiamo una funzione addNumbers, al suo interno abbiamo due variabili, stampa in console un risultato e infine viene richiamata la funzione.
// 2)non ci sono errori di sintassi
// 3) c'è un errore logico perchè il prompt dove richiedo un numero per come è scritto mi restituirà sempre una stringa, quindi in total farò una concatenazione di stringa e numero. come soluzione posso convernire il "numero stringa" del prompt in numero cosi bella variabile total verrà sommato a 12.
// codice corretto
// function addNumbers() {
//     const userNumber = parseInt(prompt('Inserisci un numero'));
//     const total = userNumber + 12;

//     console.log(`Il risultato finale è ${total}`);
// }
// addNumbers();


// ESERCIZIO 4
// function checkAccess() {
//     const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
//     const userEmail = prompt('Inserisci il tuo indirizzo email');

//     let grantAccess = 'false';

//     if (addresses.includes(userEmail)) {
//         grantAccess = 'true';
//     }

//     if (grantAccess === true) {
//         console.log('Accesso consentito!');
//     } else {
//         console.log('Accesso negato!');
//     }
// }
// checkAccess();

// 1) abbiamo una funzione checkAccess, al suo interno abbiamo una variabile di array con una lista di indirizzi email stringa, una variabile prompt che salva il dato richiesto all'utente, una variabile grantAccess con un valore stringa. a seguito una condizione, se l'array di indirizzi include l'indirizzo inserito dall'utente riassegnamo la variabile grantAcces in true, a seguito un'altra condizione che se grantAccess è true l'accesso è consentito altrimenti negato
// 2) non ci sono errori di sintassi.
// 3) ci sono errori di logica, i valori false e true sono rappresentati come stringa quanto dovrebbero essere valori booleani, quindi scritti senza virgolette.
// possiamo anche raggruppare i primi due if in uno solo 
// codice corretto
function checkAccess() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = false;

    if (addresses.includes(userEmail)) {
        grantAccess = true;
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
checkAccess();


// ESERCIZIO 5 (suggerimento: c'è un solo errore)
// function checkAccessImproved() {
//     const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

//     const userEmail = prompt('Inserisci il tuo indirizzo email');

//     let grantAccess = 'false';

//     for (let i = 0; i < addresses.length; i++) {
//         const email = addresses[i];

//         if (userEmail.length > 5) {

//             if (email === userEmail) {
//                 grantAccess = 'true';

//             }

//         }

//         if (grantAccess) {
//             console.log('Accesso consentito!');
//         } else {
//             console.log('Accesso negato!');
//         }
//     }
//     checkAccessImproved();





























