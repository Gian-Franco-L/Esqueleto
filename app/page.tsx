import React from "react"
import Wellcome from "../components/Wellcome/Wellcome"
import { NewsCarousel } from "../components/NewsCarousel/NewsCarousel"
import { Slides1 } from "@/components/NewsCarousel/Slides/Slides1"
import { Slides2 } from "@/components/NewsCarousel/Slides/Slides2"
import { Slides3 } from "@/components/NewsCarousel/Slides/Slides3"
import CarouselBootstrap from "@/components/CarouselBootstrap/CarouselBootstrap"

export default function Home() {
  
  return (
    <>
      <CarouselBootstrap />
      <Wellcome />
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