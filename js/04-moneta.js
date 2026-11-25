// Traccia 04 · Testa o croce
// La consegna è nel README, alla voce "04 · Testa o croce".

/*
  STEPS
  1 - Creo la costante currency che restituisce un numero randomico tra 0 e 1 escluso;
  2 - Creo la condizione: se currency è minore di 0,5 restituisce il messaggio output che è uscito testa, altrimenti che è uscito croce.
  3 -
  4 -
*/

// # Fase di preparazione
const currency = Math.random();

// # Fase di raccolta dati


// # Fase di elaborazione
if(currency < 0.5)
{
// # Fase di output
console.log(`E' uscito "Testa"!`);
}
else
{
  console.log(`E' uscito "Croce"!`);
}
