const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.get('/api/test', (req, res) => { //app.get is an API endpoint that listens for GET request. This path has certain data and is listening for the user to try and access it.
    res.json({message: 'API is working! '});
});

const ItemRouter = require('./routes/elements')

app.use('/api/elements', ItemRouter)

app.listen(PORT, () => {
    console.log('Server is running on http:://localhost:',PORT)
});


// On the frontend, fetch('/api/test') makes a GET request to /api/test.

// fetch is inherently a GET request unless specified otherwise.
// On the backend, app.get('/api/test') sets up the server to:

// Listen for GET requests at /api/test.
// Respond to those requests with JSON:
// json




