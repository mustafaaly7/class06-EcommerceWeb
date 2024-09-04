import { useState } from "react"
import { useEffect } from "react"
import { Card } from "../components/card"

function Products() {
    const[product,setProduct] =useState([])
    
    
    useEffect(()=>{

        fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then((data)=>setProduct(data.products))
    },[])
    return (



        <>
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
{product.map((data)=>(
    <Card title={data.title} catgeory={data.category} id={data.id} price={data.price} image={data.thumbnail} />
))}


    </div>
  </div>
</section>





        </>

    )


}
export{
    Products
}