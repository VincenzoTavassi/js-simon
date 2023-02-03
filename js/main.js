const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const titleEl = document.getElementById("title");


// data attuale e data target 
const dataOdierna = new Date().getTime();
const dataTarget = new Date("2023-02-06 9:30").getTime();

// definisco tempo mancante alla data target in millisecondi 
const tempoMancante = dataTarget - dataOdierna;

// secondi totali che mancano alla data (conversione da ms)
let secondiTotali = tempoMancante / 1000;

// invoco funzione la prima volta per evitare di mostrare la partenza da zero
mostraTimer()

// uso setInterval per invocare la funzione una volta ogni secondo e aggiornare il timer
const clockLezione = setInterval(mostraTimer, 1000);

/*  
 * FUNZIONE PER STAMPARE IL COUNT DOWN PER LA DATA BERSAGLIO
 * 
*/
function mostraTimer() {
    secondiTotali--
    // conversioni in timer 
    let secondi = parseInt(secondiTotali % 60);
    secondsEl.innerHTML = (secondi < 10) ? "0" + secondi : secondi;
    let minuti = parseInt((secondiTotali / 60) % 60);
    minutesEl.innerHTML = (minuti < 10) ? "0" + minuti : minuti;
    let ore = parseInt((secondiTotali / 60 / 60) % 24);
    hoursEl.innerHTML = (ore < 10) ? "0" + ore : ore;
    let giorni = parseInt((secondiTotali / 60 / 60 / 24));
    daysEl.innerHTML = (giorni < 10) ? "0" + giorni : giorni;

    if (secondiTotali <= 0) {
        clearInterval(clockLezione);
        confetti({
            particleCount: 100,
            spread: 160
        });
    }
}