import React from "react"
import SingleArticleStyles from "@/styles/Articles/SingleArticles.module.css"

interface pageType{
  item: {
    Name: string,
    Price: number,
    Date: number,
    Size: string,
    Material: string,
    Stuffing: string,
    Img: string
  }
}
export default function SigleArticle({ item }: pageType){
  return(
    <div className={SingleArticleStyles.mainContainer}>
      <img src={item.Img} alt="" />
      <div>
        <h3>{item.Name}</h3>
        <p>${item.Price}</p>
      </div>
      <section>
        <a href="#"></a>
        <button>Comprar</button>
        <a href="#" className={SingleArticleStyles.seeButton}>
          <button>Ver</button>
        </a>
      </section>
    </div>
  )
}