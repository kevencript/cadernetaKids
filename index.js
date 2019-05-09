const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send( 'Thats it bitch!!' );
})

app.get('/api', (req, res) => {

    res.send('Im at the API!');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT);