// Imports.
const https = require('https');

// Constants.
const start = Date.now();
const googleURL = 'https://www.google.com';

// Make a request.
function doRequest() {
    https
        .request(googleURL, res => {
            res.on('data', () => {});
            res.on('end', () => console.log(Date.now() - start));
        })
        .end();
}

doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
