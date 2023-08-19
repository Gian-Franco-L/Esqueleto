import React from "react"
import styled from "styled-components"
import useGetNavBarScroll from "../../../hooks/useGetNavBarScroll"
import useApearSignRegister from "../../../hooks/useApearSignRegister"
import useCartStatus from "../../../hooks/useCartStatus"
import Cart from "../../Cart/Cart"
import { BsSearch } from "react-icons/bs"
import { GoPerson } from "react-icons/go"
import { BsCart2 } from "react-icons/bs"


export default function TopNavBar (){

  const { navbarscroll } = useGetNavBarScroll()
  const { apearSignRegister, signRegisterApear, signRegisterDesapear } = useApearSignRegister()
  const { cartStatus, setCartStatus, cartStatusRef } = useCartStatus()

  return(
    <TopNavBarContainer>
      <Logo navbarscroll={navbarscroll}/>
      <SearchInput>
        <input placeholder="Que estás buscando?" id="searchInputRef"/>
        <SearchIcon>
          <BsIconSearch />
        </SearchIcon>
        {/* {
          searchedArticles
            ? <CrossIcon onClick={() => clearSearch(setSearchedArticles)}><AiIconClose /></CrossIcon>
            : <SearchIcon><BsIconSearch /></SearchIcon>
        } */}
      </SearchInput>
      <ProfileCartIcons onMouseLeave={signRegisterDesapear}>
        <section onMouseEnter={signRegisterApear}>
          <ProfileIcon />
          <SignOrRegister apearSignRegister={apearSignRegister} onMouseLeave={signRegisterDesapear}>
            <a href="">Registrarse</a>
            <a href="">Iniciar sesión</a>
          </SignOrRegister>
        </section>
        <section>
          <CartIcon onClick={() => setCartStatus("on")}/>
        </section>
      </ProfileCartIcons>
      <CartContainer ref={cartStatusRef}>
        <CartBackground onClick={() => setCartStatus("off")} />
        <Cart 
          cartStatus={cartStatus}
          setCartStatus={setCartStatus}
        />
      </CartContainer>
    </TopNavBarContainer>
  )
}

const TopNavBarContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
`

interface scroll{
  navbarscroll: number
}
const Logo = styled.div<scroll>`
  height: 70%;
  grid-column: 2;
  width: ${props => props.navbarscroll > 30 ? "50%" : "100%"};
  background-color: black;
  align-self: center;
  transition-duration: 1s;
`

const SearchInput = styled.div`
  position: relative;
  display: flex;
  height: 45px;
  grid-column: 4 / 8;
  align-self: center;

  input{
    outline: none;
    align-self: center;
    width: 100%;
    height: 40px;
    font-size: 20px;
    padding-left: 10px;
  }
`

const SearchIcon = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 2%;
  top: 6%;
  height: 40px;
  width: 35px;
  border-left: 1px solid grey;
`

const BsIconSearch = styled(BsSearch)`
  height: 30px;
  width: 30px;
  margin-left: 5px;
  color: #4c4c4c;
`

const ProfileCartIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  grid-column: 9 / 11;

  section{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: black;
  }
`

const ProfileIcon = styled(GoPerson)`
  height: 70%;
  width: 30px;
`

interface apearSignRegister{
  apearSignRegister: string
}
const SignOrRegister = styled.div<apearSignRegister>`
  z-index: 1;
  display: ${props => props.apearSignRegister === "on" ? "inline-block" : "none"};
  position: absolute;
  height: auto;
  top: 43%;
  background-color: white;
  border-bottom: 1px solid #9d9d9d;
  border-right: 1px solid #9d9d9d;
  border-left: 1px solid #9d9d9d;
  padding-top: .5%;

  a{
    display: flex;
    justify-content: center;
    width: 100%;
    text-decoration: none;
    padding: 3.8px;
    color: black;
  }
  a:hover{
    color: white;
    background-color: black;
  }
`

const CartIcon = styled(BsCart2)`
  height: 70%;
  width: 30px;
  cursor: pointer;
`

const CartContainer = styled.div`
  z-index: 1;
  display: none;
  position: absolute;
`

const CartBackground = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #36363668;
  cursor: pointer;
`