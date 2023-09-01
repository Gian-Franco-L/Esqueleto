import React from "react"
import SlidesStyles from "../../../styles/Carousel/Slides.module.css"

const Slides = () =>{
    return(
      <>
        <section className={SlidesStyles.slide}>
          <div className={SlidesStyles.slideBackground}>
            <img src="/caja.jpeg" alt="asd" />
          </div>
        </section>
        <section className={SlidesStyles.slide}>
          <div className={SlidesStyles.slideBackground}>
            <img src="/canastas.jpeg" alt="asd" />
          </div>
        </section>
        <section className={SlidesStyles.slide}>
          <div className={SlidesStyles.slideBackground}>
            <img src="/caminos.jpeg" alt="asd" />
          </div>
        </section>
      </>
    )
}

export { Slides }