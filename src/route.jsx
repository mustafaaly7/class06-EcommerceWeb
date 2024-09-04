import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import App from "./App";
import { Products } from "./pages/product";

function AppRouter() {
    return (

        <BrowserRouter>
            <Header />
            <Routes>


                <Route index element={<App />} />
                <Route path="/products" element={<Products />} />
                <Route />
                <Route />
                <Route />


            </Routes>



        </BrowserRouter>


    )





}

export default AppRouter