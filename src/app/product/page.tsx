'use client'
import useProduct from "@/hooks/useProduct";

export default function Page() {

  const {productQuery : {data: product}} = useProduct();
  return (
    
    <>
      {product && product.map((item) => (
        <ul>
          <li>{item.title}</li>
          <li>{item.price}</li>
          <li>{item.description}</li>
        </ul>
      ))}
    </>
  )
}