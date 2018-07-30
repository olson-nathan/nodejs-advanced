// Worker mode.
const crypto = require('crypto');
const express = require('express');
const app = express();

// Routes.
app.get('/', (req, res) => {
    // Call pbkdf2.
    crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
        res.send('Hi there');
    });
});

app.get('/fast', (req, res) => {
    res.send('That was fast!');
});

// Listen.
app.listen('3000', () => {
    console.log('Listening on port 3000');
});
