import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile, signOut} from "firebase/auth";
import app from '../../firebase.config';

const auth=getAuth(app)
export const AuthContext=createContext()











const AuthProvider = ({children}) => {
const [user, setUser]=useState(null)
const [loading, setLoading]=useState(true)
const [dark, setDark] = useState(false)



const createUser=(email, password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
    
}

const singInUser=(email, password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
    
}

const singInGoogle=(provider)=>{
    setLoading(true)
    return signInWithPopup(auth, provider)
}
const singInGithub=(providerGit)=>{
    setLoading(true)
   return signInWithPopup(auth, providerGit)
}

const userUpdateProfile=(profile)=>{
    return updateProfile(auth.currentUser, profile)
}

useEffect(()=>{
   const unsubcribe=onAuthStateChanged(auth, (carrentUser)=>{
        console.log(carrentUser)
        setUser(carrentUser)
        setLoading(false)
    })
    return ()=> unsubcribe()
},[])


const userSingOut=()=>{
    return signOut(auth)
}

const authInfo={user, loading, createUser, singInUser, singInGoogle, userUpdateProfile, singInGithub, userSingOut, dark, setDark}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;