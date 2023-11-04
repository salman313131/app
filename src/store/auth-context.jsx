import React, { useEffect } from 'react'
import { useState } from 'react'
const AuthContext=React.createContext({
    token: '',
    isLoggedIn: false,
    login: (token)=>{},
    logout: ()=>{}
})

export const AuthContextProvider=(props)=>{
    const initialToken = localStorage.getItem('token')
    const [token,setIstoken] = useState(initialToken)
    const userIsLoggedIn = !!token
    const loginHandler=(token)=>{
        setIstoken(token)
        localStorage.setItem('token',token)
    }
    const logoutHandler=()=>{
        setIstoken(null)
        localStorage.removeItem('token')
    }
    const contextValue={
        token:token,
        isLoggedIn:userIsLoggedIn,
        login:loginHandler,
        logout:logoutHandler
    }
    useEffect(()=>{
        setTimeout(()=>{
            localStorage.removeItem('token')
        }, 300000)
    },[token])
    return (
        <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
    )
}
export default AuthContext