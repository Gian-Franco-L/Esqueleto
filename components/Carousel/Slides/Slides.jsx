import React from "react"
import styled from "styled-components"
import { Slide } from "../../Carousel/Carousel"

const Slides = () =>{
    return(
      <>
        <Slide>
          <SlideBackground>
            <img src="/caja.jpeg" alt="asd" />
          </SlideBackground>
        </Slide>
        <Slide>
          <SlideBackground>
            <img src="/canastas.jpeg" alt="asd" />
          </SlideBackground>
        </Slide>
        <Slide>
          <SlideBackground>
            <img src="/caminos.jpeg" alt="asd" />
          </SlideBackground>
        </Slide>
      </>
    )
}

const SlideBackground = styled.div`
  display: flex;
  height: 86vh;
  width: 100%;
  margin-top: 3%;

  img{
    position: relative;
    height: 100%;
    width: 100%;
  }
`

export { Slides }