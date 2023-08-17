import React from "react"
import styled from "styled-components"
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

  return(
    <BottomNavBarContainer>
      <NavList onMouseLeave={() => (productsListDesapear(), brandsListDesapear())}>
          <li>
            <div onMouseEnter={() => (productsListApear(), brandsListDesapear())}>
              Productos<GrFormDown />
            </div>
            <ProductsList apearProductList={apearProductList} onMouseLeave={productsListDesapear}>
              <a href="#"><li>Hola</li></a>
              <a href="#"><li>Como</li></a>
              <a href="#"><li>Estas</li></a>
            </ProductsList>
          </li>
          <li>
            <div onMouseEnter={() => (brandsListApear(), productsListDesapear())}>
              Marcas<GrFormDown />
            </div>
            <BrandList apearBrandsList={apearBrandsList} onMouseLeave={brandsListDesapear}>
              <a href="#"><li>Hola</li></a>
              <a href="#"><li>Como</li></a>
              <a href="#"><li>Estas</li></a>
            </BrandList>
          </li>
          <li onMouseLeave={() => (productsListDesapear(), brandsListDesapear())}>
            <a href="#">Contacto</a>
          </li>
          <li onMouseLeave={() => (productsListDesapear(), brandsListDesapear())}>
            <a href="#">Ofertas</a>
          </li>
        </NavList>
    </BottomNavBarContainer>
  )
}

const BottomNavBarContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-top: 1px solid #9d9d9d;
`

const NavList = styled.ul`
  list-style-type: none;
  position: relative;
  display: flex;
  justify-content: space-around;
  width: 40%;
  font-size: 1.5rem;
  

  div{
    text-decoration: none;
    display: flex;
    align-items: center;
    color: black;
    cursor: pointer;
  }

  a{
    text-decoration: none;
    color: black;
  }
  
  li{
    position: relative;
  }
`
interface productList{
  apearProductList: string
}
const ProductsList = styled.ul<productList>`
  display: ${props => props.apearProductList === "on" ? "inline-block" : "none"};
  list-style-type: none;
  position: absolute;
  height: auto;
  width: 100%;
  background-color: white;
  border-bottom: 1px solid #9d9d9d;
  border-left: 1px solid #9d9d9d;
  border-right: 1px solid #9d9d9d;
  align-items: center;
  padding-top: 10%;

  li{
    width: 100%;
    text-align: center;
    padding-top: 10px;
    padding-bottom: 10px; 
  }
  li:hover{
    color: white;
    background-color: black;
    cursor: pointer;
  }
`

interface brandList{
  apearBrandsList: string
}
const BrandList = styled.ul<brandList>`
  display: ${props => props.apearBrandsList === "on" ? "inline-block" : "none"};
  list-style-type: none;
  position: absolute;
  height: auto;
  width: 100%;
  background-color: white;
  border-bottom: 1px solid #9d9d9d;
  border-left: 1px solid #9d9d9d;
  border-right: 1px solid #9d9d9d;
  align-items: center;
  padding-top: 10%;

  li{
    width: 100%;
    text-align: center;
    padding-top: 10px;
    padding-bottom: 10px; 
  }
  li:hover{
    color: white;
    background-color: black;
    cursor: pointer;
  }
`