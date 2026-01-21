import React, { useState,useEffect,useContext } from 'react';
import emptyCart from '../../../public/assets/empty-cart.png'
import { CartContext } from "../cartHeader/CartContext";
import { Link } from 'react-router-dom';

export default function Checkout() {
    const [cartItems, setcartItems] = useState([]);
    const [isloading, setisloading] = useState(false);
    const [error, seterror] = useState(null);
    

    const UserID = localStorage.getItem("UserID");
    const { cartUpdated } = useContext(CartContext);

      useEffect(() => {
    const abortController = new AbortController();

    const fetchCartItems = async () => {
      setisloading(true);
      seterror(null);
      try {
        const response = await fetch(
          `https://localhost:7278/api/cart-items/Get/${UserID}`,
          {
            signal: abortController.signal,
            headers: { 
              Accept: "application/json" }
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setcartItems(Array.isArray(data) ? data : []);
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error(err);
          seterror("Failed to load Cart Items.");
        }
      } finally {
        setisloading(false);
      }
    };

    fetchCartItems();

    return () => abortController.abort();
  }, [cartUpdated]);

  const subtotal = cartItems.reduce((sum, item) => {
  return sum + item.product.price * item.quantity;}, 0);


  return (
 <div className="check-out " style={{backgroundColor: "#f2f2f2f2"}}>
  <div className="container">
    {cartItems.length > 0 ? (
      <div>
        {/* Steps */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
            fontFamily: "sans-serif",
            padding: "20px",
            justifyContent: "center",
          }}
        >
          {/* step 1 */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", opacity: "50%" }}>
            <div
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                backgroundColor: "#052926",
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "14px",
              }}
            >
              1
            </div>
            <Link to='/cart'>
                <span style={{ fontSize: "18px", fontWeight: "500", color:" #000000" }}>Shopping cart</span>
            </Link>
          </div>

          <div style={{ color: "#ccc", fontSize: "20px" }}>→</div>

          {/* step 2 */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                backgroundColor: "#000",
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "14px",
              }}
            >
              2
            </div>
            <span style={{ fontSize: "18px" }}>Checkout details</span>
          </div>

          <div style={{ color: "#ccc", fontSize: "20px" }}>→</div>

          {/* step 3 */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                backgroundColor: "#a3b1b0",
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "14px",
              }}
            >
              3
            </div>
            <span style={{ fontSize: "18px", color: "#a3b1b0" }}>Order complete</span>
          </div>
        </div>

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "40px",
            fontFamily: "Arial, sans-serif",
            color: "#333",
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "20px",
            boxSizing: "border-box",
          }}
        >
          {/* Left column */}
          <div style={{ flex: "1 1 600px" }}>
            {/* billing details form (زي ما هو) */}
            <div style={{ flex: '1 1 600px' }}>
        
        {/* Header */}
        <div style={{ backgroundColor: '#38b6ff', color: 'white', padding: '10px 20px', borderLeft: '7px solid black', textTransform: 'uppercase', fontWeight: 'bold', marginBottom: '30px', fontSize: '14px' }}>
          Billing details
        </div>

        {/* First & Last Name Row */}
        <div style={{ display: 'flex', gap: '20px', color: 'black' }}>
          <div style={{ flex: 1  }}>
            <label style={{ display: 'block', marginBottom: '5px', fontSize: '13px', fontWeight: 'normal' }}>
              First name <span style={{ color: 'red' }}>*</span>
            </label>
            <input type="text" style={{ width: '100%', padding: '10px', border: '1px solid #ccc', marginBottom: '20px', fontSize: '14px', boxSizing: 'border-box', outline: 'none',backgroundColor: "white" }} />
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', marginBottom: '5px', fontSize: '13px', fontWeight: 'normal' }}>
              Last name <span style={{ color: 'red' }}>*</span>
            </label>
            <input type="text" style={{ width: '100%', padding: '10px', border: '1px solid #ccc', marginBottom: '20px', fontSize: '14px', boxSizing: 'border-box', outline: 'none',backgroundColor: "white" }} />
          </div>
        </div>

        <label style={{ display: 'block', marginBottom: '5px', fontSize: '13px', fontWeight: 'normal' }}>
          Company name (optional)
        </label>
        <input type="text" style={{ width: '100%', padding: '10px', border: '1px solid #ccc', marginBottom: '20px', fontSize: '14px', boxSizing: 'border-box', outline: 'none',backgroundColor: "white" }} />

        <label style={{ display: 'block', marginBottom: '5px', fontSize: '13px', fontWeight: 'normal' }}>
          Country / Region <span style={{ color: 'red' }}>*</span>
        </label>
        <select style={{ width: '100%', padding: '10px', border: '1px solid #ccc', marginBottom: '20px', fontSize: '14px', boxSizing: 'border-box', outline: 'none', backgroundColor: 'white' }}>
          <option>Egypt</option>
        </select>

        <label style={{ display: 'block', marginBottom: '5px', fontSize: '13px', fontWeight: 'normal' }}>
          Street address <span style={{ color: 'red' }}>*</span>
        </label>
        <input type="text" placeholder="House number and street name" style={{ width: '100%', padding: '10px', border: '1px solid #ccc', marginBottom: '20px', fontSize: '14px', boxSizing: 'border-box', outline: 'none',backgroundColor: "white" }} />
        <input type="text" placeholder="Apartment, suite, unit, etc. (optional)" style={{ width: '100%', padding: '10px', border: '1px solid #ccc', marginBottom: '20px', fontSize: '14px', boxSizing: 'border-box', outline: 'none',backgroundColor: "white" }} />

        <label style={{ display: 'block', marginBottom: '5px', fontSize: '13px', fontWeight: 'normal' }}>
          Town / City <span style={{ color: 'red' }}>*</span>
        </label>
        <input type="text" style={{ width: '100%', padding: '10px', border: '1px solid #ccc', marginBottom: '20px', fontSize: '14px', boxSizing: 'border-box', outline: 'none',backgroundColor: "white" }} />

        {/* State / County - Red Error Style */}
        <label style={{ display: 'block', marginBottom: '5px', fontSize: '13px', fontWeight: 'normal' }}>
          State / County <span style={{ color: 'red' }}>*</span>
        </label>
        <select style={{ width: '100%', padding: '10px', marginBottom: '20px', fontSize: '14px', boxSizing: 'border-box', outline: 'none', border: '1px solid gray', color: '#777', backgroundColor: 'white' }}>
          <option>Select an option...</option>
        </select>

        <label style={{ display: 'block', marginBottom: '5px', fontSize: '13px', fontWeight: 'normal' }}>
          Postcode / ZIP <span style={{ color: 'red' }}>*</span>
        </label>
        <input type="text" style={{ width: '100%', padding: '10px', border: '1px solid #ccc', marginBottom: '20px', fontSize: '14px', boxSizing: 'border-box', outline: 'none',backgroundColor: "white" }} />

        <label style={{ display: 'block', marginBottom: '5px', fontSize: '13px', fontWeight: 'normal' }}>
          Phone <span style={{ color: 'red' }}>*</span>
        </label>
        <input type="text" style={{ width: '100%', padding: '10px', border: '1px solid #ccc', marginBottom: '20px', fontSize: '14px', boxSizing: 'border-box', outline: 'none',backgroundColor: "white" }} />

        <label style={{ display: 'block', marginBottom: '5px', fontSize: '13px', fontWeight: 'normal' }}>
          Email address <span style={{ color: 'red' }}>*</span>
        </label>
        <input type="text" style={{ width: '100%', padding: '10px', border: '1px solid #ccc', marginBottom: '20px', fontSize: '14px', boxSizing: 'border-box', outline: 'none',backgroundColor: "white" }} />

        <h3 style={{ fontSize: '20px', marginTop: '20px', marginBottom: '15px', fontWeight: 'normal' }}>Additional information</h3>
        <label style={{ display: 'block', marginBottom: '5px', fontSize: '13px', fontWeight: 'normal' }}>
          Order notes (optional)
        </label>
        <textarea 
          style={{ width: '100%', padding: '10px', border: '1px solid #ccc', marginBottom: '20px', fontSize: '14px', boxSizing: 'border-box', outline: 'none', height: '80px', fontFamily: 'inherit',backgroundColor: "white" }} 
          placeholder="Notes about your order, e.g. special notes for delivery."
        ></textarea>
      </div>
          </div>

          {/* Right column */}
          <div style={{ flex: "0 0 400px", minWidth: "300px" }}>
            <div style={{ backgroundColor: "#38b6ff", color: "white", padding: "10px 20px", borderLeft: "7px solid black", fontWeight: "bold", marginBottom: "30px" }}>
              Your order
            </div>

            <div style={{  padding: "20px" }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    <th style={{ textAlign: "center", border:"1px gray solid"  }}>Product</th>
                    <th style={{ textAlign: "center",border:"1px gray solid" }}>Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.cartItemID}>
                      <td style={{textAlign: 'left',padding:"15px",border:"1px gray solid", backgroundColor:'white',opacity:"75%"}}>
                        {item.product.productName} <strong> × {item.quantity}</strong>
                      </td>
                      <td style={{border:"1px gray solid",backgroundColor:'white'}}>
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </td>
                    </tr>
                  ))}

                  <tr>
                    <td style={{textAlign:"left",padding:"15px",border:"1px gray solid",fontWeight:"bold"}}><strong>Total</strong></td>
                    <td style={{border:"1px gray solid",fontWeight:"bold" }}>${subtotal}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <button
              style={{
                backgroundColor: "#012423",
                color: "white",
                border: "none",
                width: "100%",
                padding: "15px",
                marginTop: "20px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Place order
            </button>
          </div>
        </div>
      </div>
    ) : (
      <div className="cart-page-list empty-cart-page">
        <img src={emptyCart} className="btn-cart-page" alt="Empty Cart" />
        <h3>Looks like your cart is empty!</h3>
        <p className="opacity-50">Time to start your shopping</p>
      </div>
    )}
  </div>
</div>

        
  );
}
