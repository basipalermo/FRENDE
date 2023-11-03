/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function area(l1, l2) {
        let rettangoloArea = l1 * l2;
    return rettangoloArea;
  }
  
  let lunghezza1 = 5;
  let lunghezza2 = 10;
  let risultato = area(lunghezza1, lunghezza2);
  
  console.log("L'area del rettangolo è: " + risultato);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazySum (numero1 , numero2) {
    let somma;
    if (numero1 !== numero2) {
        somma = numero1 + numero2;
    } else if (numero1 === numero2) {
        somma = (numero1 + numero2) * 3;
    }

    console.log("Il risultato è: ", somma);
    return somma; 

}
crazySum(4, 9);

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazyDiff(numero3) {
    let differenza;
    let numero4 = 19;
    if (numero3 < numero4) {
        differenza = numero4 - numero3;
    } else if (numero3 > numero4) {
        differenza = (numero3 - numero4) * 3;
    }

    console.log("Il risultato è: ", differenza);
    return differenza;
}

crazyDiff(8);

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function boundary(n) {
    return (n >= 20 && n <= 100) || n === 400;
  }
  
  console.log(boundary(50));  
  console.log(boundary(400)); 
  console.log(boundary(10));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function epify(stringa3) {
    if (stringa3.startsWith("EPICODE")) {
      return stringa3; 
    } else {
      return "EPICODE " + stringa3; 
    }
  }
  let stringa4 = "EPICODE SCUOLA";
let risultato7 = epify(stringa4);
console.log(risultato7); 

let stringa5 = "Front-End Developer";
let risultato8 = epify(stringa5);
console.log(risultato8); 

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function check3and7(numero5) {
    if (numero5 > 0 && (numero5 % 3 === 0 || numero5 % 7 === 0)) {
      return true; 
    } else {
      return false;
    }
  }

  let num1 = 14;
let risultato4 = check3and7(num1);
console.log(risultato4);
let num2 = 5;
let risultato5 = check3and7(num2);
console.log(risultato5);

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function reverseString(stringa) {
    let stringaInvertita = stringa.split('').reverse().join('');
    return stringaInvertita;
  }
  
  
  let stringaOriginale = "EPICODE";
  let risultato2 = reverseString(stringaOriginale);
  console.log(risultato2); 

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function cutString(stringa2) {
    if (stringa2.length >= 2) {
      return stringa2.slice(1, -1);
    } else {
      return "La stringa è troppo corta per essere tagliata.";
    }
  }

  let stringaOriginale2 = "EPICODE";
  let nuovaStringa = cutString(stringaOriginale2);
  console.log(nuovaStringa);

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function giveMeRandom(n) {
    let numeriCasuali = [];
    for (let i = 0; i < n; i++) {
      let numeroCasuale = Math.floor(Math.random() * 11); 
      numeriCasuali.push(numeroCasuale);
    }
    return numeriCasuali;
  }

  let numeriCasuali = giveMeRandom(5);
console.log(numeriCasuali); 