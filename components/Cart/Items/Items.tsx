import React from "react"
import styled from "styled-components"
import { BsTrash } from "react-icons/bs"

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
export default function Items({ item }: pageType){
  return(
    <Item>
      <img src={item.Img} alt="" />
      <ItemNameCant>
        <p>{item.Name}</p>
        <ItemCant><button>-</button><p>1</p><button>+</button></ItemCant>
      </ItemNameCant>
      <ItemTrashPrice>
        <Trash />
        <p>${item.Price}</p>
      </ItemTrashPrice>
    </Item>
  )
}

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 500px;
  padding-bottom: 50px;

  img{
    height: 60px;
    width: 40px;
    margin-left: 5%;
    margin-bottom: 2%;
  }
`

const ItemNameCant = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
`

const ItemCant = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 36px;
  width: 100px;
  border: 1px solid grey;
  margin-top: 3%;
  border-radius: 15px;

  button{
    border: none;
    background-color: transparent;
    font-size: 1.5rem;
    cursor: pointer;
  }
`

const ItemTrashPrice = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 15%;
  height: 80%;
`

const Trash = styled(BsTrash)`
  height: 20px;
  width: 20px;
  cursor: pointer;
`