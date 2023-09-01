import React from "react";
import NewStyles from "../../styles/News/news.module.css"

export default function News(){
  return(
    <div className={NewStyles.mainContainer}>
      <h1>Novedades</h1>
      <section>
        <article>
          <div>Foto1</div>
          <h3>Articulo1</h3>
          <span>
            <a href="#"></a>
            <button>Ver</button>
          </span>
        </article>
        <article>
          <div>Foto2</div>
          <h3>Articulo2</h3>
          <span>
            <a href="#"></a>
            <button>Ver</button>
          </span>
        </article>
        <article>
          <div>Foto3</div>
          <h3>Articulo3</h3>
          <span>
            <a href="#"></a>
            <button>Ver</button>
          </span>
        </article>
        <article>
          <div>Foto4</div>
          <h3>Articulo4</h3>
          <span>
            <a href="#"></a>
            <button>Ver</button>
          </span>
        </article>
        <article>
          <div>Foto5</div>
          <h3>Articulo5</h3>
          <span>
            <a href="#"></a>
            <button>Ver</button>
          </span>
        </article>
        <article>
          <div>Foto6</div>
          <h3>Articulo6</h3>
          <span>
            <a href="#"></a>
            <button>Ver</button>
          </span>
        </article>
        <article>
          <div>Foto7</div>
          <h3>Articulo7</h3>
          <span>
            <a href="#"></a>
            <button>Ver</button>
          </span>
        </article>
      </section>
    </div>
  )
}