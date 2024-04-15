// 1) Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà:
// - nome
// - punti fatti
// - falli subiti

// 2) Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// 3) Generare numeri random al posto degli 0 nelle proprietà:
// - Punti fatti
// - Falli subiti.

// 4) Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

// Array squadre di calcio

const squadreCalcio = [
  { nome: "Juventus" },
  { nome: "Napoli" },
  { nome: "Milan" },
];

// console.log(squadreCalcio);

// Generare  per ogni squadra punti fatti e falli subiti
// Utilizzo forEach per iterare il ciclo

squadreCalcio.forEach(squadra => {

    // Genero casualmente i punti tra 0 e 9
    squadreCalcio.punti = Math.floor(Math.random() * 10);
    console.log(`Punti: ${squadreCalcio.punti}`);

    // Genero casualmente i falli tra 0 e 5
    squadreCalcio.falli = Math.floor(Math.random() * 6)
    console.log(`Falli: ${squadreCalcio.falli}`);
})


// Ora tocca creare un nuobo array