'use strict';

// Valori da chiedere all'utente
const chilometri = parseInt(prompt('Inserisci quanti chilometri vuoi percorrere'));
console.log(chilometri);

const eta = parseInt(prompt('Inserisci la tua età'));
console.log(eta);
  
// Prezzo del biglietto al km
const prezzoAlKm = 0.21;
// Scontistiche
const minorenni = 18;
const over65 = 65;

// Prezzo del biglietto finale
let prezzoBiglietto = chilometri * prezzoAlKm;
console.log(prezzoBiglietto);

// Prezzo finale con sconti applicati
if (eta <= minorenni)
console.log(prezzoBiglietto - (prezzoBiglietto / 100 * 20));
else if (eta >= over65)
console.log(prezzoBiglietto - (prezzoBiglietto / 100 * 40));
