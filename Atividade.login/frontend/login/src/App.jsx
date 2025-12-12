import { useState } from 'react'
import './App.css'

function App() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  async function logar() {
    const resp = await fetch("http://localhost:3000/login", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        usuario,
        senha
      })
    })

    const dados = await resp.json();
    setMensagem(dados.status + "-" + dados.mensagem);
  }



  return (

    <div style={{ padding: '20px', background: 'gray' }}>
      <h1>Login</h1>
      <br />
      <label>Usuario</label>
      <input 
        type="text"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}>
      </input>
      <br />
      <label>Senha</label>
      <input 
        type="password"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}>
      </input>
      <br />
      <button onClick={logar}>Logar</button>

      {mensagem &&
      <div>
          <br /> 
          <a>{mensagem}</a>
        </div>
      }


    </div>
  )
}

export default App;
