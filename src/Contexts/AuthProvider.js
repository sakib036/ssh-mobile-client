import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, deleteUser, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import app from '../Firebase/Firebase.config';



export const AuthContext=createContext();
const auth=getAuth(app);

const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null);

    const [loading,setLoading]=useState(true);

    const [advertise,setAdvertise]=useState([]);



    const createUser=(email,password)=>{
        setLoading(true);
     return createUserWithEmailAndPassword(auth,email,password);
    };

    const signIn=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email,password)
    };

    const removeUser=(uid)=>{
        setLoading(true);
        console.log(uid)
        return deleteUser(uid)
    }

    const logOut=()=>{
        setLoading(true);
       
        return signOut(auth)
    } ;

    const updateUserProfile=(userInfo)=>{
        setLoading(true);
        return updateProfile(auth.currentUser, userInfo);

    }


    useEffect( ()=>{
        const unsubscribe= onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            setLoading(false);
        })
        return ()=>unsubscribe();
    }, [])

    const authInfo={
        createUser,
        signIn,
        user,
        logOut,
        updateUserProfile,
        loading,
        setAdvertise,
        advertise,
        removeUser,





    };



    return (
        <AuthContext.Provider value={authInfo}>
            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;