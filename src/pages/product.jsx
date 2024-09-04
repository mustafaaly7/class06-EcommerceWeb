import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ProductDetail } from "../components/productdetail"






function Product() {
    const{title,id}=useParams()
    const[singleproduct,setSingleProduct] =useState([])
    useEffect(()=>{
fetch(`https://dummyjson.com/products/${id}`)
.then((res)=>res.json()).then((data)=>setSingleProduct(data))

    },[id])
    console.log(singleproduct.thumbnail);
    
    return (

        <>


<ProductDetail title={title} category={singleproduct.category} description={singleproduct.description} price={singleproduct.price} image={singleproduct.thumbnail}/>




        </>
    )


}
export{
    Product
}