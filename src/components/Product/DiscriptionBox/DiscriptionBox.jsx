import React from 'react'
import { Container } from 'react-bootstrap'
import Discriptionclass from './DiscriptionBox.module.css'
const DiscriptionBox = () => {
    return (
        <div className={Discriptionclass.Describtion_review}>
            <Container>
                <p className={Discriptionclass.Description}>Description</p>
                <p className={Discriptionclass.Reviews}>Reviews (122)</p>

                <div className={Discriptionclass.Describtionandreview_titles}>
                    <p>
                        An e-commerce website is an online platform that facilitates the
                        buying and selling of products or services over the internet. It
                        serves as a virtual marketplace where businesses and individuals
                        can showcase their products, interact with customers, and conduct
                        transactions without the need for a physical presence. E-commerce
                        websites have gained immense popularity due to their convenience,
                        accessibility, and the global reach they offer.
                    </p>
                    <p>
                        E-commerce websites typically display products or services along
                        with detailed descriptions, images, prices, and any available
                        variations (e.g., sizes, colors). Each product usually has its own
                        dedicated page with relevant information.
                    </p>
                </div>

            </Container>
        </div>
    )
}

export default DiscriptionBox
