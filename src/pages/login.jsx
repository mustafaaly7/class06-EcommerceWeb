import { useContext, useState } from "react"
import { Link, Navigate, useNavigate } from "react-router-dom"
import { auth, signInWithEmailAndPassword } from "../firebase"
import { themecontext, ThemeContextProvider } from "../context/themecontext"

function Login() {
   
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()


    return (


        <>
            <div className="entireLogin w-h-screen">
                <div className="flex items-center justify-center min-h-screen">
                    <div className="text-center text-white border-black-300 shadow bg-blue-900 font-mono w-full max-w-md p-8 sm:w-10/12 md:w-8/12 lg:w-4/12 font-bold">
                        <h1 className="text-2xl">LOGIN</h1>

                        <div className="my-5">
                            <h3 className="text-xl">Email :</h3>
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="border w-9/12 p-2 text-black"
                                type="text"
                                placeholder="Enter Your Email Here"
                            />
                        </div>

                        <div className="my-5">
                            <h3 className="text-xl">Password :</h3>
                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="border w-9/12 p-2 text-black "
                                type="password"
                                placeholder="Enter Your Password Here"
                            />
                        </div >

                        <Link className="block mt-6 text-xl" to="/signup">

                            Don't Have An Account? Signup
                        </Link>

                        <br />
                        <Link >
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={async () => {
                                try {
                                    if (email.length < 6 ||
                                        password.length < 6) {
                                        alert("Enter Correct Information")
                                        return
                                    }


                                    const res = await signInWithEmailAndPassword(auth, email, password)
                                    localStorage.setItem("userId", res.user.uid)
                                    alert("user Succesfully Logged IN")
                                    navigate("/")
                                } catch (error) {
                                    console.log(error.message);

                                }
                            }}>Login</button>
                        </Link>
                    </div>
                </div>
            </div>


        </>

    )


}
export default Login