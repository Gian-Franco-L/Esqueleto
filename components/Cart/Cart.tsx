import React, { useEffect, useState } from "react"
import styled, { keyframes, css } from "styled-components"
import productService from "../../services/product"
import Items from "./Items/Items"
import { v4 as uuidv4 } from "uuid"

interface pageType{
  cartStatus: string,
  setCartStatus: Function
}
export default function Cart({cartStatus, setCartStatus}: pageType){

  const [allArticles, setAllArticles] = useState<any[]>([]);

  useEffect(() =>{
    productService.getAll()
      .then((res) => {
        let articlesAux = []
        for(let i=0; i<10; i++){
          articlesAux.push(res[i])
        }
        setAllArticles(articlesAux)
      })
  }, [])

  return(
    <CartContainer cartStatus={cartStatus}>
      <Tittle>
        <h1>Carrito de compras</h1>
        <CloseCartButton onClick={() => setCartStatus("off")}>X</CloseCartButton>
      </Tittle>
      <CartArticles>
        {
          allArticles.map(item =>{
            return <Items 
                     item={item}
                     key={uuidv4()}
                   />
          })
        }
      </CartArticles>
      <GreyBar />
      <Price>
        <p>Total:</p>
        <p>$1.500,00</p>
      </Price>
      <GreyBar />
      <FinishBuy><p>Finalizar Compra</p></FinishBuy>
    </CartContainer>
  )
}

const openCartMovement = keyframes`
  0%{
    right: -500px;
  }
  100%{
    right: 0;
  }
`
const closeCartMovement = keyframes`
  0%{
    right: 0;
  }
  100%{
    right: -500px;
  }
`

const openCart = css`
  animation-name: ${openCartMovement};
  animation-duration: 1s;
  animation-timing-function: cubic-bezier();
  animation-fill-mode: forwards;
`
const closeCart = css`
  animation-name: ${closeCartMovement};
  animation-duration: 1s;
  animation-timing-function: cubic-bezier();
  animation-fill-mode: forwards;
`

interface cartStatus{
  cartStatus: string
}
const CartContainer = styled.div<cartStatus>`
  position: absolute;
  right: -500px;
  top: 0%;
  height: 100%;
  width: 500px;
  background-color: white;

  ${props => {
    if(props.cartStatus === "on") return openCart
    if(props.cartStatus === "off") return closeCart
  }}
`

const Tittle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 100%;
  color: white;
  background-color: black;
`

const CloseCartButton = styled.button`
  position: absolute;
  height: 25px;
  width: 25px;
  right: 30px;
  font-size: 1.3rem;
  color: white;
  background-color: transparent;
  border: none;
  cursor: pointer;
`

const CartArticles = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 40%;
  margin-top: 5%;
  padding: 2%;
  overflow-y: scroll;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`

const GreyBar = styled.div`
  margin-top: 5%;
  margin-bottom: 5%;
  margin-left: 2%;
  border: 1px solid rgba(0, 0, 0, 0.214);
  width: 93%;
`

const Price = styled.div`
  display: flex;
  justify-content: space-between;
  width: 95%;
  padding-left: 3%;
  padding-right: 2%;

  p{
    font-size: 1.5rem;
  }
`

const FinishBuy = styled.button`
  height: 5%;
  width: 93%;
  margin-left: 2%;
  border-radius: 10px;
  border: none;
  background-color: black;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;

  &:hover{
    background-color: white;
    color: black;
  }
`