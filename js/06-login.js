// Traccia 06 · Il login
// La consegna è nel README, alla voce "06 · Il login".

/*
  STEPS
  1 - Raccolgo gli input username e password tramite il prompt;
  2 - Elaboro i dati con l'if: se i prompt equivalgono a "admin" e "1234" allora il messaggio alert restituisce "Login effettuato", altrimenti "Credenziali errate".
*/

// # Fase di preparazione


// # Fase di raccolta dati
const username = prompt('Inserisci il nome utente', 'username');
const password = prompt('Inserisci il tuo codice segreto per entrare', 'password');

// # Fase di elaborazione
if(username === 'admin' && password === '1234')
{
// # Fase di output
alert('Login effettuato');
}
else
{
  alert('Credenziali errate');
}