import React from "react"
import useGetNavBarScroll from "../../hooks/useGetNavBarScroll"
import TopNavBar from "./TopNavBar/TopNavBar"
import BottomNavBar from "./BottomNavBar/BottomNavBar"
import NavBarStyles from "../../styles/NavBar/NavBar.module.css"

export default function NavBar(){

  const { navbarscroll } = useGetNavBarScroll()
  const navbarscrollStatus = navbarscroll > 30 ? "normalNavBar" : "smallNavBar"

  return(
    <div className={`${NavBarStyles.NavBarContainer} ${NavBarStyles[navbarscrollStatus]}`}>
      <TopNavBar />
      <BottomNavBar />
    </div>
  )
}