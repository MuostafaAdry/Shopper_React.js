import React, { useState, useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import displayclass from './DisplayProduct.module.css'
import star_icon from '../../../Assets/Frontend_Assets/star_icon.png'
import star_dull_icon from '../../../Assets/Frontend_Assets/star_dull_icon.png'
import DiscriptionBox from '../DiscriptionBox/DiscriptionBox'
import { ShopContext } from '../../../Context/ShopContext'
import RealatedProduct from '../RealatedProduct/RealatedProduct'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DisplayProduct = ({ Product }) => {

    const { addToCart } = useContext(ShopContext)
    const [selectedSize, setSelectedSize] = useState("");
    const [NewId, setNewId] = useState(1)

    const handleSizeClick = (size) => {
        setSelectedSize(size);
    }
    const [Counter, setCounter] = useState(1)
    const handelDec = () => {

        if (Counter === 1) {
            return;
        }
        setCounter(Counter - 1);
    }
    const handelInc = () => {
        setCounter(Counter + 1);
    };
    const HandelAddToCart = (Product) => {
        const id = NewId
        const image = Product.image
        const name = Product.name
        const new_price = Product.new_price
        const size = selectedSize
        const amount = Counter
        const total = Counter * Product.new_price
        const CartItem = { id, image, name, new_price, size, amount, total }

        addToCart(CartItem)
        setNewId(NewId + 1)
        toast.success("Added to Your Cart ")

    }

 
    return (
        <div className={displayclass.main}>
            <Container>
                <Row>
                    <Col lg={6} md={6} sm={12}>
                        <div className={displayclass.display_left}>
                            <div className={displayclass.img_list}>
                                <img className={displayclass.side_img} src={Product.image} alt="" />
                                <img className={displayclass.side_img} src={Product.image} alt="" />
                                <img className={displayclass.side_img} src={Product.image} alt="" />
                                <img className={displayclass.side_img} src={Product.image} alt="" />
                            </div>
                            <div className={displayclass.main_img_container}>
                                <img className={displayclass.main_img} src={Product.image} alt="" />
                            </div>
                        </div>
                    </Col>

                    <Col lg={6} md={6} sm={12}>
                        <div className={displayclass.right}>
                            <h1 className={displayclass.product_name}>{Product.name}</h1>
                            <div className={displayclass.star_icons_container}>
                                <img className={displayclass.star_icon} src={star_icon} alt="" />
                                <img className={displayclass.star_icon} src={star_icon} alt="" />
                                <img className={displayclass.star_icon} src={star_icon} alt="" />
                                <img className={displayclass.star_icon} src={star_icon} alt="" />
                                <img className={displayclass.star_dull_icon} src={star_dull_icon} alt="" />
                            </div>
                            <p className={displayclass.product_price}> <del className={displayclass.old_price}>${Product.old_price}</del> ${Product.new_price}</p>
                            <p className={displayclass.lorem}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem in vitae repudiandae tempore eius quidem recusandae possimus excepturi consequatur corporis!</p>
                            <div className={displayclass.sizes}>
                                {["S", "L", "XL", "XXL", "XXXL"].map((size) => (
                                    <div
                                        key={size}
                                        className={displayclass.size}
                                        onClick={() => handleSizeClick(size)}
                                    >
                                        {size}
                                    </div>
                                ))}
                            </div>
                            <div className={displayclass.counters}>
                                <button className={displayclass.btn} onClick={handelDec}>-</button>
                                <p className={displayclass.Counter_number}>{Counter}</p>
                                <button className={displayclass.btn} onClick={handelInc}>+</button>
                            </div>
                        </div>
                        <button className={displayclass.addCart_btn} onClick={() => HandelAddToCart(Product)}>ADD TO CART</button>
                        <p className={displayclass.category}> <span>Category</span>: {Product.category}</p>
                    </Col>
                </Row>
            </Container>
            <DiscriptionBox />
            <RealatedProduct />
        </div>
    )
}

export default DisplayProduct
