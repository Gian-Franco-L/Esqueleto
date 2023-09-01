'use client'
import React, { ReactNode, useState, useRef } from "react"
import CarouselStyles from "../../styles/Carousel/Carousel.module.css"
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { next, back } from "./Functions/CarouselFunctions"
import { useCarouselMovement } from "../../hooks/useCarouselMovement";

interface pageTypes{
  children: ReactNode,
}
const Carousel = ({ children }:pageTypes) =>{

  const [buttonsCarouselState, setButtonsCarouselState] = useState("true")
  const intervalCarousel = useRef(null)

  const { slideCarousel, slideButtons } = useCarouselMovement({ setButtonsCarouselState, intervalCarousel })

  return(
    <div className={CarouselStyles.mainContainer} ref={intervalCarousel}>
      <div className={CarouselStyles.imgCarousel} ref={slideCarousel}>
        {children}
      </div>
      <div className={CarouselStyles.buttonsCarousel} ref={slideButtons}>
        <div className={`${CarouselStyles.button} ${CarouselStyles.left}`} onClick={() => buttonsCarouselState === "true" && back(slideCarousel, setButtonsCarouselState)}>
					<FaArrowLeft className={CarouselStyles.leftArrow} />
        </div>
        <div className={`${CarouselStyles.button} ${CarouselStyles.right}`} onClick={() => buttonsCarouselState === "true" && next(slideCarousel, setButtonsCarouselState)}>
          <FaArrowRight className={CarouselStyles.rightArrow} />
        </div>
      </div>
    </div>
  )
}

export { Carousel }