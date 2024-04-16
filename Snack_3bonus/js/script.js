// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.

const myArray = [23, 41, 55, 78, 99, 100, 143];

console.log(getArrayInterval(myArray, 1, 3));

/**
 * Descrizione: La funzione che ritorna un nuovo array con i valori che hanno la posizione compresa tra min e max
 * @param {array} arrayToCheck
 * @param {number} minIndex
 * @param {number} maxIndex
 * @returns {array}
 */
function getArrayInterval(arrayToCheck, minIndex, maxIndex) {
  const result = arrayToCheck.filter((curElem, index) => {
    // l'indice compreso tra min e max
    return index >= minIndex && index <= maxIndex;
  });
  return result;
}
