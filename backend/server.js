const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/test', (req, res) => {
    res.json({message: 'API is working! '});
});

const PORT = 8000;

app.listen(PORT, () => {
    console.log('Server is running on http:://localhost:',PORT)
});