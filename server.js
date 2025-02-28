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

setTimeout(() => {
    exec(`chromium-browser --new-window ${url}`, (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
    });
}, 10000); // 10000 ms = 5 secondi

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});


