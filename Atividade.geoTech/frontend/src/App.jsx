import { useState } from 'react'
import './App.css'
import { use } from 'react';

function App() {
  const opcoes = ['Circulo', 'Retangulo', 'Triangulo'];

  const [opcaoFormula, setOpcaoFormula] = useState('');
  const [resultado, setResultado] = useState(0);

  const [Raio, setRaio] = useState(0);
  const [Retangulo, setRetangulo] = useState(0);
  const [Triangulo, setTriangulo] = useState(0);

  const [menuCirculo, setMenuCirculo] = useState('');
  const [menuRetangulo, setMenuRetangulo] = useState('');
  const [menuTriangulo, setMenuTriangulo] = useState('');



  const menu = (forma) => {
    setMenuCirculo('');
    setMenuRetangulo('');
    setMenuTriangulo('');
    if (forma === 'Circulo') {
      setMenuCirculo(1);
    }
    if (forma === 'Retangulo') {
      setMenuRetangulo(1);
    }
    if (forma === 'Triangulo') {
      setMenuTriangulo(1);
    }
  }

  return (
    <div className="container">
      <h1> GEOTECH </h1>
      <div className='opcoes'>
        <select onChange={(e) => menu(e.target.value)}>
          <option value="Circulo"> Circulo </option>
          <option value="Retangulo"> Retangulo </option>
          <option value="Triangulo"> Triangulo </option>
        </select>
      </div>

      <div>
        {menuCirculo && (
          <div>
            <input type='number'
                   onChange={setRaio}></input>
            <button onClick={() => areaCirculo({Raio})}>Calcular</button>
          </div>
        )}

        {menuRetangulo && (
          <div>
            <input type='number'
                   onChange={setRaio}></input>
            <input type='number'
                    onChange={set}>
            </input>
            <button onClick={() => areaCirculo({Raio})}>Calcular</button>
          </div>
        )}

        {menuTriangulo && (
          <div>
            <input></input>
            <input></input>
            <button>Calcular</button>
          </div>
        )}
      </div>

    </div>
  )
}

export default App
