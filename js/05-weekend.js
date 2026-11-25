// Traccia 05 · Che giorno è?
// La consegna è nel README, alla voce "05 · Che giorno è?".

/*
  STEPS
  1 - Raccolgo i dati con prompt: che giorno è?;
  2 - Elaboro i dati: se la costante Day equivale per valore e tipologia a "sabato" oppure a "domenica", allora il programma mi restituirà un alert col messaggio "Buon weekend!", altrimenti "Buon lavoro."
*/

// # Fase di preparazione


// # Fase di raccolta dati
const Day = prompt('Che giorno è oggi?', '(inserisci un giorno da lunedì a domenica)');

// # Fase di elaborazione
if(Day === 'sabato' || Day === 'domenica')
{
// # Fase di output
alert(`Buon weekend!`);
}
else
{
  alert(`Buon lavoro.`);
}
