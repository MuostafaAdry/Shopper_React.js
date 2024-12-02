import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext'
 import DisplayProduct from '../components/Product/DisplayProduct/DisplayProduct'
import all_product from '../Assets/Frontend_Assets/all_product'
const Product = () => {

  const { ProductId } = useParams()
  // const { all_product } = useContext(ShopContext)
  const Product = all_product.find((e) => e.id == Number(ProductId))



  return (
    <div>
      <DisplayProduct Product={Product} />
    </div>
  )
}

export default Product
