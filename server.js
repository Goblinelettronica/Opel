const express = require('express');
const path = require('path');
const { exec } = require("child_process");

const app = express();
const PORT = 5001;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const url = `http://localhost:${PORT}`;

const chromiumCommand = `chromium-browser --new-window ${url}`;

const startChromium = () => {
    exec(chromiumCommand, (err) => {
        if (err) {
            console.error("Errore nell'apertura di Chromium:", err);
        }
    });
};

app.listen(PORT, () => {
    console.log(`Server avviato su http://localhost:${PORT}`);
    setTimeout(() => {
        startChromium();  // Avvia Chromium dopo 10 secondi
    }, 10000);  // 10 secondi in millisecondi
});

