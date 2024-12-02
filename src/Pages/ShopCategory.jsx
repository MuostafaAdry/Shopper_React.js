import React, { useCallback, useContext, useEffect, useState } from 'react'
import ShopCategoryclass from '../Pages/css/ShopCategory/ShopCategory.module.css'
import { Col, Container, Row } from 'react-bootstrap'
import { ShopContext } from '../Context/ShopContext'
import Item from '../components/Item/Item'
import all_product from '../Assets/Frontend_Assets/all_product'
const ShopCategory = (props) => {
  // const { all_product } = useContext(ShopContext)
  const [Products, setProducts] = useState([])

  //  handel sort 
  const [Sort, setSort] = useState()
  const ApplySort = useCallback(() => {
    let CopyData = all_product.slice()
    switch (Sort) {
      case "Low-High":
        setProducts(CopyData.sort((a, b) => a.new_price - b.new_price))
        break;
      case "High-Low":
        setProducts(CopyData.sort((a, b) => b.new_price - a.new_price))

        break;
      default:
        break;

    }

  }, [all_product, Sort])


  useEffect(() => {
    setProducts(all_product)
    ApplySort()
  }, [all_product, ApplySort])
  return (
    <div>
      <Container>
        <div className={ShopCategoryclass.banner_conyainer}>
          <img className={ShopCategoryclass.banner_img} src={props.banner} alt="" />
        </div>
        <div className={ShopCategoryclass.index_sort}>
          <p className={ShopCategoryclass.title}>
            <span>Show 1-12 </span>out of 36 Products
          </p>
          <div  >
            <select
              className={ShopCategoryclass.sort_btn}
              onChange={(e) => setSort(e.target.value)}
            >

              <option value="Low-High">Sort By:Low To High</option>
              <option value="High-Low">Sort By: High To Low</option>
            </select>
          </div>
        </div>

        <Row>
          {
            Products.map((item, index) => {
              if (props.category === item.category) {
                return (
                  <Col key={index} lg={3} md={6} sm={12}>
                    <Item

                      id={item.id}
                      name={item.name}
                      image={item.image}
                      new_price={item.new_price}
                      old_price={item.old_price}

                    />
                  </Col>
                )
              } else {
                return (
                  null
                )
              }
            })
          }


        </Row>
      </Container>

    </div>
  )
}

export default ShopCategory
