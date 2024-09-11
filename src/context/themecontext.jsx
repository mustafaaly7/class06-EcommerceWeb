import { createContext, useState } from "react";


export const themecontext = createContext()

function ThemeContextProvider({ children }) {
    const [theme, setTheme] = useState("Light")

    return (
        <themecontext.Provider value={{theme,setTheme}}>
            {children}
            </themecontext.Provider >



            )

}
export{
    ThemeContextProvider
}