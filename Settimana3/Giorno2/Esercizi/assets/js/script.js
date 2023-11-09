
/* ESERCIZIO 1
 Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
*/

const changeTitle = function (newTitle) {
    document.querySelector('h1').textContent = newTitle;
}
changeTitle("Questo è il nuovo titolo della pagina");


/* ESERCIZIO 2
 Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
*/

const addClassToTitle = function () {
    const titleElement = document.querySelector('h1');
    titleElement && titleElement.classList.add('myHeading');
};
addClassToTitle();

/* ESERCIZIO 3
 Scrivi una funzione che cambi il testo dei p figli di un div
*/

const changePcontent = function () {
  const paragrafi = document.querySelectorAll('div > p');
  paragrafi.forEach(paragrafo => {
    paragrafo.textContent = "Nuovi paragrafi";
  });
}
changePcontent();

/* ESERCIZIO 4
 Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
*/

const changeUrls = function (newHref) {
    let allLinks = document.getElementsByTagName("a");
    for (let i = 0; i < allLinks.length - 1; i++){
      allLinks[i].href="https://www.google.com/"
    }
  };
  
  changeUrls();



/* ESERCIZIO 5
 Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
*/

const addToTheSecond = function () {
    const secondaLista = document.getElementById("secondList");
    const lista = document.createElement("li");
    const nuovoElemento= secondList.appendChild(lista);
    lista.innerText = "Nuovo Elemento della Lista"
  };
  
  addToTheSecond();

/* ESERCIZIO 6
 Scrivi una funzione che aggiunga un paragrafo al primo div
*/

const addParagraph = function () {
    const primoDiv = document.getElementById("primoDiv");
    const nuovoParagrafo = document.createElement("p");
    nuovoParagrafo.innerText = "Un nuovo paragrafo";
    primoDiv.appendChild(nuovoParagrafo);
};

addParagraph();

/* ESERCIZIO 7
 Scrivi una funzione che faccia scomparire la prima lista non ordinata
*/

const hideFirstUl = function () {
    const primoUl = document.querySelector("ul").style.display = "none";
};

hideFirstUl();

/* ESERCIZIO 8 
 Scrivi una funzione che renda verde il background di ogni lista non ordinata
*/

const paintItGreen = function () {
        const ulList = document.querySelectorAll("ul");

        ulList.forEach(function (ul) {
        ul.style.backgroundColor = "green";
    });
};

paintItGreen();

/* ESERCIZIO 9
 Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
*/

const makeItClickable = function () {
	const titolo = document.querySelector('h1');
	titolo.onclick = function() {
		titolo.innerText = titolo.innerText.slice(0, -1);
	}
};

makeItClickable();


/* ESERCIZIO 10
 Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
*/

const revealFooterLink = function () {
	const footer = document.querySelector('footer');
	footer.onclick = function() {
		const link = document.querySelector('footer a');
		alert(link.getAttribute('href'));
	}
};

revealFooterLink();

/* ESERCIZIO 11
 Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
 La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
*/

const generateTable = function () { }

/* ESERCIZIO 12
 Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
*/

const addRow = function () { }

/* ESERCIZIO 14
Crea una funzione che nasconda le immagini della tabella quando eseguita
*/

const hideAllImages = function () { }

/* EXTRA ESERCIZIO 15
Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
*/

const changeColorWithRandom = function () { }

/* EXTRA ESERCIZIO 16
Crea una funzione che elimini le vocali da ogni elemento testuale della pagina (puoi aiutarti con i nuovi metodi degli array di ES6)
*/

const deleteVowels = function () { }
