'use client'
import React from "react"
import BottomNavBarStyles from "../../../styles/NavBar/BottomNavBar.module.css"
import { GrFormDown } from "react-icons/gr"
import useApearProductsBrandsLists from "../../../hooks/useApearProductsBrandsLists"

interface pageTypes{
  navbarscrollStatus: string
}
export default function BottomNavBar({ navbarscrollStatus }: pageTypes){

  const {
    apearProductList,
    apearBrandsList,
    productsListApear,
    productsListDesapear,
    brandsListApear,
    brandsListDesapear} = useApearProductsBrandsLists()

  const productListStatus = apearProductList === "on" ? "productListOn" : "productListOff"
  const brandListStatus = apearBrandsList === "on" ? "brandListOn" : "brandListOff"

  return(
    <div className={BottomNavBarStyles.mainContainer}>
      <ul className={BottomNavBarStyles.navList} onMouseLeave={() => (productsListDesapear(), brandsListDesapear())}>
          <li>
            <div onMouseEnter={() => (productsListApear(), brandsListDesapear())}>
              <a href="">Productos</a><GrFormDown />
            </div>
            <ul className={`${BottomNavBarStyles.productsList} ${BottomNavBarStyles[productListStatus]} ${BottomNavBarStyles[navbarscrollStatus]}`} onMouseLeave={productsListDesapear}>
              <a href="#"><li>Producto1</li></a>
              <a href="#"><li>Producto2</li></a>
              <a href="#"><li>Producto3...</li></a>
            </ul>
          </li>
          <li>
            <div onMouseEnter={() => (brandsListApear(), productsListDesapear())}>
              <a href="">Marcas</a><GrFormDown />
            </div>
            <ul className={`${BottomNavBarStyles.brandList} ${BottomNavBarStyles[brandListStatus]} ${BottomNavBarStyles[navbarscrollStatus]}`} onMouseLeave={brandsListDesapear}>
              <a href="#"><li>Marca1</li></a>
              <a href="#"><li>Marca2</li></a>
              <a href="#"><li>Marca3...</li></a>
            </ul>
          </li>
          <li onMouseLeave={() => (productsListDesapear(), brandsListDesapear())}>
            <a href="#">Contacto</a>
          </li>
          <li onMouseLeave={() => (productsListDesapear(), brandsListDesapear())}>
            <a href="#">Ofertas</a>
          </li>
        </ul>
    </div>
  )
}