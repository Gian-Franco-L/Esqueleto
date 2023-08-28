import React, { useEffect, useState } from "react";
import Link from "next/link";
import SingleArticle from "./SingleArticle/SingleArticle"
import ArticlesStyle from "../../styles/Articles/Articles.module.css"
import productService from "../../services/product"
import { v4 as uuidv4 } from "uuid"

export default function Articles(){

  const [allArticles, setAllArticles] = useState<any[]>([]);

  useEffect(() =>{
    productService.getAll()
      .then((res) => {
        let articlesAux = []
        for(let i=0; i<10; i++){
          articlesAux.push(res[i])
        }
        setAllArticles(articlesAux)
      })
  }, [])

  return(
    <main className={ArticlesStyle.mainContainer}>
      <section className={ArticlesStyle.homeAndFilters}>
        <div className={ArticlesStyle.homeLink}>
          <Link href="http://localhost:3000/">Inicio</Link>
          <p>&nbsp;&#62;&nbsp;</p>
          <p>Articulos</p>
        </div>
        <div>
          <select name="filter">
            <option value="" selected>Precio: Menor a mayor</option>
            <option value="">Precio: Mayor a menor</option>
            <option value="">Mas nuevo a mas viejo</option>
            <option value="">Mas viejo a mas nuevo</option>
            <option value="">Mas vendido</option>
          </select>
        </div>
      </section>
      <section className={ArticlesStyle.filters}>
        <h3>Articulos</h3>
        <a href="">Tipo1</a>
        <a href="">Tipo2</a>
        <a href="">Tipo3</a>
        <h3>Filtrar por</h3>
        <p><input type="checkbox" />Filtro1</p>
        <p><input type="checkbox" />Filtro2</p>
        <p><input type="checkbox" />Filtro3</p>
        <p><input type="checkbox" />Filtro4</p>
        <p><input type="checkbox" />Filtro5</p>
        <p><input type="checkbox" />Filtro6</p>
      </section>
      <section className={ArticlesStyle.articles}>
        {
          allArticles.map(item =>{
            return <SingleArticle 
                     item={item}
                     key={uuidv4()}
                   />
          })
        }
      </section>
    </main>
  )
}