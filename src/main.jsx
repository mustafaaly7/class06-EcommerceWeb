import { StrictMode, useContext } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import AppRouter from './route'
import { ThemeContextProvider } from './context/themecontext'
import { UserContextProvider } from './context/usercontext'


createRoot(document.getElementById('root')).render(
    <UserContextProvider>
        <ThemeContextProvider>
            <AppRouter />
        </ThemeContextProvider>
    </UserContextProvider>
)
