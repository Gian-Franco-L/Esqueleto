'use client'
import React from "react";
import LogoStyles from "@/styles/NavBar/Logo.module.css"
import useGetNavBarScroll from "@/hooks/useGetNavBarScroll"

export default function Logo(){

  const { navbarscroll } = useGetNavBarScroll()
  const logoStatus = navbarscroll > 30 ? "smallLogo" : "normalLogo"

  return(
    <div className={`${LogoStyles.logo} ${LogoStyles[logoStatus]}`}>
      <p>Logo</p>
    </div>
  )
}