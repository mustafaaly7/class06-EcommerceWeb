import { Link } from "react-router-dom"

function Signup() {
    return (


        <>
            <div className="entireLogin">
                <div className="flex items-center justify-center min-h-screen">
                    <div className="text-center text-white border-black-300 shadow bg-blue-900 font-mono w-full max-w-md p-8 sm:w-10/12 md:w-8/12 lg:w-4/12 font-bold">
                        <h1 className="text-2xl">Signup</h1>



                        <div className="my-5">
                            <h3 className="text-xl">Full Name :</h3>
                            <input
                                className="border w-9/12 p-2 text-black"
                                type="text"
                                placeholder="Enter Your Full Name Here"
                            />
                        </div>

                        <div className="my-5">
                            <h3 className="text-xl">PhoneNumber : :</h3>
                            <input
                                className="border w-9/12 p-2 text-black"
                                type="number"
                                placeholder="Enter Your PhoneNumber Here"
                            />
                        </div>


                        <div className="my-5">
                            <h3 className="text-xl">Email :</h3>
                            <input
                                className="border w-9/12 p-2 text-black"
                                type="text"
                                placeholder="Enter Your Email Here"
                            />
                        </div>

                        <div className="my-5">
                            <h3 className="text-xl">Password :</h3>
                            <input
                                className="border w-9/12 p-2 text-black "
                                type="password"
                                placeholder="Enter Your Password Here"
                            />
                        </div>

                        <Link className="block mt-6 text-xl" to={"/login"}>
                            Already Have An Account? Login
                        </Link>

                        
                        <br />
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">SignUp</button>

                    </div>
                </div>
            </div>






        </>

    )


}
export default Signup