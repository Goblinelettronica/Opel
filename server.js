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
const chromiumCommand =`chromium-browser --new-window ${url}`

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});


