// Imports.
const https = require('https');
const crypto = require('crypto');
const fs = require('fs');

// Constants.
const start = Date.now();
const googleURL = 'https://www.google.com';

// Make a request.
function doRequest() {
    https
        .request(googleURL, res => {
            res.on('data', () => {});
            res.on('end', () => console.log(`Google: ${Date.now() - start}`));
        })
        .end();
}

function doHash() {
    // Call pbkdf2.
    crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
        console.log(`Hash: ${Date.now() - start}`);
    });
}

doRequest();

fs.readFile('multitask.js', 'utf8', () => console.log(`FS: ${Date.now() - start}`));

doHash();
doHash();
doHash();
doHash();
