// Traccia 02 · Il conto alla romana
// La consegna è nel README, alla voce "02 · Il conto alla romana".

/*
  STEPS
  1 - Definisco e raccolgo i dati dell'importo totale e del numero dei commensali, prendendo soltano numeri interi con parseInt;
  2 - Calcolo la quota individuale inserendo nella nuova costante SinglAmount (che legge solo i numeri interi con parseInt) la divisione tra l'importo totale ed il numero dei commensali, aggiungendo i 10€ euro di mancia;
  3 - Creo un messaggio in console con la costante SinglAmount.
*/

// # Fase di preparazione


// # Fase di raccolta dati
const TotImp = parseInt(Number(prompt('Qual è il conto totale?', '€')));
const TotFriends = Number(prompt('Quante persone siamo?'));

// # Fase di elaborazione
const SinglAmount = parseInt(TotImp / TotFriends + 10);
// # Fase di output
console.log(`Il conto da pagare per ciascuno di noi, considerando anche i 10€ di mancia, ammonta a ${SinglAmount}€.`);
