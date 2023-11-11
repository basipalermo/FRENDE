/* 1. Dobbiamo capire in che mese siamo, per scriverlo nell'h1 e quanti giorni ha il mese per generare il corretto numero di celle
*/

const now = new Date();

/* Per salvare gli appuntamenti abbiamo bisogno di un array, perché ogni appuntamento è una stringa
ogni giorno può contenere infiniti appuntamenti e ogni mesi ha un numero di giorni variabile.
Creeremo quindi un array di array, dove l'array padre è un mese e gli array figli rappresentano i giorni
[ rappresenta il mese
 [rappresenta il primo giorno], [rappresenta il secondo giorno] ....
 ]
*/

const appointments = [];

//pushiamo tanti sotto array quanty i giorni del mese

const monthNames = [
    "Gennaio",
    "Febbraio",
    "Marzo",
    "Aprile",
    "Maggio",
    "Giugno",
    "Luglio",
    "Agosto",
    "Settembre",
    "Ottobre",
    "Novembre",
    "Dicembre",
];

const scriviMese = function () {
    const title = document.querySelector("h1");
    const indiceMese = now.getMonth(); //10 siamo a novembre
    const nomeMese = monthNames[indiceMese]; //novembre
    title.innerText = nomeMese;
};

scriviMese();
//quanti giorni ha il mese, per riempire le celle
//Febbraio negli anni bisestili ha 29 giorni quindi per sapere quanti giorni ha serve l'anno

const giorniTotali = function () {
    const anno = now.getFullYear(); //2023
    const mese = now.getMonth(); //10 Nov
    //nell'oggetto date il numero dei giorni del mese parte da 1
    //mi basta sapere l'ultimo giorno del mese per avere il numero dei giorni
    //creo la data del primo giorno del mese successivo in corso e faccio -1

    let ultimoGiorno = new Date(anno, mese + 1, 0);

    //oggi questa data corrisponde allo 0 Dicembre 2023, che non esiste e che quindi è il 30 Novembre
    const numeroGiorni = ultimoGiorno.getDate();
    return numeroGiorni; //numeroGiorni è il numero di volte per cui ripeto la creazione dei divcorrispondenti ai singoli giorni
};

giorniTotali();

//quando carico un mese, eventuali classi selected precedenti devono essere rimosse, altriment mi troverò selezionati i giorni del mese precedenti
const deselezionaCelle = function () {
    const celle = document.querySelectorAll(".day");
    celle.forEach((element) => {
        element.classList.remove("selected");
    });
};

// Quando faccio click su un giorno, nel div id=newMeetingDay dovrò leggere la data selezionata

const giornoAppuntamento = function (indiceGiorno) {
    const giorno = document.getElementById("newMeetingDay");
    giorno.classList.add("hasDay");
    giorno.innerText = indiceGiorno + 1;
};
//ora creiamo la griglia dei div contenenti i giorni del mese in corso
//la griglia userà il numero dei giorni per gestire l'array globale creato all'inizio e scriverà i vari div

const creaGriglia = function (numeroGiorni) {
    const calendarDiv = document.getElementById("calendar");
    for (let i = 0; i < numeroGiorni; i++) {
        const cellaGiorno = document.createElement("div"); //ad ogni giorno associo un div

        cellaGiorno.classList.add("day"); //stilizzo il div come come definito in css
        cellaGiorno.addEventListener("click", function (e) {
            //rendo cliccabili i div dei giorni
            deselezionaCelle(); //deseleziono eventuale altra cella selezionata
            cellaGiorno.classList.add("selected"); //aggiungo la classe css per mostrare la selezione del giorno cliccato
            giornoAppuntamento(i); //scrive il giorno cliccato nella sezione Giorno del form
            //Se ci sono già eventi nella giornata devo far comparire la lista

            if (appointments[i].lenght > 0) {
                mostraAppuntamenti(i);
            } else {
                const divAppuntamenti = document.getElementById("appointments");
                divAppuntamenti.style.display = "none";
            }
        });
        //devo scrivere il numero del giorno nei div

        const valoreCella = document.createElement('h3');
        valoreCella.innerText = i + 1;
        //appendo gli elementi creati 
        cellaGiorno.appendChild(valoreCella);
        calendarDiv.appendChild(cellaGiorno);
        //creato il calendario inserisco nell'array appointments l'array dei giorni del mese
        appointments.push([]);
    }
};
creaGriglia(giorniTotali());

const mostraAppuntamenti = function (indiceGiorno) {
    //con questa funzione popola la lista degli appuntamenti
    // 1- prendere gli appuntamenti giusti

    const appuntamentiGiorno = appointments[indiceGiorno];
    //2- selezionare la lista contenitore
    const lista = document.querySelector("#appointments ul");
    //3- svuotare la ista
    lista.innerHTML = "";
    //4-ciclare gli appuntamenti del giorno e creare un li per ciascuno di essi
    appuntamentiGiorno.forEach((element) => {
        const newLi = document.createElement("li");
        newLi.innerText = element;
        lista.appendChild(newLi);
    });
    //5- la lista è piena ma è ancora nascosta
    const divAppuntamenti = document.getElementById("appointments");
    divAppuntamenti.style.display = "block";
};


const meetingForm = document.querySelector('form');
meetingForm.addEventListener('submit', function (e) {
    e.preventDefault();
    // 1- giorno dell'appuntamento
    const selectedDay = document.getElementById('newMeetingDay').innerText;
    // 2- ora dell'appuntamento selezionato
    const meetingTime = document.getElementById('newMeetingTime').value;
    // 3- nome dell'appuntamento
    const meetingName = document.getElementById('newMeetingName').value;
    // 4- creo la stringa dell'appuntamento
    const stringaAppuntamento = `${meetingTime} - ${meetingName}`;
    // 5- scrivo l'appuntamento nell'array
    const indiceArray = parseInt(selectedDay) - 1;
    appointments[indiceArray].push(stringaAppuntamento);

    // creo un pallino che evidenzi nel calendario la presenza di un appuntamento
    const pallino = document.createElement('div');
    pallino.classList.add('pallino');
    // cerco il div del giorno selezionato
    const divSelezionato = document.querySelector('.selected');
    if (!divSelezionato.querySelector('.pallino')) {
        divSelezionato.appendChild(pallino);
    }
    mostraAppuntamenti(indiceArray);
});

