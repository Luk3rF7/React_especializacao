import { 
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut
} from 'firebase/auth'
/* db config */
import { db } from '../auth/firebase/config'
/*  utilização dos hooks */
import {useState,useEffect}  from 'react';

export const useAuthentication = () => {
  // instancia e useState
  const [error,setError] = useState(null)
  const [loading,setLoading] = useState(null)

  //clean up 
  //deal with memory leak
  const [cancelled,setCancelled] = useState(false)
  // * auth
  const auth = getAuth()

  // * função que vai checar fazer cleanUp:
  function checkIfIsCancelled() {
    if(cancelled){
      return;
    }
  }

  // * funcao de criar usuario:
   const createUser = async(data) => {
    // * cleanUp :
    checkIfIsCancelled()
    // * status login :
    setLoading(true)
    try{
        const { user} = await createUserWithEmailAndPassword(
          auth,
          data.email,
          data.password
        )
        await updateProfile(user,{
          displayName:data.displayName,
        })
        return user
    }catch(error){
      console.log(error.message)
      console.log(typeof error.message)
      // msg error
      let systemErrorMessage

      if(error.message.includes("Password")){
        systemErrorMessage = "A senha precisa conter pelo menos 6 caracteres! "
      }else if (error.message.includes("email-already")){
        systemErrorMessage = "E-mail ja Cadastrado!"
      }else {
        systemErrorMessage = "Ocorreu o erro,Por favor tente mais tarde!"
      }
     setError(systemErrorMessage)
    }
    setLoading(false)
  }
  // *  Login:
  const login = async (data) => {
    checkIfIsCancelled();

    setLoading(true);
    setError(false);

    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
    } catch (error) {
      console.log(error.message);
      console.log(typeof error.message);
      console.log(error.message.includes("user-not"));

      let systemErrorMessage;

      if (error.message.includes("user-not-found")) {
        systemErrorMessage = "Usuário não encontrado.";
      } else if (error.message.includes("wrong-password")) {
        systemErrorMessage = "Senha incorreta.";
      } else {
        systemErrorMessage = "Ocorreu um erro, por favor tenta mais tarde.";
      }

      console.log(systemErrorMessage);

      setError(systemErrorMessage);
    }

    console.log(error);

    setLoading(false);
  };
  // * logout:
  const logout = () => {
    checkIfIsCancelled();
    signOut(auth);
  }
  //* etapa cleanup
  useEffect(() => { 
    return () => setCancelled(true)
  },[])
  return {
    auth,
    createUser,
    error,
    loading,
    logout,
    login,
  }
}
