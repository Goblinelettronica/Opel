const express = require('express');
const path = require('path');
const { exec } = require("child_process");

const app = express(); // Express, NON Electron
const PORT = 5001;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
const url = `http://localhost:${PORT}`;

// Comando per avviare Chromium (Linux)
const chromiumCommand = `chromium-browser --new-window ${url}`;

// Per Windows, sostituisci con il percorso di Chrome/Chromium
// const chromiumCommand = `"C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe" --new-window ${url}`;

exec(chromiumCommand, (err) => {
    if (err) {
        console.error("Errore nell'apertura di Chromium:", err);
    }
});

app.listen(PORT, () => {
    console.log(`Server avviato su http://localhost:${PORT}`);
    exec(chromiumCommand, (err) => {
        if (err) {
            console.error("Errore nell'apertura di Chromium:", err);
        }
    });
});


