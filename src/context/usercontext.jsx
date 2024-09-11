import { useState } from "react";
import { createContext } from "react";


export const userContext = createContext()

function UserContextProvider({children}){
const [user,setUser] = useState({
userLogin : false,  
    email :"",
})


return(
<userContext.Provider value={{user,setUser}}>
    {children}
</userContext.Provider>


)






}

export{
    UserContextProvider
}
