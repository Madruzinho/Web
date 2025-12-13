// App.jsx - FRONTEND
import { useState } from "react";
import "./App.css";

function App() {
  // Estados para guardar informações
  const [resultado, setResultado] = useState(null);
  const [raio, setRaio] = useState(0);
  const [largura, setLargura] = useState(0);
  const [altura, setAltura] = useState(0);
  const [base, setBase] = useState(0);

  const [menuCirculo, setMenuCirculo] = useState(false);
  const [menuRetangulo, setMenuRetangulo] = useState(false);
  const [menuTriangulo, setMenuTriangulo] = useState(false);

  // Endereço do nosso servidor backend
  const SERVIDOR = "http://localhost:3001/area";

  // FUNÇÃO: Calcular área do círculo
  const calcularCirculo = async () => {
    // Envia o raio para o servidor COM A FORMA
    const resposta = await fetch(SERVIDOR, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ forma: "Circulo", raio: raio })
    });
    
    // Pega a resposta do servidor
    const dados = await resposta.json();
    setResultado(dados.resultado);
  };

  // FUNÇÃO: Calcular área do retângulo
  const calcularRetangulo = async () => {
    // Envia largura e altura para o servidor COM A FORMA
    const resposta = await fetch(SERVIDOR, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ forma: "Retangulo", largura: largura, altura: altura })
    });
    
    // Pega a resposta do servidor
    const dados = await resposta.json();
    setResultado(dados.resultado);
  };

  // FUNÇÃO: Calcular área do triângulo
  const calcularTriangulo = async () => {
    // Envia base e altura para o servidor COM A FORMA
    const resposta = await fetch(SERVIDOR, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ forma: "Triangulo", base: base, altura: altura })
    });
    
    // Pega a resposta do servidor
    const dados = await resposta.json();
    setResultado(dados.resultado);
  };

  // FUNÇÃO: Mostrar o menu correto quando selecionar uma forma
  const menu = (forma) => {
    // Esconde todos os menus
    setMenuCirculo(false);
    setMenuRetangulo(false);
    setMenuTriangulo(false);
    setResultado(null);
    
    // Mostra o menu escolhido
    if (forma === "Circulo") setMenuCirculo(true);
    if (forma === "Retangulo") setMenuRetangulo(true);
    if (forma === "Triangulo") setMenuTriangulo(true);
  };

  return (
    <div className="container">
      <h1>GEOTECH</h1>
      
      <div className="opcoes">
        <select defaultValue="" onChange={(e) => menu(e.target.value)}>
          <option value="" disabled>Selecione uma forma</option>
          <option value="Circulo">Círculo</option>
          <option value="Retangulo">Retângulo</option>
          <option value="Triangulo">Triângulo</option>
        </select>
      </div>

      {menuCirculo && (
        <div className="escolhas">
          <input
            type="number"
            onChange={(e) => setRaio(Number(e.target.value))}
            placeholder="Raio (cm)"
          />
          <button onClick={calcularCirculo}>Calcular</button>
        </div>
      )}

      {menuRetangulo && (
        <div className="escolhas">
          <input
            type="number"
            onChange={(e) => setLargura(Number(e.target.value))}
            placeholder="Largura (cm)"
          />
          <input
            type="number"
            onChange={(e) => setAltura(Number(e.target.value))}
            placeholder="Altura (cm)"
          />
          <button onClick={calcularRetangulo}>Calcular</button>
        </div>
      )}

      {menuTriangulo && (
        <div className="escolhas">
          <input
            type="number"
            onChange={(e) => setBase(Number(e.target.value))}
            placeholder="Base (cm)"
          />
          <input
            type="number"
            onChange={(e) => setAltura(Number(e.target.value))}
            placeholder="Altura (cm)"
          />
          <button onClick={calcularTriangulo}>Calcular</button>
        </div>
      )}

      <div className="resultado-container">
        {resultado !== null && (
          <div className="resultado">
            Resultado: {resultado.toFixed(2)} cm²
          </div>
        )}
      </div>
    </div>
  );
}

export default App;