import { useState } from "react"
import { useEffect } from "react"
import { Card } from "../components/card"
import { Chip } from "../components/chips"

function Products() {
    const [categories, setCategories] = useState([])
    const [loader, setLoader] = useState(true)
    const [product, setProduct] = useState([])
    const [searchProduct, setSearchProduct] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("All")
    let chosenCategory
    let url;
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

    }, [selectedCategory])

    useEffect(() => {
        console.log("category updated");

        selectedCategory == "All"
            ? url = "https://dummyjson.com/products"
            : url = `https://dummyjson.com/products/category/${selectedCategory}`
        fetch(url)
            .then(res => res.json())
            .then((data) => setProduct(data.products))
    }, [selectedCategory])



    return (



        <>
            {
                loader ? (
                    <h3 className=" my-5 text-center text-3xl">LOADING.... </h3>
                ) : (
                    <div className=" my-5 font-[sans-serif] space-x-4 space-y-4 text-center">
                        <h3 className="text-center text-3xl"> Categories</h3>
                        <Chip name={"All"} onclick={() => setSelectedCategory("All")} chosen ={chosenCategory ==categories.slug} />
                        {categories.map((data) => (
                            <Chip chosen ={chosenCategory == categories.slug}  name={data.name} key={data.slug} onclick={() => setSelectedCategory(data.slug)} />
                        ))}
                    </div>

                )
            }






            <div className="flex flex-wrap w-full items-center w-full">
                <input
                    type="text"
                    value={searchProduct}
                    placeholder="Search Product Here"
                    onChange={(e) => setSearchProduct(e.target.value)}
                    className="border border-3  placeholder-bold placeholder-gray-500 placeholder:text-2xl text-2xl font-bold shadow xl:w-96 max-lg:w-full lg:ml-10 max-md:mt-4 max-lg:ml-4 bg-gray-100 focus:bg-transparent px-6 rounded h-11 outline-[#333] text-sm transition-all"
                />
            </div >



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