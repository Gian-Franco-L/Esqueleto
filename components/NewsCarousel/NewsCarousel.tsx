'use client'
import React, { ReactNode, useState, useRef } from "react"
import NewsCarouselStyles from "../../styles/NewsCarousel/NewsCarousel.module.css"
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { next, back } from "./Functions/CarouselFunctions"

interface pageTypes{
  children: ReactNode,
}
const NewsCarousel = ({ children }:pageTypes) =>{

  const [buttonsCarouselState, setButtonsCarouselState] = useState("true")
  const intervalCarousel = useRef(null)

  const slideCarousel = useRef(null)
  const slideButtons = useRef(null)

  return(
    <div className={NewsCarouselStyles.mainContainer} ref={intervalCarousel}>
      <h1>Novedades</h1>
      <div className={NewsCarouselStyles.imgCarousel} ref={slideCarousel}>
        {children}
      </div>
      <div className={NewsCarouselStyles.buttonsCarousel} ref={slideButtons}>
        <div className={`${NewsCarouselStyles.button} ${NewsCarouselStyles.left}`} onClick={() => buttonsCarouselState === "true" && back(slideCarousel, setButtonsCarouselState)}>
					<FaArrowLeft className={NewsCarouselStyles.leftArrow} />
        </div>
        <div className={`${NewsCarouselStyles.button} ${NewsCarouselStyles.right}`} onClick={() => buttonsCarouselState === "true" && next(slideCarousel, setButtonsCarouselState)}>
          <FaArrowRight className={NewsCarouselStyles.rightArrow} />
        </div>
      </div>
    </div>
  )
}

export { NewsCarousel }