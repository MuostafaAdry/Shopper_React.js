import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Itemclass from './Item.module.css'
import { Link } from 'react-router-dom'

const Item = ({ id, name, image, old_price, new_price }) => {
  return (
    <div>
      <Container>
        <Row>
          <Col >
            <div className={Itemclass.img_container}>
              <Link to={`/Product/${id}`}>
                <img onClick={window.scrollTo(0,0)} className={Itemclass.item_img} src={image} alt="" />

              </Link>
            </div>
            <div className={Itemclass.img_proprites}>
              <p className={Itemclass.img_name}>{name}</p>
              $<span className={Itemclass.new_price}>{new_price}</span>
              $<del>{old_price}</del>


            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Item
