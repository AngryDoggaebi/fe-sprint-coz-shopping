import { Routes, Route } from "react-router-dom";
import Main from "../Pages/Main";
import ProductList from "../Pages/ProductList";
import Bookmark from "../Pages/Bookmark";
import { useState } from "react";


export default function Router ({ products }) {

  return (
    <Routes>
      <Route path="/" element={ <Main products={ products }/> }/>
      <Route path="/products/list" element={ <ProductList products={ products }/> }/>
      <Route path="/bookmark" element={ <Bookmark/> }/>
    </Routes>
  )
}