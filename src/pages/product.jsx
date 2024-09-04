import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ProductDetail } from "../components/productdetail"






function Product() {
    const{title,id}=useParams()
    const[singleproduct,setSingleProduct] =useState([])
const [loader,setLoader] = useState(true)

    useEffect(()=>{
fetch(`https://dummyjson.com/products/${id}`)
.then((res)=>res.json()).then((data)=>
    {setSingleProduct(data)
setLoader(false)

    }).catch((error)=>setLoader(false))

    },[id])
    console.log(singleproduct.thumbnail);
    
    return (

        <>

{loader? (
<h1 className="text-center my-5 text-3xl font-bold">LOADING......</h1>
):(
<ProductDetail title={title} category={singleproduct.category} description={singleproduct.description} price={singleproduct.price} image={singleproduct.thumbnail}/>

) }




        </>
    )


}
export{
    Product
}