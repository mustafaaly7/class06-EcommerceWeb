




function Chip({name, onclick,chosen}) {
  console.log(chosen);
  
    return (
        <>


  <button
    type="button"
    onClick={onclick}
    className={`
    
      px-5 py-2.5 rounded-lg text-sm tracking-wider font-medium border border-blue-700 outline-none bg-transparent hover:bg-blue-700 text-blue-700 hover:text-white transition-all duration-300
       `}
  >
    {name}
  </button>


        </>
    )
}

export {
    Chip
}