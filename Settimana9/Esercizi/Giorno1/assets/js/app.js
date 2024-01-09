class MyJSClass {
    constructor(numbers) {
        if (numbers !== undefined) {
            if (!Array.isArray(numbers)) {
                throw new Error("Il parametro deve essere un array di numeri.");
            }
            this.numbers = numbers;
        } else {
            this.numbers = [];
        }
    }

    checkAndPrint() {
        for (let number of this.numbers) {
            console.log("Numero in esame:", number);

            if (number % 3 === 0 && number % 5 === 0) {
                console.log("Paperino");
            } else if (number % 3 === 0) {
                console.log("Pippo");
            } else if (number % 5 === 0) {
                console.log("Pluto");
            } else {
                const numberAsString = convertiInLettere(number);
                console.log(numberAsString);
            }
        }
    }
}


function convertiInLettere(numero) {
    const numeriInLettere = ["zero", "uno", "due", "tre", "quattro", "cinque", "sei", "sette", "otto", "nove"];
    
    if (numero >= 0 && numero <= 9) {
        return numeriInLettere[numero];
    } else {
        return String(numero);
    }
}

const numbersArray = [2, 3, 5, 15, 7, 10, 9];
const myInstance = new MyJSClass(numbersArray);
myInstance.checkAndPrint();