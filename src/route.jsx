import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import App from "./App";
import { Products } from "./pages/products";
import Notfound from "./pages/notfound";

function AppRouter() {
    return (

        <BrowserRouter>
            <Header />
            <Routes>


                <Route index element={<App />} />
                <Route path="/products" element={<Products />} />
                <Route path="*" element={<Notfound/>}/>
                <Route />
                <Route />


            </Routes>



        </BrowserRouter>


    )





}

export default AppRouter