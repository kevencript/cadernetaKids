const express = require('express');
const app = express();

app.get('/larissa', (req, res) => {
    res.send({ hi:'LarissaEmanuella fila da puta!' });
})

const PORT = process.env.PORT || 5000;

app.listen(PORT);