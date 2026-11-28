// Traccia 09 · Come mi vesto?
// La consegna è nel README, alla voce "09 · Come mi vesto?".

/*
  STEPS
  1 -
  2 -
  3 -
  4 -
*/

// # Fase di preparazione


// # Fase di raccolta dati
const temperature = Number(prompt(`Che temperatura esterna c'è?`, `°C`));


// # Fase di elaborazione
if (temperature) {
  if (temperature < 15) {
    const rain = prompt(`Sta piovendo?`, `si o no`);
    if (rain === 'si') {
      console.log(`Metti l'impermeabile.`);
    }
    else {
      console.log(`Metti la giacca.`);
    }
  }
  else {
    console.log(`Vai leggero.`)
  }
}
else {
  console.log(`Scrivi la temperatura.`);
  alert(`Le temperature sotto zero valgono!`);
}// # Fase di output

