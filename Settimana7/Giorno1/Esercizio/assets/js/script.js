/* ESERCIZIO 1 */
/* Crea una classe User per la creazione di oggetti di tipo “utente”. 
Il suo costruttore dovrà inizializzare ogni oggetto utente con i seguenti attributi:
- firstName- lastName- age- location 
Aggiungi alla classe User anche un metodo che restituisca il confronto con l'età di un'altra persona. 
Ad esempio, date due istanze della classe utente “x” e “y” inizializzate con le proprietà sopra descritte,
 il metodo dovrà restituire una frase simile a “x è più vecchio di y” a seconda del risultato del confronto.
  Crea degli oggetti a partire dalla classe User e verifica che la comparazione tra le età funzioni correttamente.*/

console.log('Esercizio 1')

class User {
    constructor(firstName, lastName, age, location) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.location = location;
    }

    comparaEta(nuovoUser) {
        if (this.age === nuovoUser.age) {
            console.log(`${this.firstName} è della stessa età di ${nuovoUser.firstName}`);
        } else if (this.age > nuovoUser.age) {
            console.log(`${this.firstName} è più grande di ${nuovoUser.firstName}`);
        } else {
            console.log(`${this.firstName} è più piccolo di ${nuovoUser.firstName}`);
        }
    }
}

const User1 = new User('Gigi', 'Dalessio', 56, 'Napoli');
const User2 = new User('Vincenzo', 'Salemme', 66, 'Napoli');

User1.comparaEta(User2);

/* ESERCIZIO 2 */

/* Crea un form per la creazione di oggetti “Pet” (animali domestici). 
La classe Pet dovrà essere dotata delle seguenti proprietà:- petName- ownerName- species 
(cane, gatto, coniglio etc.)- breed // (labrador, soriano, nano etc.) Nella classe che utilizzerai per creare
questi oggetti aggiungi anche un metodo che restituisca true se due animali condividono lo stesso padrone.
Crea, raccogliendo i dati dal form, diverse istanze della classe Pet e mostrane i dati in una lista sottostante.*/

console.log('Esercizio 2')

class Pet {
    constructor(petName, ownerName, species, breed) {
        this.petName = petName;
        this.ownerName = ownerName;
        this.species = species;
        this.breed = breed;
    }

    sameOwner(otherPet) {
        return this.ownerName === otherPet.ownerName;
    }
}

function addPet() {
    const petName = document.getElementById('petName').value;
    const ownerName = document.getElementById('ownerName').value;
    const species = document.getElementById('species').value;
    const breed = document.getElementById('breed').value;

    const newPet = new Pet(petName, ownerName, species, breed);

    displayPet(newPet);

    document.getElementById('petForm').reset();
}

function displayPet(pet) {
    const petList = document.getElementById('petList');
    const listItem = document.createElement('li');
    listItem.textContent = `Pet Name: ${pet.petName}, Owner Name: ${pet.ownerName}, Species: ${pet.species}, Breed: ${pet.breed}`;
    petList.appendChild(listItem);

    if (petList.childElementCount > 1) {
        const previousPet = petList.children[petList.childElementCount - 2];
        const previousPetData = previousPet.textContent.split(', ');
        const previousOwnerName = previousPetData[1].split(': ')[1];

        const previousPetObject = new Pet('', previousOwnerName, '', '');

        if (pet.sameOwner(previousPetObject)) {
            console.log(`Gli animali hanno lo stesso proprietario!`);
        } else {
            console.log(`Gli animali hanno proprietari diversi.`);
        }
    }
}


