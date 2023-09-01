import React from "react"
import { Carousel } from "../components/Carousel/Carousel"
import { NewsCarousel } from "../components/NewsCarousel/NewsCarousel"
import { Slides } from "../components/Carousel/Slides/Slides"
import { Slides1 } from "@/components/NewsCarousel/Slides/Slides1"
import { Slides2 } from "@/components/NewsCarousel/Slides/Slides2"
import { Slides3 } from "@/components/NewsCarousel/Slides/Slides3"

export default function Home() {
  
  return (
    <>
      <Carousel>
        <Slides />
      </Carousel>
      <NewsCarousel>
        <Slides1 />
        <Slides2 />
        <Slides3 />
        <Slides1 />
        <Slides2 />
        <Slides3 />
        <Slides1 />
      </NewsCarousel>
    </>
  )
}