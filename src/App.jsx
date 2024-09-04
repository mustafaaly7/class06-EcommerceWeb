import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/header'

function App() {
const [product , setProduct] =useState([])
const[loading,setLoading]=useState(true)
useEffect(()=>{
  fetch('https://dummyjson.com/products/categories')
  .then(res => res.json())
  .then((data)=>setProduct(data));

},[])
  return (
    <>
     









    </>
  )
}

export default App
