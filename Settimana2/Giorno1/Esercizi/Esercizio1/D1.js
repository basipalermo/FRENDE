/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// Stringhe (Strings): Le stringhe sono come catene di parole o lettere. Possono contenere nomi, frasi o testi. Ad esempio, "Ciao, mondo!" è una stringa.

// Numeri (Numbers): I numeri sono come i conti che fai. Possono essere numeri interi (senza decimali) come 5 o numeri decimali (con decimali) come 3.14.

// Booleani (Booleans): I booleani sono come interruttori che possono essere "accesi" o "spenti". Hanno solo due valori possibili: "vero" o "falso". Per esempio, "Il sole è caldo" può essere vero o falso.

// Array: Un array è come una scatola che può contenere molti oggetti. Questi oggetti possono essere numeri, stringhe o qualsiasi altra cosa. Ecco un esempio: ["mele", "banane", "uva"] è un array che contiene tre frutti.

// Oggetti (Objects): Gli oggetti sono come sacchetti con etichette. Ogni etichetta punta a un oggetto o un valore. Ad esempio, puoi avere un oggetto chiamato "persona" con etichette come "nome" e "età".

// Null: Null è come una scatola vuota. Non contiene nulla, è come dire "non c'è niente qui".

// Undefined: Undefined è come se qualcuno ti facesse una domanda e tu non sapessi cosa rispondere. Non c'è un valore assegnato a questa cosa.

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let myName = "Basilia";
console.log(myName);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let numero1 = 12;
let numero2 = 20;
let risultato = numero1 + numero2;

console.log("La somma di", numero1, "e", numero2, "è:", risultato);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let a = 12;
let x = a;
console.log(x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

myName = "Palermo";

console.log(myName);

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

x = 12;
let risultato2 = 4 - x;
console.log("La sottrazione tra 4 e x è:", risultato2);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name1 = "john";
let name2 = "John";

let differenza = name1 !== name2;
console.log("name1 è diverso da name2:", differenza);

let lowerName1 = name1.toLowerCase();
let lowerName2 = name2.toLowerCase();
let uguaglianza = lowerName1 === lowerName2;
console.log(
  "Dopo la trasformazione in minuscolo, name1 è uguale a name2:",
  uguaglianza
);
