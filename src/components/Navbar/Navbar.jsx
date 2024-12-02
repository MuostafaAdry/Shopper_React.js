import React, { useContext, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../Assets/Frontend_Assets/logo.png";
import Cart_icon from "../../Assets/Frontend_Assets/cart_icon.png";
import Navclass from "./Nav.module.css";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
const Navigation = () => {
  const [Menu, setMenu] = useState('shop')
  const{CartList}=useContext(ShopContext)
  const cartNumber=CartList.length
  return (
    <div className={Navclass.Nav_container}>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <div className={Navclass.logo_container}>
            <div className="">

            </div>
            <img className={Navclass.logo} src={logo} alt="" />
            <Link to='/' className={Navclass.logo_title}>
              <h2 >SHOPPER</h2>
            </Link>
          </div>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="m-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link className={Navclass.nav_links} to='/'
                onClick={() => setMenu('shop')}
              >Shop {Menu === 'shop' ? <hr className={Navclass.hr}/> : <></>}</Link>
              <Link to='/women' className={Navclass.nav_links}
                onClick={() => setMenu('women')}
              >Women   {Menu === 'women' ? <hr className={Navclass.hr}/> : <></>}</Link>
              <Link to='/men' className={Navclass.nav_links}
                onClick={() => setMenu('men')}
              >Men {Menu === 'men' ? <hr className={Navclass.hr}/> : <></>}</Link>

              <Link to='/kid' className={Navclass.nav_links}
                onClick={() => setMenu('kid')}
              >kid  {Menu === 'kid' ? <hr className={Navclass.hr}/> : <></>}</Link>
            </Nav>
            <div className={Navclass.nav_left}>

              <Link to='/Login' className={Navclass.Login_btn}>Login</Link>
              <Link to='/Cart'>  <img className={Navclass.Cart_icon} src={Cart_icon} alt="" /></Link>
              <div className={Navclass.Cart_counter}>{cartNumber}</div>

            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
