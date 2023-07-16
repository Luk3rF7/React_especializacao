import style from './Login.module.css'
export default function Login() {
  return (
    <div className={style.container_login}>
      <h1>Login</h1>
      <form className={style.form}>
        <label>
          <span>E-mail:</span>
          <input type="email" />
        </label>
        <label>
          <span>Senha:</span>
          <input type="password" />
        </label>
          Esqueceu a senha? 
        <label>
        <button>Login</button>
        </label>
      </form>
    </div>
  )
}
