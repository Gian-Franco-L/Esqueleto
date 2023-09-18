'use client'
import React, { useEffect, useState } from "react";
import ProfileStyle from "@/styles/Profile/Profile.module.css"
import productService from "@/services/product"
import ItemsOnCart from "@/app/(widthoutHeadFoot)/purchaseForm/itemsOnCart/ItemsOnCart";
import { v4 as uuidv4 } from "uuid"

export default function Profile(){

  const [allArticles, setAllArticles] = useState<any[]>([]);

  useEffect(() =>{
    productService.getAll()
      .then((res) => {
        let articlesAux = []
        for(let i=0; i<3; i++){
          articlesAux.push(res[i])
        }
        setAllArticles(articlesAux)
      })
  }, [])

  return(
    <div className={ProfileStyle.mainContainer}>
      <h1>Mi Perfil</h1>
      <section className={ProfileStyle.profileContainer}>
        <article className={ProfileStyle.profileInfo}>
          <h4>Informacion de tu cuenta</h4>
          <h5>Nombre:</h5>
          <h5>Apellido:</h5>
          <h5>Correo:</h5>
          <h5>DNI:</h5>
          <h5>Telefono:</h5>
        </article>
        <article className={ProfileStyle.purchases}>
          {
            allArticles.map(item =>{
              return <ItemsOnCart 
                      item={item}
                      key={uuidv4()}
                    />
            })
          }
          <span className={ProfileStyle.totalContainer}>
            <h5>
              Total: $0.000,00
            </h5>
          </span>
          {
            allArticles.map(item =>{
              return <ItemsOnCart 
                      item={item}
                      key={uuidv4()}
                    />
            })
          }
          <span className={ProfileStyle.totalContainer}>
            <h5>
              Total: $0.000,00
            </h5>
          </span>
        </article>
      </section>
    </div>
  )
}