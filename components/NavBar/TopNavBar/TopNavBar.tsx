import React, { useEffect } from "react"
import TopNavBarStyles from "../../../styles/NavBar/TopNavBar.module.css"
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

  const logoStatus = navbarscroll > 30 ? "smallLogo" : "normalLogo"
  const signOrRegisterStatus = apearSignRegister === "on" ? "signOrRegisteOn" : "signOrRegisteOff"
  
  useEffect(() => {
    const body = document.getElementById("body")
    if(cartStatus === "off"){
      body ? body.style.overflowY = "inherit" : null
      body ? body.style.position = "initial" : null
    }
    if(cartStatus === "on"){
      body ? body.style.overflowY = "hidden" : null
      body ? body.style.position = "fixed" : null
    }
  }, [cartStatus])

  return(
    <div className={TopNavBarStyles.topNavBarContainer}>
      <div className={`${TopNavBarStyles.logo} ${TopNavBarStyles[logoStatus]}`}/>
      <div className={TopNavBarStyles.searchInput}>
        <input placeholder="Que estás buscando?" />
        <div className={TopNavBarStyles.searchIcon}>
          <BsSearch className={TopNavBarStyles.bsIconSearch}/>
        </div>
        {/* {
          searchedArticles
            ? <CrossIcon onClick={() => clearSearch(setSearchedArticles)}><AiIconClose /></CrossIcon>
            : <SearchIcon><BsIconSearch /></SearchIcon>
        } */}
      </div>
      <div className={TopNavBarStyles.profileCartIcons} onMouseLeave={signRegisterDesapear}>
        <section onMouseEnter={signRegisterApear}>
          <GoPerson className={TopNavBarStyles.profileIcon}/>
          <div className={`${TopNavBarStyles.signOrRegister} ${TopNavBarStyles[signOrRegisterStatus]}`} onMouseLeave={signRegisterDesapear}>
            <a href="">Registrarse</a>
            <a href="">Iniciar sesión</a>
          </div>
        </section>
        <section>
          <BsCart2 className={TopNavBarStyles.cartIcon} onClick={() => setCartStatus("on")}/>
        </section>
      </div>
      <div className={TopNavBarStyles.cartContainer} ref={cartStatusRef}>
        <div className={TopNavBarStyles.cartBackground} onClick={() => setCartStatus("off")} />
        <Cart 
          cartStatus={cartStatus}
          setCartStatus={setCartStatus}
        />
      </div>
    </div>
  )
}