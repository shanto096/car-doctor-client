import {  createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, } from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext()

const auth = getAuth(app)

const AuthContextProvider = ({children}) => {

    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)


    const createRegister = (email, password)=>{
        setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password)
    }

   

    const login = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

   const logOut = ()=>{
    return signOut(auth)
   }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, curentUser =>{
            setUser(curentUser)
            setLoading(false)
        })
        return ()=>{
            return unsubscribe()
        }
    },[])

    
    const info ={
      user,
      loading,
      createRegister,
      login,
      logOut
    }
    return (
        <AuthContext.Provider value={info}>
                {children}
        </AuthContext.Provider>
      
    );
};

export default AuthContextProvider;