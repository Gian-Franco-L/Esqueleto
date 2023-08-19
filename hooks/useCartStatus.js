import { useEffect, useState, useRef } from "react"

export default function useCartStatus(){
  const [cartStatus, setCartStatus] = useState("none")
  const cartStatusRef = useRef(null)

  useEffect(() =>{
    if(cartStatus === "on"){
      if(cartStatusRef.current) cartStatusRef.current.style.display = 'inline-block'
    }else if(cartStatus === "off"){
      setTimeout(()=>{
        if(cartStatusRef.current) cartStatusRef.current.style.display = 'none'
      }, 1000)
    }
  }, [cartStatus])

  return {cartStatus, setCartStatus, cartStatusRef}
}