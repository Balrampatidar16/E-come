import React from 'react'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Product from './components/Product'
import ProductDetails from './components/ProductDetails'
import SearchItem from './components/SearchItem'
import Cart from './components/Cart'
import { items } from './components/Data'
const App = () => {

  const [data, setData] = useState([...items])
  const [cart ,setCart]=useState([])
  // console.log(data)
  return (
    <>
      <Navbar setData={setData} cart={cart} />
      <Routes>
        <Route path='/' element={<Product cart={cart} setCart={setCart}  items={data}/>}></Route>
        <Route path='/product/:id' element={<ProductDetails />}></Route>
        <Route path='/search/:term' element={<SearchItem />}></Route>
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart}/>}></Route>
      </Routes>
   
    </>
  )
}

export default App
