import React, { useState, createContext, useEffect, useContext } from 'react'
import { Auth, Hub, DataStore } from 'aws-amplify'
import { UserMobile } from '../models'

export const AuthContext = createContext()

export function AuthContextProvider({children}){

    const [authUser, setAuthUser] = useState(null)
    const [dbUser, setDbUser] = useState(null)
    const [user, setUser] = useState(undefined)

    const sub = authUser?.attributes?.sub

    useEffect(() => {
        // DataStore.clear();
      Auth.currentAuthenticatedUser({ bypassCache: true}).then((res)=>setAuthUser(res))
    }, [])


    useEffect(() => {
        DataStore.query(UserMobile, (user)=> user.sub.eq(sub)).then((users)=>setDbUser(users[0]))
    }, [sub])

    // New Auth flow
    const checkUser = async() => { 
        try {
          const authUser = await Auth.currentAuthenticatedUser({ bypassCache: true})
          setUser(authUser)
          console.log(user)
        } catch (error) {
          setUser(null)
        }
      }
    
      useEffect(() => {
        checkUser();
      }, [])
    
      useEffect(() => {
        const listener = (data) =>{ 
          if(data.payload.event === 'signIn' || data.payload.event === 'signOut'){
            checkUser();
          }
        }
    
        const subscription = Hub.listen('auth', listener);
        return () => subscription.unsubscribe();
      }, [])
    // End of new Auth flow
    

    // console.log("The sub id is: ",sub);

    return(
        <AuthContext.Provider 
            value={{
                authUser, setAuthUser,
                dbUser, setDbUser,
                user,
                sub
            }}>
            {children}
        </AuthContext.Provider>
    )
};

export const useAuthContext = () => useContext(AuthContext)