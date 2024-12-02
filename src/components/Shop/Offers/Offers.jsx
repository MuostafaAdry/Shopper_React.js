import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import exclsive_image from '../../../Assets/Frontend_Assets/exclusive_image.png'
import OfferClass from './Offers.module.css'
const Offers = () => {
    return (
        <div >
            <Container className={OfferClass.offer_main}>
                <Row>
                    <Col lg={6} md={6} sm={6}>
                    <div className={OfferClass.offer_proprites}></div>
                        <h1 className={OfferClass.Exclucive}>Exclucive</h1>
                        <h1 className={OfferClass.for_you}>Offers For You</h1>
                        <p className={OfferClass.prag}>ONLY ON BEST SELLER PRODUCTS</p>
                        <button className={OfferClass.offer_btn}>Check Now</button>
                    </Col>
                    <Col lg={6} md={6} sm={6}>
                        <div className={OfferClass.offer_Container}>
                            <img className={OfferClass.offer_img} src={exclsive_image} alt="" />
                        </div>
                    </Col>
                </Row> 
            </Container>
        </div>
    )
}

export default Offers
