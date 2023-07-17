<h1 align="center"> Arquivo criar aqui chamado config.js </h1>
        -

      import { initializeApp } from "firebase/app";
      import { getFirestore } from 'firebase/firestore';

      const firebaseConfig = {  
        apiKey:key sensity Firebase,
       authDomain: key sensity Firebase,
      projectId:key sensity Firebase ,
      storageBucket:key sensity Firebase ,
      messagingSenderId:key sensity Firebase ,
      appId: key sensity Firebase
              };
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    export { db };