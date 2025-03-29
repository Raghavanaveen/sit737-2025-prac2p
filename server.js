const express = require('express');

const app = express();
const PORT = 3000;

// Homepage route - serves HTML directly
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Simple Express Server</title>
            <style>
                body { font-family: Arial, sans-serif; text-align: center; margin: 50px; }
                h1 { color: #333; }
                a { display: inline-block; margin-top: 10px; font-size: 18px; }
            </style>
        </head>
        <body>
            <h1>Welcome to My Express Server!</h1>
            <p>This is a simple Node.js server .</p>
            <a href="/about">Go to About Page</a>
        </body>
        </html>
    `);
});

// About route
app.get('/about', (req, res) => {
    res.send('<h1>About Page</h1><p>This is a simple Express.js app.</p>');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
