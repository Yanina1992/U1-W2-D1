/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* I principali datatype sono stringhe, numeri e boolean ai quali, per completezza, aggiungiamo gli undefined e i null.
Le stringhe sono definite da virgolette singole, doppie o da backsticks; la parola che ne definisce il valore deve essere
scritta in minuscolo; nel caso in cui ci fossero più parole, queste vengono concatenate con una sintassi camelCase,
ovvero, facendo iniziare con una lettera maiuscola le parole dalla seconda in poi. Il datatype numerico 
può essere un numero intero oppure un decimale, la cui virgola deve essere resa con un punto. I booleans, invece,
sono utilizzati per fare controlli di veridicità degli elementi, e possono essere true o false. */

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let myName = "Yanina";
console.log("myName", myName);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let number1 = 12;
let number2 = 20;
console.log("number1+number2", number1 + number2);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

myName = "Aguero";
console.log("myName", myName);

//const lastName = "Rossi"
//lastName = "Paolini";
//console.log(lastName);

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let sum = 4 - x;
console.log("x-4", sum);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = "john";
let name2 = "John";
// console.log("The difference between name1 and name2 is", name1 !== name2);

let isTheSameName = name1 === name2 ? true : false;
console.log("is the same name", isTheSameName);

let isTheSameNameIf =
  name1.toLowerCase() === name2.toLowerCase() ? true : false;
console.log("is the same name if", isTheSameNameIf);
