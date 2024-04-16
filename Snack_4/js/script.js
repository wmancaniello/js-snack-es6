// Crea un array composto da 4 automobili.
// Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
// Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto. 


// Array di auto
const automobili = [
  { marca: "Toyota", modello: "Yaris", alimentazione: "ibrida" },
  { marca: "Volkswagen", modello: "Golf", alimentazione: "benzina" },
  { marca: "BMW", modello: "i3", alimentazione: "elettrico" },
  { marca: "Fiat", modello: "Panda", alimentazione: "metano" },
  { marca: "Renault", modello: "Clio", alimentazione: "diesel" },
  { marca: "Tesla", modello: "Model S", alimentazione: "elettrico" },
  { marca: "Ford", modello: "Focus", alimentazione: "benzina" },
  { marca: "Audi", modello: "A3", alimentazione: "diesel" },
  { marca: "Mercedes-Benz", modello: "EQC", alimentazione: "elettrico" },
  { marca: "Opel", modello: "Corsa", alimentazione: "gpl" },
];

// Creo gli array vuoti da "riempire"
// BENZINA
const autoBenzina = [];
// DIESEL
const autoDiesel = [];
// DIVERSE
const autoDiverse = [];

// Utilizzo il metodo forEach per iterare
automobili.forEach((auto) => {
    if (auto.alimentazione === "benzina") {
        autoBenzina.push(auto);
    } else if (auto.alimentazione === "diesel") {
        autoDiesel.push(auto)
    } else {
        autoDiverse.push(auto)
    }
});

// STAMPO

console.log("BENZINA:", autoBenzina);
console.log("DIESEL:", autoDiesel);
console.log("ALTRE:", autoDiverse);

