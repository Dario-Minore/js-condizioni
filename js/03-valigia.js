// Traccia 03 · La valigia
// La consegna è nel README, alla voce "03 · La valigia".

/*
  STEPS
  1 -
  2 -
  3 -
  4 -
*/

// # Fase di preparazione
let AirlineTicket = 36;

// # Fase di raccolta dati
const SuitcaseWeight = prompt('Quanto pesa la valigia?', 'Kg');

// # Fase di elaborazione
if(SuitcaseWeight > 23)
{
  AirlineTicket = AirlineTicket + 20;
// # Fase di output
console.log(`Dobbiamo pagare ${AirlineTicket}€!`);
}
else
{
console.log(`Il prezzo del biglietto è di ${AirlineTicket}€.`);
}



