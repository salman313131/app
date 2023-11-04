import React from 'react'
import { useState } from 'react'
const AuthContext=React.createContext({
    token: '',
    isLoggedIn: false,
    login: (token)=>{},
    logout: ()=>{}
})

export const AuthContextProvider=(props)=>{
    const [token,setIstoken] = useState(null)
    const userIsLoggedIn = !!token
    const loginHandler=(token)=>{
        setIstoken(token)
    }
    const logoutHandler=(token)=>{
        setIstoken(null)
    }
    const contextValue={
        token:token,
        isLoggedIn:userIsLoggedIn,
        login:loginHandler,
        logout:loginHandler
    }
    return (
        <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
    )
}
export default AuthContext