import React from "react";
import RelatedStyles from "@/styles/Related/Related.module.css"

export default function Related(){
  return(
    <div className={RelatedStyles.mainContainer}>
      <h2>Productos relacionados</h2>
      <div className={RelatedStyles.greyBar} />
      <section>
        <article>
          <div>Foto</div>
          <h4>Nombre</h4>
          <p>$0000,00</p>
        </article>
        <article>
          <div>Foto</div>
          <h4>Nombre</h4>
          <p>$0000,00</p>
        </article>
        <article>
          <div>Foto</div>
          <h4>Nombre</h4>
          <p>$0000,00</p>
        </article>
        <article>
          <div>Foto</div>
          <h4>Nombre</h4>
          <p>$0000,00</p>
        </article>
        <article>
          <div>Foto</div>
          <h4>Nombre</h4>
          <p>$0000,00</p>
        </article>
      </section>
    </div>
  )
}