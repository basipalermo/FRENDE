/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
console.log('Esercizio A');
let sum = 10 + 20;
console.log("La somma è; " + sum);

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
console.log('Esercizio B');
let random = Math.floor(Math.random() * 21);
console.log("Il numero casuale è: " + random);


/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
console.log('Esercizio C');
const me = {
  name: "Basilia",
  surname: "Palermo",
  age: 25
};
console.log(me);

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
console.log('Esercizio D');
delete me.age;
console.log(me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
console.log('Esercizio E');
me.skills = ["JavaScript", "HTML", "CSS"];
console.log(me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
console.log('Esercizio F');
me.skills.push("Phyton");
console.log(me);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
console.log('Esercizio G');

if (me.skills && me.skills.length > 0) {
  me.skills.pop();
}
console.log(me);

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
console.log('Esercizio 1');
function dice() {
  let randomNumber = Math.floor(Math.random() * 6) + 1;

  return randomNumber;
}
let risultatoDado = dice();
console.log("Il dado ha mostrato il numero: " + risultatoDado);

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
console.log('Esercizio 2');
function whoIsBigger(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}
let numeroMaggiore = whoIsBigger(7, 4);
console.log("Il numero maggiore è: " + numeroMaggiore);

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
console.log('Esercizio 3');
function splitMe(inputString) {
  let wordsArray = inputString.split(" ");
  return wordsArray;
}

let stringa = "I love coding";
let risultatoSplit = splitMe(stringa);
console.log(risultatoSplit);

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
console.log('Esercizio 4');
function deleteOne(inputString, isFirst) {
  if (isFirst) {
    return inputString.slice(1);
  } else {
    return inputString.slice(0, -1);
  }
}
let stringa1 = "Hello";
let risultato1 = deleteOne(stringa1, true);
console.log("Risultato con isFirst true:", risultato1);

var stringa2 = "World";
var risultato2 = deleteOne(stringa2, false);
console.log("Risultato con isFirst false:", risultato2);

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
console.log('Esercizio 5');
function onlyLetters(inputString) {
  let result = '';

  for (let i = 0; i < inputString.length; i++) {

    if (inputString[i] < '0' || inputString[i] > '9') {
      result += inputString[i];
    }
  }

  return result;
}

let stringWithNumbers = "I have 4 dogs";
let result = onlyLetters(stringWithNumbers);
console.log(result);

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
console.log('Esercizio 6');
function isThisAnEmail(email) {
  return email.includes('@') && email.includes('.');
}

let email1 = "quack@email.com";
console.log(isThisAnEmail(email1));
let email2 = "emailinesatta";
console.log(isThisAnEmail(email2));
/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
console.log('Esercizio 7');
function whatDayIsIt() {
  const oggi = new Date();
  const giornoSettimana = oggi.getDay();

  const giorniSettimana = [
    "Domenica",
    "Lunedì",
    "Martedì",
    "Mercoledì",
    "Giovedì",
    "Venerdì",
    "Sabato",
  ];

  const oggiNome = giorniSettimana[giornoSettimana];
  return oggiNome;
}

const oggi = whatDayIsIt();
console.log("Oggi è " + oggi);


/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
console.log('Esercizio 8');
function rollTheDices(num) {
  let result = {
    sum: 0,
    values: []
  };

  for (let i = 0; i < num; i++) {
    let diceValue = dice();
    result.sum += diceValue;
    result.values.push(diceValue);
  }

  return result;
}
let risultato = rollTheDices(3);
console.log("Risultato del lancio dei dadi:", risultato);

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
console.log('Esercizio 9');
function howManyDays(startDate) {
  let currentDate = new Date();
  let startDateObject = new Date(startDate);

  let timeDiff = currentDate - startDateObject;
  let daysPassed = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  return daysPassed;
}

let dataInizio = "2021-06-18";
let giorniTrascorsi = howManyDays(dataInizio);
console.log("Giorni trascorsi dalla data di inizio:", giorniTrascorsi);

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
console.log('Esercizio 10');
function isTodayMyBirthday(birthday) {
  let currentDate = new Date();
  let birthdayDate = new Date(birthday);

  let isBirthday = currentDate.getDate() === birthdayDate.getDate() &&
    currentDate.getMonth() === birthdayDate.getMonth();

  return isBirthday;
}
let mioCompleanno = "1998-05-18";
let oggiCompleanno = isTodayMyBirthday(mioCompleanno);
console.log("Oggi è il mio compleanno?", oggiCompleanno);

// Arrays & Oggetti
/* Ho spostato su l'array dei film */

/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]


/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
console.log('Esercizio 11');
function deleteProp(obj, propName) {
  if (obj[propName] !== undefined) {
    delete obj[propName];
  }
  return obj;
}

let oggettoOriginale = {
  nome: "Pippo",
  cognome: "Paperino",
  età: 45
};

let oggettoModificato = deleteProp(oggettoOriginale, "età");
console.log("Oggetto originale:", oggettoOriginale);
console.log("Oggetto modificato:", oggettoModificato);

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
console.log('Esercizio 12');
function newestMovie(movies) {
  if (movies.length === 0) {
    return null;
  }

  let recentMovie = movies[0];

  for (let i = 1; i < movies.length; i++) {
    if (parseInt(movies[i].Year) > parseInt(recentMovie.Year)) {
      recentMovie = movies[i];
    }
  }

  return recentMovie;
}
let filmPiuRecente = newestMovie(movies);
console.log("Il film più recente è:", filmPiuRecente);

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
console.log('Esercizio 13');
function countMovies(movies) {
  return movies.length;
}

let numeroDiFilm = countMovies(movies);
console.log("Il numero di film è:", numeroDiFilm);

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
console.log('Esercizio 14');
function onlyTheYears(movies) {
  let yearsArray = movies.map(function (movie) {
    return movie.Year;
  });

  return yearsArray;
}
let anniDeiFilm = onlyTheYears(movies);
console.log("Gli anni dei film sono:", anniDeiFilm);

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
console.log('Esercizio 15');
function onlyInLastMillennium(movies) {
  let lastMillenniumMovies = movies.filter(function (movie) {
    return parseInt(movie.Year) >= 2000;
  });

  return lastMillenniumMovies;
}
let filmUltimoMillennio = onlyInLastMillennium(movies);
console.log("I film prodotti nell'ultimo millennio sono:", filmUltimoMillennio);

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
console.log('Esercizio 16');
function sumAllTheYears(movies) {
  let totalYears = movies.reduce(function (accumulator, movie) {
    return accumulator + parseInt(movie.Year);
  }, 0);

  return totalYears;
}
let sommaAnni = sumAllTheYears(movies);
console.log("La somma di tutti gli anni è:", sommaAnni);

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
console.log('Esercizio 17');
function searchByTitle(searchString, movies) {
  let matchingMovies = movies.filter(function (movie) {
    let titleLowerCase = movie.Title.toLowerCase();
    let searchLowerCase = searchString.toLowerCase();

    return titleLowerCase.includes(searchLowerCase);
  });

  return matchingMovies;
}
let risultatoRicerca = searchByTitle("Lord", movies);
console.log("I film con il titolo che contiene 'Lord' sono:", risultatoRicerca);

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
console.log('Esercizio 20');
function selectContainer() {
  return document.getElementById("container");
}
let containerElement = selectContainer();
console.log("Elemento con id 'container':", containerElement);

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
console.log('Esercizio 21');
function selezionaTagTD() {
  let elementiTD = document.querySelectorAll('td');
  elementiTD.forEach(function (elemento) {
    console.log(elemento.innerHTML);
  });
}
selezionaTagTD();

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
console.log('Esercizio 22');
function stampaTestoTagTD() {
  let elementiTD = document.querySelectorAll('td');

  elementiTD.forEach(function (elemento) {
    console.log(elemento.textContent);
  });
}
stampaTestoTagTD();
/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

function aggiungiBackgroundRossoAiLink() {
    let link = document.querySelectorAll('a');

    link.forEach(function(elemento) {
    elemento.style.backgroundColor = 'red';
  });
}

aggiungiBackgroundRossoAiLink();


/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

function aggiungiElementoALista() {
 let nuovoElemento = document.createElement('li');
    nuovoElemento.innerHTML = 'Il mio nuovo elemento';

  let lista = document.getElementById('myList');
  lista.appendChild(nuovoElemento);
}
aggiungiElementoALista();

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

function svuotaLista() {
  let lista = document.getElementById('myList2');
  lista.innerHTML = '';
}
svuotaLista();

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

function aggiungiClasseATagTR() {
    let elementiTR = document.querySelectorAll('tr');

    elementiTR.forEach(function(elemento) {
    elemento.classList.add('test');
  });
}
aggiungiClasseATagTR();

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

