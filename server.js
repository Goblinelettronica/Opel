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

app.listen(PORT, () => {
    console.log(`Server running on ${url}`);
});
