import React from "react"
import Image from "next/image"
import Link from "next/link"
import ItemCant from "@/components/Cart/Items/ItemCant/ItemCant"
import Related from "@/components/Related/Related"
import ItemStyles from "@/styles/Items/Item.module.css"

interface pageTypes{
  params: object
}
export default function item({ params }: pageTypes){

  const { id } = params

  return(
    <main className={ItemStyles.mainContainer}>
      <div className={ItemStyles.itemContainer}>
        {/* <img src={} alt="" /> */}
        <article className={ItemStyles.itemPhotos}>
          <main className={ItemStyles.img}>
            <h1>Foto</h1>
          </main>
          <section>
            <div>foto1</div>
            <div>foto2</div>
          </section>
        </article>
        <article className={ItemStyles.itemInfo}>
          <div className={ItemStyles.homeLink}>
            <Link href="http://localhost:3000/">Inicio</Link>
            <p>&nbsp;&#62;&nbsp;</p>
            <Link href="http://localhost:3000/items">Categoria</Link>
            <p>&nbsp;&#62;&nbsp;</p>
            <p>Item</p>
          </div>
          <h1>Nombre del articulo</h1>
          <h2>$0000,00</h2>
          <h3>Disponibilidad: Muchas/Pocas/Muy pocas</h3>
          <h3>Categoria: xxxxxxxx</h3>
          <h3>Marca: xxxxxx</h3>
          <section style={{display: 'flex', alignItems: 'center'}}>
            <ItemCant />
            <button style={{height: '30px', marginLeft: '50px', cursor: 'pointer'}}>Agregar al carrito</button>
          </section>
        </article>
      </div>
      <Related />
    </main>
  )
}