// App.js
import { useState } from 'react';
import './App.css';

export default function App() {
  const opcoes = ['Pedra', 'Papel', 'Tesoura'];
  
  const imagens = {
    Pedra: './imagens/pedra.png',
    Papel: './imagens/papel.png',
    Tesoura: './imagens/tesoura.png'
  };

  const [escolhaJogador, setEscolhaJogador] = useState('');
  const [escolhaComputador, setEscolhaComputador] = useState('');
  const [resultado, setResultado] = useState('');
  const [placarJogador, setPlacarJogador] = useState(0);
  const [placarComputador, setPlacarComputador] = useState(0);

  const jogar = (escolha) => {
    const computador = opcoes[Math.floor(Math.random() * 3)];
    setEscolhaJogador(escolha);
    setEscolhaComputador(computador);

    if (escolha === computador) {
      setResultado('Empate!');
    } else if (
      (escolha === 'Pedra' && computador === 'Tesoura') ||
      (escolha === 'Papel' && computador === 'Pedra') ||
      (escolha === 'Tesoura' && computador === 'Papel')
    ) {
      setResultado('Você ganhou!');
      setPlacarJogador(placarJogador + 1);
    } else {
      setResultado('Computador ganhou!');
      setPlacarComputador(placarComputador + 1);
    }
  };

  const reiniciar = () => {
    setEscolhaJogador('');
    setEscolhaComputador('');
    setResultado('');
    setPlacarJogador(0);
    setPlacarComputador(0);
  };

  return (
    <div className="container">
      <h1>Jokenpô</h1>

      <div className="placar">
        <div className="placar-item">
          <div className="placar-label">Você</div>
          <div className="placar-valor placar-jogador">{placarJogador}</div>
        </div>
        <div className="placar-vs">×</div>
        <div className="placar-item">
          <div className="placar-label">Comp</div>
          <div className="placar-valor placar-computador">{placarComputador}</div>
        </div>
      </div>

      <div className="opcoes">
        <button onClick={() => jogar('Pedra')} className="botao-opcao">
          <img src={imagens.Pedra} alt="Pedra" className="imagem-opcao" />
          <div>Pedra</div>
        </button>
        <button onClick={() => jogar('Papel')} className="botao-opcao">
          <img src={imagens.Papel} alt="Papel" className="imagem-opcao" />
          <div>Papel</div>
        </button>
        <button onClick={() => jogar('Tesoura')} className="botao-opcao">
          <img src={imagens.Tesoura} alt="Tesoura" className="imagem-opcao" />
          <div>Tesoura</div>
        </button>
      </div>

      {resultado && (
        <div className="resultado-container">
          <div className="escolhas">
            <div className="escolha">
              <div className="escolha-label">Você escolheu:</div>
              <img src={imagens[escolhaJogador]} alt={escolhaJogador} className="escolha-imagem" />
              <div className="escolha-texto">{escolhaJogador}</div>
            </div>
            <div className="vs">VS</div>
            <div className="escolha">
              <div className="escolha-label">Computador escolheu:</div>
              <img src={imagens[escolhaComputador]} alt={escolhaComputador} className="escolha-imagem" />
              <div className="escolha-texto">{escolhaComputador}</div>
            </div>
          </div>
          <div className={`resultado-texto ${
            resultado === 'Você ganhou!' ? 'vitoria' : 
            resultado === 'Empate!' ? 'empate' : 'derrota'
          }`}>
            {resultado}
          </div>
        </div>
      )}

      <button onClick={reiniciar} className="botao-reiniciar">
         Reiniciar Partida
      </button>
    </div>
  );
}