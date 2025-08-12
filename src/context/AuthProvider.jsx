import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';

const AuthProvider = ({children}) => {
    
    const [darkMode,setDarkMode]=useState(
        localStorage.getItem('theme')==='dark'
    )

   
    
    useEffect(()=>{
        if(darkMode){
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme','dark')
        }else{
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme','light')
        }
       
    },[darkMode])
    
    const info={
    darkMode,
    setDarkMode,
 
    }
    return (
        <div>
            <AuthContext value={info}>
                {children}
            </AuthContext>
        </div>
    );
};

export default AuthProvider;