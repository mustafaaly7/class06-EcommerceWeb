import { useEffect, useState } from "react";
import { createContext } from "react";
import { auth, onAuthStateChanged } from "../firebase";


export const userContext = createContext()

function UserContextProvider({ children }) {
    const [user, setUser] = useState({
        userLogin: false,
        email: "",
    })

useEffect(()=>{
onAuthStateChanged(auth,(user)=>{
    if(user){
        setUser({
            userLogin : true ,
            email :user.email
        })
    }
})


},[])


    return (
        <userContext.Provider value={{ user, setUser }}>
            {children}
        </userContext.Provider>


    )






}

export {
    UserContextProvider
}
