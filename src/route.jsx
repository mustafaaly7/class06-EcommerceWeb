import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import App from "./App";
import { Products } from "./pages/products";
import Notfound from "./pages/notfound";
import { Product } from "./pages/product";
import Signup from "./pages/signup";
import { LoginPage } from "./pages/login";

function AppRouter() {
    
    return (



        <BrowserRouter>
            <Header />
            

            
            <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<Signup />} />

                <Route index element={<App />} />
                <Route path="/products" element={<Products />} />
                <Route path="/product/:title/id/:id" element={<Product />} />
                <Route path="*" element={<Notfound />} />
                <Route />


            </Routes>



        </BrowserRouter>


    )





}

export default AppRouter