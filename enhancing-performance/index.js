// Worker mode.
const crypto = require('crypto');
const express = require('express');
const app = express();

// Web worker threads.
const { Worker } = require('webworker-threads');

// Routes.
app.get('/', (req, res) => {
    const worker = new Worker(function() {
        this.onmessage = function() {
            let counter = 0;

            // Simulate work in worker thread.
            while (counter < 1e9) {
                counter++;
            }

            // Post back to app.
            postMessage(counter);
        };
    });

    // Read data from worker.
    worker.onmessage = function({ data }) {
        // Console log.
        console.log({ data });

        // Send.
        res.send({ data });
    };

    // Send data to worker.
    worker.postMessage();
});

app.get('/fast', (req, res) => {
    res.send('That was fast!');
});

// Listen.
app.listen('3000', () => {
    console.log('Listening on port 3000');
});
