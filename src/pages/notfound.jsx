import { Link } from "react-router-dom"


function Notfound(){
return(

    <>
    
<h1 className="my-6 text-center text-6xl">THE PAGE YOU'RE LOOKING FOR </h1>
<h1 className="text-center text-6xl">DOESN'T EXIST </h1>
<br />
<Link className=" text-center text-3xl " to={"/"} > <button>Go Back To Home Page</button>  </Link>


    </>
)

}

export default Notfound
