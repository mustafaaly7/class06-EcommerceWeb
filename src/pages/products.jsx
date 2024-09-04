import { useState, useEffect } from "react";
import { Card } from "../components/card";
import { Chip } from "../components/chips";
import { Link } from "react-router-dom";

function Products() {
    const [categories, setCategories] = useState([]);
    const [loader, setLoader] = useState(true);
    const [product, setProduct] = useState([]);
    const [sortedProduct, setSortedProduct] = useState([]);
    const [searchProduct, setSearchProduct] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [sortOption, setSortOption] = useState("default");

    let url;
    useEffect(() => {
        fetch('https://dummyjson.com/products/categories')
            .then((res) => res.json())
            .then((data) => {
                setCategories(data);
                setLoader(false);
            })
            .catch((error) => {
                console.log(error.message);
                setLoader(false);
            });
    }, [selectedCategory]);

    useEffect(() => {
        selectedCategory === "All"
            ? url = "https://dummyjson.com/products"
            : url = `https://dummyjson.com/products/category/${selectedCategory}`;
        fetch(url)
            .then(res => res.json())
            .then((data) => {
                setProduct(data.products);
                setSortedProduct(data.products);
            });
    }, [selectedCategory]);

    useEffect(() => {
        let sorted = [...product];
        if (sortOption === "price-asc") {


            sorted.sort((a, b) => a.price - b.price);
        } else if (sortOption === "price-desc") {
            sorted.sort((a, b) => b.price - a.price);
        } else if (sortOption === "name-asc") {
            sorted.sort((a, b) => a.title.localeCompare(b.title));
        } else if (sortOption === "name-desc") {
            sorted.sort((a, b) => b.title.localeCompare(a.title));
        }
        setSortedProduct(sorted);
    }, [sortOption, product]);

    return (
        <>
            {loader ? (
               <div role="status">
               <svg
                 aria-hidden="true"
                 className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                 viewBox="0 0 100 101"
                 fill="none"
                 xmlns="http://www.w3.org/2000/svg"
               >
                 <path
                   d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                   fill="currentColor"
                 />
                 <path
                   d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                   fill="currentFill"
                 />
               </svg>
               <span className="sr-only">Loading...</span>
             </div>
             
              
            ) : (
                <div className="my-5 font-[sans-serif] space-x-4 space-y-4 text-center">
                    <h3 className="text-center text-3xl">Categories</h3>
                    <Chip name={"All"} onclick={() => setSelectedCategory("All")} chosen={selectedCategory === "All"} />
                    {categories.map((data) => (
                        <Chip chosen={selectedCategory === data.slug} name={data.name} key={data.slug} onclick={() => setSelectedCategory(data.slug)} />
                    ))}
                </div>
            )}

            <div className="flex flex-wrap w-full items-center w-full">
                <input
                    type="text"
                    value={searchProduct}
                    placeholder="Search Product Here"
                    onChange={(e) => setSearchProduct(e.target.value)}
                    className="border border-3 placeholder-bold placeholder-gray-500 placeholder:text-2xl text-2xl font-bold shadow xl:w-96 max-lg:w-full lg:ml-10 max-md:mt-4 max-lg:ml-4 bg-gray-100 focus:bg-transparent px-6 rounded h-11 outline-[#333] text-sm transition-all"
                />
            </div>

            <div className="flex justify-center my-4">
                <select
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                    className="border border-gray-300 rounded px-3 py-2"
                >
                    <option value="default">Sort By</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="name-asc">Name: A to Z</option>
                    <option value="name-desc">Name: Z to A</option>
                </select>
            </div>

            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {sortedProduct
                            .filter(product => product.title.toLowerCase().includes(searchProduct.toLowerCase()))
                            .map((data) => (

                                <Link className=" lg:w-1/4 md:w-1/2 p-4 w-full" to={`/product/${data.title.split(" ").join("-")}/id/${data.id}`}>
                                    <Card
                                        title={data.title}
                                        catgeory={data.category}
                                        id={data.id}
                                        price={data.price}
                                        image={data.thumbnail}
                                        key={data.id}
                                    />
                                </Link>
                            ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export { Products };