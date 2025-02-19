import { useState } from "react"
import passwordImg from './assets/password.png'

function App() {
  const [password, setPassword] = useState("")
  const [copyText, setCopyText] = useState("Copiar")
  const [passwordSize, setPasswordSize] = useState(8)

  function generate() {
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const specialChars = "!@#$%&"
    let newPassword = ""

    newPassword += specialChars[Math.floor(Math.random() * specialChars.length)];

    const allCharacters = lowerCase + upperCase + numbers;

    for (let i = 1; i < passwordSize; i++) {
      const position = Math.floor(Math.random() * allCharacters.length);
      newPassword += allCharacters[position];
    }
    setPassword(newPassword)
    setCopyText("Copiar")
  }

  function copyToClipBoard() {
    window.navigator.clipboard.writeText(password)
    setCopyText("Copiado!")
  }

  return (
    <div>
      <img src={passwordImg} alt="password" />
      <h1>Gerador de Senha</h1>
      <div>
        <label htmlFor="passwordSize">Tamanho:</label>
        <input 
          type="number" 
          id="passwordSize" 
          min={1} 
          max={20}
          value={passwordSize}
          onChange={(ev) => setPasswordSize(ev.target.value)}
        />
      </div>
      <button onClick={generate}>Gerar senha de {passwordSize} caracteres !</button>

      
      {password && (
        <button onClick={copyToClipBoard}>{copyText}</button>
      )}

      <div>{password}</div>
    </div>
  )
}

export default App
