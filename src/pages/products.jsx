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
                <h3 className="my-5 text-center text-3xl">LOADING....</h3>
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
                              
                              <Link className=" lg:w-1/4 md:w-1/2 p-4 w-full"  to={`/product/${data.title.split(" ").join("-")}/id/${data.id}` }> 
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