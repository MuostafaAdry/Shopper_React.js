// import React, { useEffect, useRef } from "react";
 


// const PayPalButton = () => {
//   const paypalRef = useRef(null);
//   const initializedRef = useRef(false); // To ensure PayPal button is initialized only once

//   useEffect(() => {
//     if (!initializedRef.current && paypalRef.current) {
//       initializedRef.current = true; // Mark as initialized

//       window.paypal
//         .Buttons({
//           createOrder: (data, actions) => {
//             return actions.order.create({
//               purchase_units: [
//                 {
//                   amount: {
//                     value: "10.00", // Replace with your amount
//                   },
//                 },
//               ],
//             });
//           },
//           onApprove: (data, actions) => {
//             return actions.order.capture().then((details) => {
//               alert(`Transaction completed by ${details.payer.name.given_name}`);
//             });
//           },
//         })
//         .render(paypalRef.current); // Render PayPal button inside this container
//     }
//   }, []);

//   return <div ref={paypalRef}></div>;
// };

// const Checkout = () => (
//   <div>
//     <PayPalButton />
//   </div>
// );

// export default Checkout;
