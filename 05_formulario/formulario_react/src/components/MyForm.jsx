import { useState } from 'react'
import './MyForm.css'
export default function MyForm({user}) {
  // gerenciamento de dados:
  const [name,setName] = useState(user ? user.name : '')
  const [email,setEmail] = useState(user ? user.email : '')
  const [bio,setBio] = useState(user ? user.bio : '')
  const [role,setRole] = useState(user ? user.role : '')

const handleName = (e) =>{
  setName(e.target.value);
}
console.log(name)
console.log(email)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enviando o formulário")
    console.log(name,email,bio)
    //validacao
    //envio
    //limpa formulario:
    setName("")
    setEmail("")
    setBio("")
  }

  return (
    <div>
      {/* 1 Criação de Form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
           type="text" 
           name="name" 
           placeholder='Digite o seu Nome..' 
          value={name}
          onChange={handleName} />
        </div>
        {/* 2 - label envolvemdo input */}
        <label >
          <span>E-mail:</span>
          <input 
          type="email"
           name='email' 
           placeholder="digite seu e-mail.."
           onChangeCapture={(e) => setEmail(e.target.value)}
           value={email} />
        </label>
            {/* text-area - bio ou msg */}
          <label>
            <span>Bio:</span>
            <textarea
             name="bio"
             placeholder="descrição da bios"
             onChangeCapture={(e) => setBio(e.target.value)} 
             value={bio}></textarea>
          </label>
          {/* select */}
          <label>
            <span>Função no sistema</span>
            <select 
            name="role"
            onChange={(e) => setRole((e.target.value))}
            value={role}>
              <option value="user">Usuário</option>
              <option value="editor">Editor</option>
              <option value="admin">Administrador</option>
            </select>
          </label>
          <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}