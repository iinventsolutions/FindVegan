import React, { useState, createContext, useEffect, useContext } from 'react'
import { Auth, DataStore } from 'aws-amplify'
import { User } from '../models'

export const AuthContext = createContext()

export function AuthContextProvider({children}){

    const [authUser, setAuthUser] = useState(null)
    const [dbUser, setDbUser] = useState(null)

    const sub = authUser?.attributes?.sub

    useEffect(() => {
      Auth.currentAuthenticatedUser({ bypassCache: true}).then((res)=>setAuthUser(res))
    }, [])
    
    // console.warn(authUser);



    useEffect(() => {
        DataStore.query(User, (user)=> user.sub('eq', sub)).then((users)=>setDbUser(users[0]))
    }, [sub])
    

    // console.log("The sub id is: ",sub);

    return(
        <AuthContext.Provider 
            value={{
                authUser, setAuthUser,
                dbUser, setDbUser,
                sub
            }}>
            {children}
        </AuthContext.Provider>
    )
};

export const useAuthContext = () => useContext(AuthContext)