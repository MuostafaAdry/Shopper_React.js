import React from 'react'
import ComponentTitle from '../../ComponentTitle/ComponentTitle'
import data_product from '../../../Assets/Frontend_Assets/data'
import Item from '../../../components/Item/Item'
import RealatedProductclass from './RealatedProduct.module.css'
import { Container, Row, Col } from 'react-bootstrap'
const RealatedProduct = () => {
  return (
    <div>
      <div className={RealatedProductclass.Related_Products}>
        <ComponentTitle title={'RELATED PRODUCTS'} />
      </div>

      <Container>
        <Row>
          {data_product.map((item, index) => {
            return (
              <Col>
                <Item
                  key={index}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  new_price={item.new_price}
                  old_price={item.old_price}

                />
              </Col>

            )
          })}
        </Row>
      </Container>


    </div>
  )
}

export default RealatedProduct
