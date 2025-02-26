const Gpio = require('onoff').Gpio; // Importa la libreria onoff

const relayPin = new Gpio(17, 'in', 'both'); // Sostituisci 17 con il numero del tuo GPIO

// Funzione per gestire il cambiamento di stato
relayPin.watch((err, value) => {
    if (err) {
        console.error('Errore nella lettura del GPIO:', err);
        return;
    }
    console.log('Stato del relè:', value); // 0 o 1
});

// Funzione di pulizia al termine
process.on('SIGINT', () => {
    relayPin.unexport(); // Rilascia il GPIO
});
const relayInput = document.getElementById('relayInput');
const audio = document.getElementById('audio');

relayInput.addEventListener('change', function() {
    if (this.checked) {
        audio.play().catch(error => {
            console.error('Errore nella riproduzione audio:', error);
        });
    }
});