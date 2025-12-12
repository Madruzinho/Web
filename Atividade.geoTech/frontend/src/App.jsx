import { useState } from "react";
import "./App.css";
import { use } from "react";

function App() {
  const [resultado, setResultado] = useState(null);

  const [Raio, setRaio] = useState(0);
  const [Largura, setLargura] = useState(0);
  const [Altura, setAltura] = useState(0);
  const [Base, setBase] = useState(0);

  const [menuCirculo, setMenuCirculo] = useState("");
  const [menuRetangulo, setMenuRetangulo] = useState("");
  const [menuTriangulo, setMenuTriangulo] = useState("");

  const areaCirculo = (Raio) => {
    const Pi = Math.PI;

    setResultado(Raio * Raio * Pi);
  };

  const areaRetangulo = (Largura, Altura) => {
    setResultado(Largura * Altura);
  };

  const areaTriangulo = (Base, Altura) => {
    setResultado((Base * Altura) / 2);
  };

  const menu = (forma) => {
    setMenuCirculo("");
    setMenuRetangulo("");
    setMenuTriangulo("");
    setResultado(null);
    if (forma === "Circulo") {
      setMenuCirculo(1);
    }
    if (forma === "Retangulo") {
      setMenuRetangulo(1);
    }
    if (forma === "Triangulo") {
      setMenuTriangulo(1);
    }
  };

  return (
    <div className="container">
      <h1> GEOTECH </h1>
      <div className="opcoes">
        <select defaultValue="" onChange={(e) => menu(e.target.value)}>
          <option value="" disabled>Selecione</option>
          <option value="Circulo"> Circulo </option>
          <option value="Retangulo"> Retangulo </option>
          <option value="Triangulo"> Triangulo </option>
        </select>
      </div>

      <div>
        {menuCirculo && (
          <div className="escolhas">
            <input
              type="number"
              onChange={(e) => setRaio(Number(e.target.value))}
              placeholder="Raio (cm)"
            ></input>
            <button onClick={() => areaCirculo(Raio)}>Calcular</button>
          </div>
        )}

        {menuRetangulo && (
          <div className="escolhas">
            <input
              type="number"
              onChange={(e) => setLargura(Number(e.target.value))}
              placeholder="Largura (cm)"
            ></input>
            <input
              type="number"
              onChange={(e) => setAltura(Number(e.target.value))}
              placeholder="Altura (cm)"
            ></input>
            <button onClick={() => areaRetangulo(Largura, Altura)}>
              Calcular
            </button>
          </div>
        )}

        {menuTriangulo && (
          <div className="escolhas">
            <input
              type="number"
              onChange={(e) => setBase(Number(e.target.value))}
              placeholder="Base (cm)"
            ></input>
            <input
              type="number"
              onChange={(e) => setAltura(Number(e.target.value))}
              placeholder="Altura (cm)"
            ></input>
            <button onClick={() => areaTriangulo(Base, Altura)}>
              Calcular
            </button>
          </div>
        )}

        <div className="resultado-container">

        {resultado !== null && (
          <div className="resultado">Resultado: {resultado.toFixed(2)}</div>
        )}
      </div>
      </div>
    </div>
  );
}

export default App;
