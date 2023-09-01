import React from "react"
import TopNavBarStyles from "../../../styles/NavBar/TopNavBar.module.css"
import Logo from "./Logo/Logo"
import ProfileCartIcons from "./ProfileCartIcons/ProfileCartIcons"
import { BsSearch } from "react-icons/bs"

interface pageTypes{
  navbarscrollStatus: string
}
export default function TopNavBar ({ navbarscrollStatus }: pageTypes){
  return(
    <div className={TopNavBarStyles.topNavBarContainer}>
      <Logo />
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
      <ProfileCartIcons navbarscrollStatus={navbarscrollStatus}/>
    </div>
  )
}