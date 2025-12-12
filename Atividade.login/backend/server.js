const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
const port = 3000;

app.get('/', (req, res) => {
    res.send("hello world");
});

app.post('/login', (req, res) => {
    // desestruturaçao
    const {usuario, senha} = req.body;
    console.log("Recebido: ", req.body);

    if(usuario === 'admin' && senha === '123') {
        return res.json({
            status: 'OK',
            mensagem: 'Login autorizado'
        })
    } return res.json({
        status: 'erro',
        mensagem: 'Usuario ou senha incorretos!'
    })
});

app.listen(port, () => {
    console.log(`sevidor rodando em http://localhost:${port}`);
});

