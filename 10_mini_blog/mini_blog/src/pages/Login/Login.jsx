import style from './Login.module.css'
//import
import { useEffect, useState } from "react";
import { useAuthentication } from '../../hook/useAuthentication'

export default function Login() {
  // * inicio: instancia e utilização do hooks
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login, error: authError, loading } = useAuthentication();

  // * funcoes: 
  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    const user = {
      email,
      password,
    };

    const res = await login(user);

    console.log(res);
  };
  // * pegando de api
  useEffect(() => {
    console.log(authError);
    if (authError) {
      setError(authError);
    }
  }, [authError]);

 // * renderizar e componentizar
  return (
    <div className={style.container_login}>
      <h1>Login</h1>
      <form 
      onSubmit={handleSubmit}
      className={style.form}>
        <label>
          <span>E-mail:</span>
          <input 
          type="email"
          name="email"
          required
          placeholder='E-mail do Usuário'
          onChangeCapture={(e) => setEmail(e.target.value)}
          value={email}
          />
        </label>
        <label>
          <span>Senha:</span>
          <input
           type="password"
           name="password"
           required
           placeholder='Insira a senha'
           onChange={(e) => setPassword(e.target.value)}
           value={password}
           />
        </label>
          Esqueceu a senha? 
        {/* condição para visualiza botao :*/} 
         {!loading && <button>Login</button>}
         {loading && ( 
        <button>Aguarde...</button>
        )}
        {error && <p className='error'>{error}</p>}
      </form>
    </div>
  )
}
