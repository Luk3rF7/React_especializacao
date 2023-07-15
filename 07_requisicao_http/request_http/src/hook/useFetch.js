import { useState,useEffect} from 'react';

// 4 custom hook
export const useFetch = (url) => {

  //useStates
  const [data,setData] = useState(null)
  const [config,setConfig] = useState(null)
  const [method,setMethod] = useState(null)
  const [callFetch,setCallFetch] = useState(false)
  //pegando id para excluir:
  const [itemId,setItemId] = useState(null)
  //configurando loading:
  const [loading,setLoading] = useState(false)
  //error
  const [error,setError] = useState(null)


  // config para reaproveitar hook
  const httpConfig = (data,method)=>{
    if(method === "POST"){
      setConfig({
        method,
        headers:{
          "Content-type": "application/json"
        },
        body: JSON.stringify(data)
      });
      setMethod(method)
    }else if(method === "DELETE")   {
      setConfig({
        method,
        headers:{
          "Content-type":"application/json",
        },
      });
      setItemId(data)
      setMethod(method)
    }
  }
    //pegando url
    useEffect(() => {

      //cb pra api
      const fetchApi = async () => {
        try{
          // loading:
          setLoading(true)
          //instancia da api
          const res = await fetch(url)
          const json = await res.json()
          //passando pro state
          setData(json)
          // fechando loading:?
          setLoading(false)
        }catch(error){
          setError("Houve algum erro ao Carregar os dados")
        }
      }
      //execute funcao
      fetchApi()
    },[url,callFetch]);

    //  area do post 
    useEffect(() => {
      const httpRequest = async () =>{
        if(method === "POST"){
          let fetchOptions  = [url,config]
        try{
          const res = await fetch(...fetchOptions)
          const json = await res.json();
          setCallFetch(json)
        }catch(e){
          console.error(e)
          }
        }else if(method === "DELETE"){
          const deleteUrl = `${url}/${itemId}`

          const res =await fetch(deleteUrl,config)
          const json = await res.json();
          setCallFetch(json)
        }
      }
      httpRequest();
    },[config,method,url])
    
    return  {data,httpConfig,loading,error,itemId};
}