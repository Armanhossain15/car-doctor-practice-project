import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Firebase/firebase.config";

export const authContext = createContext()
const auth = getAuth(app);

 const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(()=>{
       const unsubscribe =  onAuthStateChanged(auth, (currentUser)=>{
            if(currentUser){
                setUser(currentUser)
                setLoading(false)
                console.log('currentUser ', currentUser);
            }
            else {
                setUser(null)
                setUser(false)
            }
        })
        return ()=>{
            unsubscribe()
        }
    },[])

    const signOutUser = ()=>{
        setLoading(false)
        return signOut(auth) 
    }


    const authInfo = {
        user, 
        loading,
        createUser,
        signInUser,
        signOutUser
    }
    return (
    < authContext.Provider value={authInfo} >
        {children}
    </authContext.Provider >
    );
};

export default AuthProvider;