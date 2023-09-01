'use client'
import React, { useEffect, useState } from "react";
import SingleArticle from "./SingleArticle/SingleArticle"
import productService from "@/services/product"
import { v4 as uuidv4 } from "uuid"
import ArticlesContainerStyles from "@/styles/Articles/ArticlesContainer.module.css"

export default function ArticlesContainer(){

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
    <section className={ArticlesContainerStyles.articles}>
      {
        allArticles.map(item =>{
          return <SingleArticle 
                    item={item}
                    key={uuidv4()}
                  />
        })
      }
    </section>
  )
}