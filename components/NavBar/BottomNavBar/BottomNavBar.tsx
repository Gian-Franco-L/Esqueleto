import React from "react"
import BottomNavBarStyles from "../../../styles/NavBar/BottomNavBar.module.css"
import { GrFormDown } from "react-icons/gr"
import useApearProductsBrandsLists from "../../../hooks/useApearProductsBrandsLists"


export default function BottomNavBar(){

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
              Productos<GrFormDown />
            </div>
            <ul className={`${BottomNavBarStyles.productsList} ${BottomNavBarStyles[productListStatus]}`} onMouseLeave={productsListDesapear}>
              <a href="#"><li>Hola</li></a>
              <a href="#"><li>Como</li></a>
              <a href="#"><li>Estas</li></a>
            </ul>
          </li>
          <li>
            <div onMouseEnter={() => (brandsListApear(), productsListDesapear())}>
              Marcas<GrFormDown />
            </div>
            <ul className={`${BottomNavBarStyles.brandList} ${BottomNavBarStyles[brandListStatus]}`}  onMouseLeave={brandsListDesapear}>
              <a href="#"><li>Hola</li></a>
              <a href="#"><li>Como</li></a>
              <a href="#"><li>Estas</li></a>
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