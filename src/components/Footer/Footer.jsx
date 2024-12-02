import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import footer_icon from '../../Assets/Frontend_Assets/logo.png'
import whatsapp_icon from '../../Assets/Frontend_Assets/whatsapp_icon.png'
import instgram_ion from '../../Assets/Frontend_Assets/instagram_icon.png'
import pintester_ion from '../../Assets/Frontend_Assets/pintester_icon.png'
import footerclass from './Footer.module.css'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <div>
            <Container className={footerclass.footer_main}>
                <div className={footerclass.footer_logo}>
                    <img src={footer_icon} alt="" />
                    <h1 className="footer_title">SHOPPER</h1>
                </div>
                <div className={footerclass.footer_links}>
                    <Row>
                        <Col lg={3} md={3} sm={4} xs={6}>
                            <Link to='' className={footerclass.footer_link}>
                                Company
                            </Link>
                        </Col>
                        <Col lg={3} md={3} sm={4} xs={6}>
                        <Link to='' className={footerclass.footer_link}>
                        Contact Us
                    </Link>

                        </Col>
                       
                        <Col lg={3} md={3} sm={4} xs={6}>
                        <Link to='' className={footerclass.footer_link}>
                        Products
                    </Link>
                        </Col>
                        <Col lg={3} md={3} sm={4} xs={6}>
                        <Link to='' className={footerclass.footer_link}>
                        Offices
                    </Link>
                        </Col>
                        <Col lg={3} md={3} sm={4} xs={6}>
                        <Link to='' className={footerclass.footer_link}>
                        About
                    </Link>
                        </Col>
                    </Row>

                  
                     
                     
                   
                </div>
                <div className={footerclass.footer_media}>
                    <img src={instgram_ion} alt="" className={footerclass.footer_icon} />
                    <img src={pintester_ion} alt="" className={footerclass.footer_icon} />
                    <img src={whatsapp_icon} alt="" className={footerclass.footer_icon} />

                </div>
            </Container>
        </div>
    )
}

export default Footer
