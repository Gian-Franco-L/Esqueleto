import React from "react";
import AdminStyle from "@/styles/Admin/Admin.module.css"
import productService from "@/services/product"
import AdminItem from "@/components/AdminItem/AdminItem";
import { v4 as uuidv4 } from "uuid"

const fetchProducts = () =>{
  return productService.getAll()
}

export default async function Admin(){
  const products = await fetchProducts()

  return(
    <div className={AdminStyle.mainContainer}>
      {
        products.map(item =>{
          return <AdminItem
                  item={item}
                  key={uuidv4()}
                />
        })
      }
    </div>
  )
}