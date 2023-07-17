import { useAuthentication } from '../../hook/useAuthentication'
import style from './Register.module.css'
import {useState,useEffect} from 'react'
export default function Register() {
  console.log(useEffect)
  /* 
  * inicio:
   */
  // * useState / instancia Local
  const [displayName,setDisplayName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [confirmPassword,setConfirmPassword] = useState('')
  const [error,setError] = useState(null)
  // * instanciando hook personalizado :
  const { createUser, error: authError, loading} = useAuthentication();

    // * Enviar dados:
    const handleSubmit = async (e) => {
      // * prende submit
      e.preventDefault()
      // zera erro
      setError('')

      // Validação:
      const user = {
        displayName,email,password
      }
      if(password !== confirmPassword){
        setError("As senhas precisa ser iguais!")
        return
      }
      //  pegando resposta:
      const res = await createUser(user)

      //confirma se usuario foi criado 
      console.log(user)
    }

    // * fazer map 
    useEffect(() => {
      if(authError){
        setError(authError)
      }
    },[authError])
  /*  
  *Fim 
  */
  return (
    /* Cadastro - formulario */
    <div className={style.container_register}>
     <h1>Registro</h1>
     <h3>Crie um Usuário e Post no Blog</h3>
     <hr/>
    <form  onSubmit={handleSubmit} className={style.form}>
      <label>
        <span>
          Nome:
          </span>
          <input 
          type="text"
          name="displayName"
          required
          placeholder='Nome de Usuário'
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)} />
      </label>
      <label>
        <span>
          E-mail:
          </span>
          <input 
          type="email"
          required
          placeholder='Digite seu E-mail..' 
          value={email}
          onChange={(e) => setEmail(e.target.value)}/>
      </label>
      <label>
        <span>
          Senha:
          </span>
          <input 
          type="password"
          name="password"
          required
          placeholder='Digite sua senha...' 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="error">{error}</p>}
      </label>
      <label>
        <span>
         confirme sua Senha:
         </span>
          <input 
          type="password"
          name="ComfirmPassword"
          required
          placeholder='Confirme a sua senha...' 
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}/>
          {error && <p className="error">{error}</p>}
      </label>
      {!loading && <button className={style.btn} >Cadastrar</button>}
      {loading && <button className={style.btn} disabled>Aguarde ...</button>}
    </form>
    </div>
  )
}
