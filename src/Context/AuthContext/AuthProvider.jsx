/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import AuthContext from "./AuthContext.jsx";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/firebase.init.js";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const registerUser = (email, password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const loginUser = (email, password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }


useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth, currentUser=>{
        console.log(currentUser);
        setUser(currentUser)
        setLoading(false)
    })
    return ()=>{
        unsubscribe()
    }
},[])




  const authInfo = {
    name: 'fahim',
    user,
    setUser,
    loading,
    setLoading,
    registerUser,
    loginUser
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
