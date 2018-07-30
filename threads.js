// Update libuv thread pool size.
process.env.UV_THREADPOOL_SIZE = 2;

// Imports.
const crypto = require('crypto');

// Constants.
const start = Date.now();

// Call pbkdf2.
crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log(`1: ${Date.now() - start}`);
});

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log(`2: ${Date.now() - start}`);
});

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log(`3: ${Date.now() - start}`);
});

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log(`4: ${Date.now() - start}`);
});

// By running a 5th pbkdf2 function we get a pause when running this file.
// This is because the first four calls occupy all four threads in the libuv pool.
// Threads 1&2 process on core 1 and threads 2&4 are assigned to core 2
crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log(`5: ${Date.now() - start}`);
});
