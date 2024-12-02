import React from 'react'
import data_product from '../../../Assets/Frontend_Assets/data'
import { Col, Container, Row } from 'react-bootstrap'
import Item from '../../Item/Item'
import ComponentTitle from '../../ComponentTitle/ComponentTitle'
const PopularItem = () => {
  return (
    <div>
       <Container>
       
       <ComponentTitle title={'POPULAR IN WOMEN'}/>
        <Row>
            {
                data_product.map((item,index)=>{
                    return(
                        <Col key={index} lg={3} md={3} sm={12}>
                        <Item 
                        id={item.id}
                        name={item.name}
                        image={item.image}
                        new_price={item.new_price}
                        old_price={item.old_price}
                        />
                        </Col>
                    )
                })
            }

        </Row>
       </Container>
    </div>
  )
}

export default PopularItem
