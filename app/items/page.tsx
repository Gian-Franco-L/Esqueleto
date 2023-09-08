import React from "react";
import Link from "next/link";
import ArticlesContainer from "@/components/ArticlesContainer/ArticlesContainer";
import ArticlesStyle from "../../styles/Articles/Articles.module.css"
import CategoriesFilters from "@/components/CategoriesFilters/CategoriesFilters";

export default function Items(){
  return(
    <div className={ArticlesStyle.mainContainer}>
      <section className={ArticlesStyle.homeAndFilters}>
        <article className={ArticlesStyle.homeLink}>
          <Link href="http://localhost:3000/">Inicio</Link>
          <p>&nbsp;&#62;&nbsp;</p>
          <p>Categoria</p>
        </article>
        <article>
          <select name="filter">
            <option value="">Precio: Menor a mayor</option>
            <option value="">Precio: Mayor a menor</option>
            <option value="">Mas nuevo a mas viejo</option>
            <option value="">Mas viejo a mas nuevo</option>
            <option value="">Mas vendido</option>
          </select>
        </article>
      </section>
      <section className={ArticlesStyle.homeMobile}>
        <article className={ArticlesStyle.homeLink}>
          <Link href="http://localhost:3000/">Inicio</Link>
          <p>&nbsp;&#62;&nbsp;</p>
          <p>Categoria</p>
        </article>
      </section>
      <section className={ArticlesStyle.categoriesAndFilersMobile}>
        <CategoriesFilters />
        <select name="filter">
          <option value="">Precio: Menor a mayor</option>
          <option value="">Precio: Mayor a menor</option>
          <option value="">Mas nuevo a mas viejo</option>
          <option value="">Mas viejo a mas nuevo</option>
          <option value="">Mas vendido</option>
        </select>
      </section>
      <section className={ArticlesStyle.categoriesAndItems}>
        <article className={ArticlesStyle.categories}>
          <h3>Categorias</h3>
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
        </article>
        <ArticlesContainer />
      </section>
    </div>
  )
}
