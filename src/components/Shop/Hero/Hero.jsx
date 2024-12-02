import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import HeroClass from './Hero.module.css'
import hand_icon from '../../../Assets/Frontend_Assets/hand_icon.png'
import arrow_icon from '../../../Assets/Frontend_Assets/arrow.png'
import hero_img from '../../../Assets/Frontend_Assets/hero_image.png'
const Hero = () => {
    return (
        <div className={HeroClass.hero}>
            <Container>
                <Row>
                    <Col className={HeroClass.hero_text} lg={6} md={6} sm={12}>
                        <h3 >NEW ARRIVALS ONLY</h3>
                        <div className={HeroClass.hand}>
                            
                            <h1>New</h1>
                            <img className={HeroClass.hand_icon} src={hand_icon} alt="" />
                        </div>
                        <h1 className={HeroClass.hand_title}>Collections</h1>
                        <h1 className={HeroClass.hand_title}>For Everyone</h1>
                        <div className={HeroClass.latest_collection}>
                            <button className={HeroClass.latest_collection_btn}> Latest Collection<img className={HeroClass.arrow_icon} src={arrow_icon} alt="" /></button>
                        </div>
                    </Col>

                    <Col className={HeroClass.hero_img} lg={6} md={6} sm={12}>
                        <img className={HeroClass.img} src={hero_img} alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Hero
