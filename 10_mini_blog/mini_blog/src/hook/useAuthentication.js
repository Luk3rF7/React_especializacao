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
    //entra cleanUp :
    checkIfIsCancelled()
    // status login :
    setLoading(true)
    try{
        const { user} = await createUserWithEmailAndPassword(
          auth,
          data.email,
          data.password
        )
        await updateProfile(user,{
          displayName:data.displayName
        })
        return user
    }catch(error){
      console.log(error.message)
      console.log(typeof error.message)
    }
    setLoading(false)
  }


  useEffect(() => { 
    return () => setCancelled(true)
  },[])
  return {
    auth,
    createUser,
    error,
    loading
  }
}
