/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish'];
for (let i = 0; i < pets.length; i++) {
    console.log(pets[i]);

}
/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

// Ordina l'array alfabeticamente
pets.sort();

// Stampa l'array ordinato
console.log(pets);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

// Ordina l'array alfabeticamente
pets.sort();

// Stampa l'array ordinato
console.log("Array ordinato:", pets);

// Inverti l'ordine degli elementi nell'array
pets.reverse();

// Stampa l'array invertito
console.log("Array invertito:", pets);

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
const firstPet = pets[0];
const newArray = pets.slice(1); // Crea una copia dell'array senza il primo elemento
newArray.push(firstPet);

console.log(newArray);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

const licensePlateValue = "Targa";

for (let i = 0; i < cars.length; i++) {
  cars[i].licensePlate = licensePlateValue;
}

console.log(cars);



/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
const newCar = {
  brand: 'Toyota',
  model: 'Corolla',
  color: 'silver',
  trims: ['le', 'se'],
  licensePlate: 'Targa' 
};

cars.push(newCar);

// Rimuovi l'ultimo elemento dalla proprietà "trims" di ogni auto
const lastIndex = cars.length - 1;
if (cars[lastIndex].trims.length > 0) {
  cars[lastIndex].trims = cars[lastIndex].trims.slice(0, -1);
}

console.log(cars);


/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [];

for (let i = 0; i < cars.length; i++) {
  if (cars[i].trims.length > 0) {
    justTrims.push(cars[i].trims[0]);
  }
}

console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
for (let i = 0; i < cars.length; i++) {
  const color = cars[i].color.toLowerCase(); 
  if (color[0] === 'b') {
    console.log("Fizz");
  } else {
    console.log("Buzz");
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]
let index = 0;

while (index < numericArray.length && numericArray[index] !== 32) {
  console.log(numericArray[index]);
  index++;
}
/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd'];
const alphabetItalian = 'abcdefghilmnopqrstuvz';

const positionsArray = charactersArray.map((char) => {
  const index = alphabetItalian.indexOf(char);
  switch (index) {
    case -1:
      return null; // Se il carattere non è nell'alfabeto italiano, assegna null
    default:
      return index + 1; // Aggiungi 1 per avere la posizione basata su 1
  }
});

console.log(positionsArray);
