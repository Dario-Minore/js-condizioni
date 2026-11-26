// Traccia 08 · Il parcheggio
// La consegna è nel README, alla voce "08 · Il parcheggio".

/*
  STEPS
  1 - Dichiaro e inizializzo la variabile price a 5;
  2 - Raccolgo l'input dell'utente in console con la costante hours e mi aspetto con Number() che sia un numero;
  3 - Verifico se hours è un numero con isNan() oppure se hours è inferiore a 1, dopodichè se almeno una condizione è verificata allora chiedo all'utente in console di inserire il numero di ore;
  4 - Nel caso il valore di hours risulta essere un numero, quindi nessuna delle due prime condizioni risulta essere true, procedo con una seconda condizione;
  5 - La seconda condizione con else if verifica se hours è <= 2, se è true allora restituisco a video in cosole il prezzo con price = 5;
  6 - Terza condizione: con un secondo else if verifico se hours è <= 5, se risulta true allora in console restituirò il valore di price * 2 (10);
  7 - Else finale: altrimenti, oltre le 5 ore, restituisci il valore di price * 3 (15).
*/

// # Fase di preparazione
let price = 5;

// # Fase di raccolta dati
const hours = Number(prompt(`Quante ore resta l'auto?`, `numero di ore`));
// # Fase di elaborazione
if (isNaN(hours) || hours < 1) {
  // # Fase di output
  console.log(`Scrivi il numero di ore.`);
}
// # Fase di elaborazione
else if (hours <= 2) {
  // # Fase di output
  console.log(`Da pagare: ${price}€.`);
}
// # Fase di elaborazione
else if (hours <= 5)
// # Fase di output
{
  console.log(`Da pagare: ${price = price * 2}€.`);
}
else {
  console.log(`Da pagare: ${price = price * 3}€.`);
}


