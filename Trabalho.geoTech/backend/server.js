// server.js - BACKEND
// Este é o servidor que vai receber os dados e fazer os cálculos

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/area', (req, res) => {
  
  // Mostra no console o que chegou do frontend
  console.log('Recebi esses dados:', req.body);
  
  // Pega os dados que vieram do frontend
  const forma = req.body.forma;
  const raio = req.body.raio;
  const largura =  req.body.largura;
  const altura =  req.body.altura;
  const base =  req.body.base;
  
  let valor;

  // SE for círculo
  if (forma === "Circulo") {
    const Pi = Math.PI;
    valor = raio * raio * Pi;
  }
  
  // SE for retângulo
  if (forma === "Retangulo") {
    valor = largura * altura;
  }
  
  // SE for triângulo
  if (forma === "Triangulo") {
    valor = (base * altura) / 2;
  }
  
  // Envia a resposta de volta para o frontend
  res.json({
    forma: forma,
    resultado: valor
  });
  
  console.log('Enviei o resultado:', valor);
});

app.listen(3001, () => {
  console.log(' Servidor funcionando na porta 3001');
});