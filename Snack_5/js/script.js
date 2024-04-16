// Crea un array di oggetti che rappresentano delle persone.
// Ogni persona ha un nome, un cognome e un’età.
// Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.

// Array

const persone = [
  { nome: "William", cognome: "Rossi", eta: 26 },
  { nome: "Elisa", cognome: "Bianchi", eta: 18 },
  { nome: "Giuseppe", cognome: "Verdi", eta: 15 },
  { nome: "Antonio", cognome: "Verdi", eta: 12 },
  { nome: "Nadia", cognome: "Verdi", eta: 33 },
];

// Nuovo array vuoto

const newArray = [];

// Uso forEach per iterare

persone.forEach((curPersona) => {
  let fraseArray = `${curPersona.nome} ${curPersona.cognome}`;
  // uso if per suddividere
  if (curPersona.eta >= 18) {
    fraseArray += ` può guidare`;
  } else {
    fraseArray += ` non può guidare`;
  }
  // Infine pusho nell'array
  newArray.push(fraseArray);
});

// Stampo
console.log(newArray);