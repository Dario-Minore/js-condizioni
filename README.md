# js-condizioni

Esercizio da fare da soli, per il tutoraggio di mercoledì 18/11. Ripassi gli argomenti di sabato 14/11: variabili, `prompt`, `parseInt`, `if`/`else`, operatori logici e numeri casuali.

## Cosa devi fare

Dieci tracce, ordinate dalla più facile alla più difficile. Ogni traccia è un piccolo programma legato a una situazione vera: il badge di un evento, il conto della cena, la valigia in aeroporto…

Ogni traccia ha la sua pagina HTML e il suo file JavaScript, già collegati. **Scrivi solo nel file `.js`** della traccia: le pagine HTML non si toccano.

Le prime due tracce ripassano le variabili. Dalla terza in poi ci sono le condizioni. Fai le tracce in ordine: non devi finirle tutte stasera, si continua a casa.

## Prima di cominciare

- **Suggerimenti AI di Antigravity spenti**, come a lezione: il codice lo scrivi tu.
- **Niente Live Server.** Con `prompt` e `alert` la pagina si blocca e non si ricarica bene. Apri la pagina della traccia con **doppio clic** sul file `.html`, dalla cartella del progetto.
- Se il doppio clic apre un browser diverso da Chrome: tasto destro sul file, **Apri con** e scegli Google Chrome. Su Windows e su Mac il comando ha lo stesso nome.
- **Console sempre aperta**: F12, scheda Console. Su Mac Cmd+Opt+J.
- Dopo ogni modifica salva il file e premi **F5** nella pagina: il programma riparte da capo.

## Cosa trovi qui

```
├── 01-badge.html … 10-bancomat.html   ← una pagina per traccia: si apre con doppio clic
├── bonus-1-pagella.html, bonus-2-tessera.html
├── js/
│   ├── 01-badge.js                     ← qui scrivi il codice della traccia 1
│   ├── …
│   └── bonus-2-tessera.js
├── README.md                           ← questo file
└── AGENTS.md                           ← le istruzioni per il tutor AI
```

Perché una pagina per traccia: con un doppio clic parte solo il programma che ti interessa, e F5 lo rifà da capo. Non devi commentare e decommentare niente.

## Come lavori su ogni traccia

Ogni file `.js` contiene solo lo scheletro dei commenti. Dentro:

1. **Scrivi gli STEPS**: i passi del programma in italiano, uno per riga, prima di qualsiasi codice. Come il bicchiere d'acqua di sabato.
2. **Scrivi il codice nelle quattro fasi**, sotto il commento giusto: preparazione, raccolta dati, elaborazione, output.
3. **Apri la pagina** della traccia con doppio clic e prova **tutti** i casi di "Come verifichi". Un programma che funziona con un solo caso non è finito.
4. **Fai un commit** quando la traccia funziona. Una traccia, un commit.

Il **Suggerimento** è chiuso: aprilo solo se resti bloccato.

## Come consegnare

1. Fai il **fork** di questa repo: bottone **Fork** in alto a destra, lascia il nome `js-condizioni`. Il fork è la tua consegna: così il docente la vede.
2. Clona il **tuo** fork sul computer (`git clone` con l'indirizzo del tuo fork, non di questa repo) e apri la cartella in Antigravity.
3. Dopo ogni traccia: `git add`, `git commit` con un messaggio che dice quale traccia hai fatto, `git push` sul tuo fork.
4. Nessuna scadenza. Quando hai finito, incolla il link del tuo fork nel canale del corso.

---

## Le tracce

### 01 · Il badge

*Variabili, concatenazione, template literal.*

- **Obiettivo**: prepari il badge da appendere al collo a un evento. Tre costanti con i tuoi dati: nome, età e lavoro (o quello che studi). In console stampi la frase `Mi chiamo Ada, ho 36 anni e faccio la sviluppatrice` due volte: la prima costruita con la concatenazione (`+`), la seconda con il template literal. Poi una terza riga con un calcolo sull'età: `Fra 10 anni avrò 46 anni`.
- **Come verifichi**:
  - in console ci sono due righe uguali, carattere per carattere (spazi e virgole compresi), e sotto la riga del calcolo;
  - cambia l'età nella costante, salva e premi F5: cambiano tutte e tre le righe;
  - prova a scrivere l'età tra virgolette, per esempio `'36'`: cosa diventa il calcolo? Sai spiegare perché? Poi rimetti il numero senza virgolette.

<details>
<summary>Suggerimento</summary>

Qui nessuno ti chiede niente: i dati li scrivi tu nel codice, nella fase di raccolta dati. Ripassa la dispensa [Variabili](https://kb-aiwd.andreadev237.workers.dev/lezioni/js-variabili#strings), parte "Stringhe, concatenazione e template literal". Il backtick: su Mac Opt+9, su Windows Alt+96 con il tastierino numerico.

</details>

### 02 · Il conto alla romana

*`prompt`, `parseInt`, `.toFixed()`.*

- **Obiettivo**: a fine cena si divide il conto in parti uguali, con 10 € di mancia per il cameriere. Chiedi con `prompt` il totale del conto (in euro, senza centesimi) e quante persone siete. Aggiungi la mancia al totale, dividi e mostra con `alert` la quota di ognuno, con due decimali: `A testa: 36.67 €`.
- **Come verifichi**:
  - 100 € e 3 persone → `A testa: 36.67 €`;
  - 70 € e 4 persone → `A testa: 20.00 €`;
  - 50 € e 2 persone → `A testa: 30.00 €`;
  - se esce una cifra enorme, guarda con `typeof` il tipo di quello che ti restituisce `prompt`.

<details>
<summary>Suggerimento</summary>

`prompt` restituisce sempre una stringa, e il `+` tra una stringa e un numero attacca invece di sommare. La mancia è un dato che conosci già: preparala nella prima fase. Dispensa [Condizioni](https://kb-aiwd.andreadev237.workers.dev/lezioni/js-condizioni#number), parte "Da stringa a numero", e dispensa [Variabili](https://kb-aiwd.andreadev237.workers.dev/lezioni/js-variabili#properties) per `.toFixed()`.

</details>

### 03 · La valigia

*`if`, operatori di confronto.*

- **Obiettivo**: il biglietto aereo costa 36 €. Chiedi quanto pesa la valigia in kg. Se supera i 23 kg, si pagano 20 € di supplemento. Stampa in console il prezzo finale: `Prezzo del biglietto: 56 €`.
- **Come verifichi**:
  - 18 → `Prezzo del biglietto: 36 €`;
  - 23 → `Prezzo del biglietto: 36 €` (23 kg non supera 23 kg);
  - 24 → `Prezzo del biglietto: 56 €`.

<details>
<summary>Suggerimento</summary>

Prepara il prezzo di partenza prima dell'`if`: l'`if` lo cambia solo quando serve, e l'output resta uno solo. Per il caso dei 23 kg rileggi la differenza tra `>` e `>=`. Dispensa [Condizioni](https://kb-aiwd.andreadev237.workers.dev/lezioni/js-condizioni#comparisons), parte "Operatori di confronto".

</details>

### 04 · Testa o croce

*`Math.random()`, `if`/`else`.*

- **Obiettivo**: prima della partita si tira una moneta per decidere chi comincia. Il programma pesca un numero a caso con `Math.random()`: se è minore di 0.5 esce `Testa`, altrimenti `Croce`. Mostra il risultato con `alert` e stampa in console il numero pescato.
- **Come verifichi**:
  - premi F5 più volte: escono sia `Testa` sia `Croce`;
  - ogni volta confronta con la console: con 0.27 deve uscire `Testa`, con 0.81 `Croce`.

<details>
<summary>Suggerimento</summary>

Qui l'utente non scrive niente: il dato lo "raccoglie" `Math.random()`. Ti serve un numero con la virgola tra 0 e 1, quindi niente `Math.floor`. Dispensa [Condizioni](https://kb-aiwd.andreadev237.workers.dev/lezioni/js-condizioni#random), parte "Numeri casuali".

</details>

### 05 · Che giorno è?

*Confronto tra stringhe, `||`.*

- **Obiettivo**: chiedi che giorno della settimana è oggi. Se l'utente risponde `sabato` o `domenica`, mostra con `alert` il messaggio `Buon weekend!`, altrimenti `Buon lavoro`.
- **Come verifichi**:
  - `sabato` → `Buon weekend!`;
  - `domenica` → `Buon weekend!`;
  - `mercoledì` → `Buon lavoro`;
  - `Sabato` con la maiuscola → `Buon lavoro`. Sai dire perché? Per ora va bene così.

<details>
<summary>Suggerimento</summary>

Basta un solo `if`, con due confronti nella stessa condizione. Quale operatore logico vuol dire "oppure"? Dispensa [Condizioni](https://kb-aiwd.andreadev237.workers.dev/lezioni/js-condizioni#logical), parte "Operatori logici".

</details>

### 06 · Il login

*Due `prompt`, `&&`.*

- **Obiettivo**: chiedi lo username e poi la password, con due `prompt`. Se sono `admin` e `1234`, mostra con `alert` il messaggio `Login effettuato`, altrimenti `Credenziali errate`. È un gioco: in un sito vero le password non si scrivono mai nel codice.
- **Come verifichi**:
  - `admin` e `1234` → `Login effettuato`;
  - `Admin` e `1234` → `Credenziali errate`;
  - `admin` e `12345` → `Credenziali errate`;
  - `ospite` e `1234` → `Credenziali errate`.

<details>
<summary>Suggerimento</summary>

Devono essere giusti tutti e due i dati. E la password: anche se scrivi `1234`, che tipo di dato ti restituisce `prompt`? Confrontala con un valore dello stesso tipo. Dispensa [Condizioni](https://kb-aiwd.andreadev237.workers.dev/lezioni/js-condizioni#logical), parte "Operatori logici".

</details>

### 07 · Le montagne russe

*`isNaN`, `&&` e `||` nello stesso programma.*

- **Obiettivo**: per salire sulle montagne russe servono almeno 140 cm di altezza e almeno 14 anni. Chiedi l'altezza in cm e l'età. Mostra con `alert` `Puoi salire!` oppure `Mi dispiace, non puoi salire`. Se uno dei due dati non è un numero, il messaggio è `Dati non validi`.
- **Come verifichi**:
  - 150 e 15 → `Puoi salire!`;
  - 140 e 14 → `Puoi salire!` (i minimi valgono);
  - 139 e 30 → `Mi dispiace, non puoi salire`;
  - 175 e 13 → `Mi dispiace, non puoi salire`;
  - `alto` e 15 → `Dati non validi`;
  - 150 e `quindici` → `Dati non validi`.

<details>
<summary>Suggerimento</summary>

Prima controlla i dati, poi le regole: il primo ramo vero vince. Ti servono `isNaN` e due operatori logici diversi, uno per "almeno uno dei due non è un numero" e uno per "tutte e due le regole". Dispensa [Condizioni](https://kb-aiwd.andreadev237.workers.dev/lezioni/js-condizioni#number), parti "Da stringa a numero" e "Operatori logici".

</details>

### 08 · Il parcheggio

*Catena `if`/`else if`/`else`.*

- **Obiettivo**: il parcheggio costa 5 € fino a 2 ore, 10 € fino a 5 ore, 15 € oltre le 5 ore. Chiedi quante ore resta l'auto e stampa in console `Da pagare: 10 €`. Se l'utente non scrive un numero, stampa `Scrivi il numero di ore`.
- **Come verifichi**:
  - 1 → `Da pagare: 5 €`;
  - 2 → `Da pagare: 5 €`;
  - 3 → `Da pagare: 10 €`;
  - 5 → `Da pagare: 10 €`;
  - 6 → `Da pagare: 15 €`;
  - `tre` → `Scrivi il numero di ore`.

<details>
<summary>Suggerimento</summary>

Una catena di `if`, `else if` ed `else`: si ferma al primo ramo vero. In che ordine metti i controlli perché 2 ore costino 5 € e non 10 €? Dispensa [Condizioni](https://kb-aiwd.andreadev237.workers.dev/lezioni/js-condizioni#if), parte "if, else e catene di condizioni".

</details>

### 09 · Come mi vesto?

*`if` dentro un `if`.*

- **Obiettivo**: chiedi la temperatura esterna. Se è sotto i 15 °C, chiedi anche se piove (si risponde `si` o `no`, senza accento): se piove il messaggio è `Metti l'impermeabile`, altrimenti `Metti la giacca`. Da 15 °C in su il messaggio è `Vai leggero`, e la domanda sulla pioggia **non** compare. Mostra il messaggio con `alert`.
- **Come verifichi**:
  - 22 → `Vai leggero`, con una sola domanda;
  - 15 → `Vai leggero`, con una sola domanda;
  - 8 e `si` → `Metti l'impermeabile`;
  - 8 e `no` → `Metti la giacca`;
  - 14 e `si` → `Metti l'impermeabile`.

<details>
<summary>Suggerimento</summary>

La seconda domanda serve solo quando fa freddo, quindi si scrive dentro il ramo del freddo: un `if` dentro un altro `if`. Va bene se una parte della raccolta dati finisce lì. Dispensa [Condizioni](https://kb-aiwd.andreadev237.workers.dev/lezioni/js-condizioni#nested), parte "if annidati".

</details>

### 10 · Il bancomat

*`if` annidati e controllo dei dati.*

- **Obiettivo**: chiedi il saldo del conto e quanto vuoi prelevare. Prima controlla che l'importo sia maggiore di 0: se non lo è, il messaggio è `Importo non valido`. Se l'importo è valido e il saldo basta, il messaggio è `Prelievo effettuato. Nuovo saldo: 300 €`; se il saldo non basta, `Saldo insufficiente`. Mostra il messaggio con `alert`.
- **Come verifichi**:
  - saldo 500 e prelievo 200 → `Prelievo effettuato. Nuovo saldo: 300 €`;
  - 500 e 500 → `Prelievo effettuato. Nuovo saldo: 0 €`;
  - 500 e 600 → `Saldo insufficiente`;
  - 500 e 0 → `Importo non valido`;
  - 500 e -50 → `Importo non valido`;
  - 500 e `cento` → `Importo non valido`.

<details>
<summary>Suggerimento</summary>

Due controlli, uno dentro l'altro: il secondo ha senso solo se il primo è passato. Per il caso `cento`, prova in console `NaN > 0` e `NaN <= 0`: cosa noti? Dispensa [Condizioni](https://kb-aiwd.andreadev237.workers.dev/lezioni/js-condizioni#nested), parte "if annidati".

</details>

---

## Bonus (facoltativi)

Solo se hai finito le dieci tracce. Stesse regole: STEPS, quattro fasi, doppio clic.

### Bonus 1 · La pagella

- **Obiettivo**: chiedi un voto da 1 a 10. Mostra con `alert` `Insufficiente` sotto il 6, `Sufficiente` per 6 e 7, `Buono` per 8 e 9, `Ottimo` per 10. Se il voto non è un numero o è fuori da 1-10, il messaggio è `Voto non valido`.
- **Come verifichi**: 5 → `Insufficiente`; 6 e 7 → `Sufficiente`; 8 e 9 → `Buono`; 10 → `Ottimo`; 0, 11 e `otto` → `Voto non valido`.

<details>
<summary>Suggerimento</summary>

Il controllo del voto non valido va per primo. "Fuori da 1-10" sono due confronti: quale operatore logico li unisce? Dispensa [Condizioni](https://kb-aiwd.andreadev237.workers.dev/lezioni/js-condizioni#logical).

</details>

### Bonus 2 · La tessera fedeltà

- **Obiettivo**: chiedi il prezzo di un prodotto (in euro, senza centesimi) e se il cliente ha la tessera fedeltà (`si` o `no`). Con la tessera c'è uno sconto del 10%. Mostra con `alert` `Prezzo da pagare: 40.50 €`, sempre con due decimali.
- **Come verifichi**: 45 e `si` → `Prezzo da pagare: 40.50 €`; 45 e `no` → `Prezzo da pagare: 45.00 €`; 100 e `si` → `Prezzo da pagare: 90.00 €`.

<details>
<summary>Suggerimento</summary>

Il 10% di un prezzo è il prezzo per 10 diviso 100. Come nella valigia: prepara il prezzo pieno, e l'`if` lo cambia solo se c'è la tessera. Dispensa [Variabili](https://kb-aiwd.andreadev237.workers.dev/lezioni/js-variabili#numbers), parte "Numeri ed espressioni".

</details>

---

## Per ripassare

- Dispensa [Variabili](https://kb-aiwd.andreadev237.workers.dev/lezioni/js-variabili) e dispensa [Condizioni](https://kb-aiwd.andreadev237.workers.dev/lezioni/js-condizioni).
- In tutte e due, il capitolo "STEPS e quattro fasi" ha un programma completo da prendere come modello per la struttura.

Se usi l'AI, il file `AGENTS.md` la fa lavorare da tutor: ti fa domande e ti indica dove guardare, senza darti la soluzione.
