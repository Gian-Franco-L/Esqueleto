import React from "react";

interface pageTypes{
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
export default function AdminItem({ item }: pageTypes){
  return(
    <>
      <p>{item.Name}</p>
    </>
  )
}