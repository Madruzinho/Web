const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
const port = 3000;

app.post('/geotech', (req, res) => {
    const{forma} = req.body;
    console.log("Recebido: ", req.body);

    if(forma === 'circulo') {
        return res.json({
            formula: 'Circulo'
        })
    } else if(forma === 'retangulo') {
        return res.json({
            formula: 'Retangulo'
        })
    } return res.json({
            formula: 'Triangulo'
    })

});

app.listen(port, () => {
    console.log(`sevidor rodando em http://localhost:${port}`);
});