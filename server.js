const express = require('express');
const path = require('path');

const app = express(); // Express, NON Electron
const PORT = 5001;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server avviato su http://localhost:${PORT}`);
});