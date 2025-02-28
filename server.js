const express = require('express');
const path = require('path');
const { exec } = require("child_process");
const http = require('http');


const app = express();
const PORT = 5001;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const url = `http://localhost:${PORT}`;
const chromiumCommand =`chromium-browser --new-window ${url}`    // Open Chromium browser when the server starts

app.listen(PORT, () => {
    console.log(`Server running on ${url}`);

    // Funzione per verificare quando il server è pronto
    const checkServer = () => {
        http.get(url, (res) => {
            if (res.statusCode === 200) {
                console.log("✅ Server pronto! Avvio Chromium...");
                exec(chromiumCommand);
            } else {
                console.log("🔄 Il server non è ancora pronto, riprovo...");
                setTimeout(checkServer, 500);
            }
        }).on("error", () => {
            console.log("🔄 Il server non è ancora pronto, riprovo...");
            setTimeout(checkServer, 500);
        });
    };

    checkServer(); // Avvia il controllo PRIMA di aprire Chromium
});
