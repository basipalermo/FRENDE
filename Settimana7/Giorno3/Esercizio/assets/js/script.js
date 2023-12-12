// Effettua una richiesta GET all'endpoint
fetch('https://striveschool-api.herokuapp.com/books')
    .then(response => response.json())
    .then(data => {
        // Manipola il DOM per visualizzare i dati
        const libriContainer = document.getElementById('libri-container');

        data.forEach(book => {
            // Crea una card di Bootstrap per ogni libro
            const card = document.createElement('div');
            card.classList.add('col-md-3', 'mb-4');

            card.innerHTML = `
             <div class="card">
                 <img src="${book.img}" class="card-img-top" alt="${book.title}">
                 <div class="card-body">
                     <h5 class="card-title">${book.title}</h5>
                     <p class="card-text">Prezzo: ${book.price}</p>
                     <button class="btn btn-danger" onclick="rimuoviLibro(this)">Scarta</button>
                 </div>
             </div>
         `;

            libriContainer.appendChild(card);
        });
    })
    .catch(error => console.error('Errore nella richiesta:', error));

// Funzione per rimuovere una card quando viene premuto il pulsante "Scarta"
function rimuoviLibro(button) {
    const card = button.closest('.card');
    card.remove();
}