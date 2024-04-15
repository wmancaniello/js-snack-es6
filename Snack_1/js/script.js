// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà:
// - Nome
// - Peso
// 2) Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

// Array di oggetti
const biciCorsa = [
  {
    nome: "Olmo",
    peso: 10,
  },
  {
    nome: "Basso",
    peso: 7,
  },
  {
    nome: "Cipollini",
    peso: 12,
  },
];

// Variabile d'appoggio
// Presumo che la prima bici nell'array sia quella più leggera
let biciLeggera = biciCorsa[0];

// Utilizzo ciclo for, per trovare la bici con più leggera
// Inizio dall'indice 1, poicè lo 0 lo abbiamo già preso in considerazione con la variabile d'appoggio
for (let i = 1; i < biciCorsa.length; i++) {
  // confornto il peso della bici con il peso di biciLeggera
  if (biciCorsa[i].peso < biciLeggera.peso) {
    // Se il peso della bici è inferiore a biciLeggera, aggiorno la variabile
    biciLeggera = biciCorsa[i];
  }
  console.log(biciCorsa[i]);
}
