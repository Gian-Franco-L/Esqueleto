'use client'
import React, { useRef } from "react"
import NavBar from "../components/NavBar/NavBar"
import WppIcon from "../components/WppIcon/WppIcon"
// import BootstrapCarousel from "../components/BootstrapCarousel/BootstrapCarousel"
import { Carousel } from "../components/Carousel/Carousel"
import { Slides } from "../components/Carousel/Slides/Slides"

export default function Home() {
  const intervalCarousel = useRef(null)
  return (
    <>
      <NavBar />
      <Carousel intervalCarousel={intervalCarousel}>
        <Slides />
      </Carousel>
      {/* <BootstrapCarousel /> */}
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur perferendis laboriosam corporis, placeat mollitia aperiam cupiditate similique, autem accusamus magni sapiente sunt illum commodi repudiandae, ipsum impedit. Ratione, neque molestias! Lorem ipsum dolor sit amet consectetur adipisicing elit. Non debitis inventore quidem illum quis. Fugiat natus nemo distinctio sint, maxime, nam veritatis minima vel eius dolorem dolores neque expedita ab. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptates magni maiores porro quam nesciunt aperiam labore. Dicta non deleniti reprehenderit tempora eveniet perspiciatis. Maxime delectus impedit consequuntur enim suscipit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente nisi ipsam iste odio dolorem, maiores, consequatur nam ut velit quas iusto perspiciatis repellendus id nostrum beatae, fuga facere aperiam ad? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus praesentium doloremque nemo modi repellat neque suscipit quibusdam dolores, odio assumenda! Saepe tempore cumque enim dicta reiciendis molestiae perferendis nemo delectus. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit ab accusamus hic harum maiores consequatur, sequi dolorum perspiciatis voluptate nisi est reiciendis maxime ratione ipsum architecto porro libero dolore enim! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi placeat, explicabo nostrum saepe maxime nulla laudantium, laborum fuga temporibus aspernatur sunt sint repellendus quisquam corrupti voluptatum beatae! Repellat, voluptatibus omnis! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint dolorum quaerat ullam, consequatur similique tenetur necessitatibus culpa beatae totam modi, ipsa ipsum adipisci nihil quae veritatis fugit. Eligendi, porro exercitationem. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum at tenetur error deserunt ipsa deleniti dolore similique, atque quam obcaecati? Qui quas corporis mollitia in sed delectus explicabo rerum tempora.</h1>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur perferendis laboriosam corporis, placeat mollitia aperiam cupiditate similique, autem accusamus magni sapiente sunt illum commodi repudiandae, ipsum impedit. Ratione, neque molestias! Lorem ipsum dolor sit amet consectetur adipisicing elit. Non debitis inventore quidem illum quis. Fugiat natus nemo distinctio sint, maxime, nam veritatis minima vel eius dolorem dolores neque expedita ab. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptates magni maiores porro quam nesciunt aperiam labore. Dicta non deleniti reprehenderit tempora eveniet perspiciatis. Maxime delectus impedit consequuntur enim suscipit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente nisi ipsam iste odio dolorem, maiores, consequatur nam ut velit quas iusto perspiciatis repellendus id nostrum beatae, fuga facere aperiam ad? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus praesentium doloremque nemo modi repellat neque suscipit quibusdam dolores, odio assumenda! Saepe tempore cumque enim dicta reiciendis molestiae perferendis nemo delectus. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit ab accusamus hic harum maiores consequatur, sequi dolorum perspiciatis voluptate nisi est reiciendis maxime ratione ipsum architecto porro libero dolore enim! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi placeat, explicabo nostrum saepe maxime nulla laudantium, laborum fuga temporibus aspernatur sunt sint repellendus quisquam corrupti voluptatum beatae! Repellat, voluptatibus omnis! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint dolorum quaerat ullam, consequatur similique tenetur necessitatibus culpa beatae totam modi, ipsa ipsum adipisci nihil quae veritatis fugit. Eligendi, porro exercitationem. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum at tenetur error deserunt ipsa deleniti dolore similique, atque quam obcaecati? Qui quas corporis mollitia in sed delectus explicabo rerum tempora.</h1>
      <WppIcon />
    </>
  )
}