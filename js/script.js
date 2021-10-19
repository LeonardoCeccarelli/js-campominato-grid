// Individuo le tre sezioni dove dovrò lavorare e aggiungere tramite javascript nel DOM

// finestra dove imposto la difficoltà
const selectDifficult = document.getElementById("difficult_select")

// bottone per far apparire il riquadro e far partire il gioco
const btnStartGame = document.getElementById("btn_start_game")

// contenitore dove si formerà il quadrato con il nummero di celle in base alla difficoltà selezionata
const cellContainer = document.getElementById("square_container")

// Aggiungo l'evento al bottone che, se cliccato, mi genera il riquadro
btnStartGame.addEventListener("click", function () {

    cellContainer.classList.add("border_active")

    // Creo costante che mi individua il valore della select
    const levelSelect = selectDifficult.value

    const rightCells = checkCellNum(levelSelect)

    generateCellGrid(rightCells)
})

/*********************
FUNZIONI
*********************/

/**
 *
 * Funzione che mi calcola il numero di celle grazie
 * alla difficoltà inserità
 *
 * @param {number}
 * @param {number}
 */

function checkCellNum(num) {
    // creo variabile che darò al return per assegnare un valore alla funzione
    let numResult = ""

    // in base alla scelta dell'utente cambio il risultato in 100/81/49
    switch (parseInt(num)) {
        case 1:
            numResult = 100
            break;

        case 2:
            numResult = 81
            break;

        case 3:
            numResult = 49
            break;

    }

    return numResult;
}

/**
 *
 * Funzione che genera la griglia principale basandosi
 * sul valore ricevuto dalla variabile rightCells passandolo
 * come argomento della funzione
 *
 * @param {number}
 * @param {number}
 */

function generateCellGrid(cellsNumber) {
    // se c'è del contenuto lo resetto evitando che il browser 
    // lo riaggiunga in automatico
    cellContainer.innerHTML = ""

    // con questa operazione trovo i quadrati per
    // riga nel mio container principale
    const numRowCells = Math.sqrt(cellsNumber)

    // così trovo la giusta larghezza e altezza in 
    // percentuale (sempre in base alla difficoltà)
    const sizeCell = 100 / numRowCells

    // creo il ciclo che mi crea nell'html tutte 
    // le celle
    for (let i = 0; i < cellsNumber; i++) {
        const numCell = cellsNumber[i];

        // creo l'elemento da inserire nel DOM e 
        // aggiungo le varie classi
        const cell = document.createElement("div")
        cell.classList.add("box")
        cell.style.width = sizeCell + "%"
        cell.style.height = sizeCell + "%"
        cell.textContent = i + 1

        // aggiungo il tutto
        cellContainer.append(cell)
    }
}
