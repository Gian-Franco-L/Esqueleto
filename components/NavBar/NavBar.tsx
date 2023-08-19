import React from "react"
import styled from "styled-components"
import useGetNavBarScroll from "../../hooks/useGetNavBarScroll"
import TopNavBar from "./TopNavBar/TopNavBar"
import BottomNavBar from "./BottomNavBar/BottomNavBar"

export default function NavBar(){

  const { navbarscroll } = useGetNavBarScroll()

  return(
    <NavBarContainer navbarscroll={navbarscroll}>
      <TopNavBar />
      <BottomNavBar />
    </NavBarContainer>
  )
}

interface scroll{
  navbarscroll: number
}
const NavBarContainer = styled.div<scroll>`
  z-index: 2;
  position: fixed;
  display: flex;
  flex-wrap: wrap;
  height: ${props => props.navbarscroll > 30 ? "100px" : "150px"};
  width: 100%;
  top: 0;
  background-color: white;
  border-bottom: 1px solid #9d9d9d;
  transition-duration: .5s;
`


