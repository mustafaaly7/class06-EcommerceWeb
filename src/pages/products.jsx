import { useState } from "react"
import { useEffect } from "react"
import { Card } from "../components/card"
import { Chip } from "../components/chips"
import { data } from "autoprefixer"

function Products() {
    const [categories, setCategories] = useState([])
    const [loader, setLoader] = useState(true)
    const [product, setProduct] = useState([])


    useEffect(() => {
        fetch('https://dummyjson.com/products/categories')
            .then((res) => res.json())
            .then((data) => {
                setCategories(data)
                setLoader(false)
            }

            )
            .catch((error) => {
                console.log(error.message);
                setLoader(false)

            })

    }, [])

    useEffect(() => {

        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then((data) => setProduct(data.products))
    }, [])



    return (



        <>
           {
            loader ? (
                <h3 className=" my-5 text-center text-3xl">LOADING.... </h3>
            ):(
                <div className=" my-5 font-[sans-serif] space-x-4 space-y-4 text-center">
<h3 className="text-center text-3xl"> Categories</h3>
                {categories.map((data)=>(
                    <Chip name ={data.name} key={data.slug}/>
                ))}
                                </div>

            )
           }



                        







                        <section className="text-gray-600 body-font">
                            <div className="container px-5 py-24 mx-auto">
                                <div className="flex flex-wrap -m-4">
                                    {product.map((data) => (

                                        <Card title={data.title} catgeory={data.category} id={data.id} price={data.price} image={data.thumbnail} key={data.id} />
                                    ))}


                                </div>
                            </div>
                        </section>





                    </>

                )


            }
            export {
                Products
            }