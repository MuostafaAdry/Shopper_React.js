import React, { useContext, useEffect, useRef } from "react";
import { ShopContext } from "../Context/ShopContext";
import Cartclass from './css/carrt/carrt.module.css'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Cart = () => {


  const { CartList, RemoveItem } = useContext(ShopContext)

  // handel calc total
  const calculateTotal = () => {
    return CartList.reduce((acc, item) => acc + item.total, 0);
  };
  const total = calculateTotal();

  const paypalRef = useRef(null);
  const initializedRef = useRef(false);
  // handel remove from cart
  const handelRemove = (item) => {
    const id = item.id
    RemoveItem(id)

    toast.success("Product Deleted")

  }
  // To ensure PayPal button is initialized only once 
  useEffect(() => {

    if (!initializedRef.current && paypalRef.current) {
      initializedRef.current = true;

      window.paypal
        .Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: total + 10,

                  },
                },
              ],
            });
          },
          onApprove: (data, actions) => {
            return actions.order.capture().then((details) => {
              alert(`Transaction completed by ${details.payer.name.given_name}`);
            });
          },
        })
        .render(paypalRef.current); // Render PayPal button inside this container
    }
  }, [total,]);



  return (
    <div>

      <Container>
        <div className={Cartclass.tableContainer}>
          <table className={Cartclass.table}>
            <thead>
              <tr>
                <th>Item</th>
                <th>Name</th>
                <th>Size</th>
                <th>Amount</th>
                <th>Total</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {CartList.map((item) => (
                <tr key={item.id}>
                  <td>
                    <img src={item.image} alt={item.name} width="50" />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.size}</td>
                  <td>{item.amount}</td>
                  <td>${item.total}</td>
                  <td>
                    <button
                      className={Cartclass.removeButton}
                      onClick={() => handelRemove(item)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>



        <Row>



          {/* ============ */}
          <Container className={Cartclass.payment_container}>

            <Row>
              <Col md={6} className="payment-form">

                <div ref={paypalRef}></div>
              </Col>

              <Col md={6} className={Cartclass.payment_summary}>
                <h4>Order Summary</h4>
                <ul>
                  <li>Subtotal: ${total}</li>
                  <li>Shipping: $10</li>
                  <li><strong>Total: ${!total ? <>0</> : <>{total + 10}</>}</strong></li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Row>
      </Container>


    </div>

  );
};

export default Cart;
