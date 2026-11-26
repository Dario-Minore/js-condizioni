// Traccia 07 · Le montagne russe
// La consegna è nel README, alla voce "07 · Le montagne russe".

/*
  STEPS
  1 - Raccolgo i dati con le costanti "height" e "age" tramite il prompt (ma voglio che siano soltanto numeri quindi uso la proprietà "Number()");
  2 - Elaboro i dati: prima di tutto, verifico che gli input siano numeri e costruisco il primo if con la proprietà "isNan()"(se almeno una costante non è un numero divengono true ed eseguo l'istruzione con l'output in alert dove spiego che i dati non sono validi);
  3 - Elaboro ancora i dati: con else if faccio verificare la seconda condizione cosicchè, nel caso l'altezza sia >= a 140 e l'età >= a 14, allora in outup l'alert avvertirà che la persona può salire sulla giostra, altrimenti con else finale non potrà salire.
  4 -
*/

// # Fase di preparazione


// # Fase di raccolta dati
const height = Number(prompt('Quanto sei alto?', 'in cm.'));
const age = Number(prompt('Quanto anni hai?', 'la tua età'));

// # Fase di elaborazione
if (isNaN(height) || isNaN(age)) {
  // # Fase di output
  alert('Dati non validi.');
}
// # Fase di elaborazione
else if (height >= 140 && age >= 14) {
  // # Fase di output
  alert('Puoi salire!');
}
else {
  alert('Mi dispiace, non puoi salire');
}


