import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Blogs from './Component/Pages/Blogs'
import Cart from './Component/Pages/Cart'
import Contact from './Component/Pages/Contact'
import Counter from './Component/Pages/Counter'
import Deals from './Component/Pages/Deals'
import Home from './Component/Pages/Home'
import Services from './Component/Pages/Services'
import Signin from './Component/Pages/Signin'
import Signup from './Component/Pages/Signup'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<Home/>}/>
                <Route path="/signin" element={<Signin/>}/>
                <Route path="/register" element={<Signup/>}/>
                <Route path="/cart" element={<Cart/>}/>

                {/* Material Pages */}
                {/* <Route path="/mui" element={<MaterialDemo/>}/> */}
                <Route path="/deals" element = {<Deals/>}/>
                <Route path='/services' element = {<Services/>}/>
                <Route path='/blogs' element={<Blogs/>}/>
                <Route path='/contact' element={<Contact/>}/>

                {/* hooks */}
                <Route path='/counter' element={<Counter/>}/>
                
            </Routes>
        </BrowserRouter>
    )
}

export default Router