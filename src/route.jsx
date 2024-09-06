import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import App from "./App";
import { Products } from "./pages/products";
import Notfound from "./pages/notfound";
import { Product } from "./pages/product";
import Login from "./pages/login";
import Signup from "./pages/signup";

function AppRouter() {
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />

            </Routes>
            <Header />
            <Routes>

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