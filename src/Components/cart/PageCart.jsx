import React, { useEffect, useState, useContext } from "react";
import { TiShoppingCart } from "react-icons/ti";
import { MdDeleteForever } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import swal from "sweetalert";
import emptyCart from '../../../public/assets/empty-cart.png'

import { CartContext } from "../cartHeader/CartContext";
import "./PageCart.css";
import { Link } from "react-router-dom";

function CartProcess() {
  const [cartItems, setcartItems] = useState([]);
  const [isloading, setisloading] = useState(false);
  const [error, seterror] = useState(null);


  const UserID = localStorage.getItem('UserID');

  const [pendingUpdate, setPendingUpdate] = useState(null);


  const { cartUpdated } = useContext(CartContext);

  const increase = (id) => {
  setcartItems(prev =>
    prev.map(item =>
      item.cartItemID === id?
        (() => {
            const newQuantity = Math.max(Math.min(item.quantity + 1, item.product.quantity),1);       
            const updated = { ...item, quantity: newQuantity };
            setPendingUpdate({
              cartItemID: item.cartItemID,
              quantity: newQuantity
            });
            return updated;
          })()
        : item
    )
  );
};


const decrease = (id) => {
  console.log("Descrease")
  setcartItems(prev =>
    prev.map(item => 
      item.cartItemID === id ? 
      ( () => {
          const newQuantity = Math.max(Math.min(item.quantity - 1, item.product.quantity),1);       
        const updated = {...item, quantity : newQuantity}
        setPendingUpdate({
          cartItemID: updated.cartItemID,
          quantity : newQuantity
        });
        return updated;
    })()
      : item
      )
  );
}

  /* ===== Fetch Cart Items ===== */
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

  /* ====update qty ======= */
useEffect(() => {
  const abortController = new AbortController();

  const updateQty = async () => {
    setisloading(true);
    seterror(null);
    try {
      const response = await fetch(
        "https://localhost:7278/api/cart-items/update",
        {
          method: "PUT",
          signal: abortController.signal,
          headers: { 
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            cartItemID: pendingUpdate.cartItemID,
            quantity: pendingUpdate.quantity
          })
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // optional: handle returned data
      const result = await response.json();
      console.log("Update Success:", result);

    } catch (err) {
      if (err.name !== "AbortError") {
        seterror("Failed to Update Cart Items.");
        console.error(err);
      }
    } finally {
      setisloading(false);
    }
  };

  updateQty();

  return () => abortController.abort();
}, [pendingUpdate]);





  /* ===== Remove Cart Item ===== */
  const removeCartItem = async (id) => {
    const response = await fetch(
      `https://localhost:7278/api/cart-items/Delete/${id}`,
      {
        method: "DELETE",
        headers: { Accept: "application/json" },
      }
    );

    if (response.ok) {
      swal({
        title: "Success",
        text: "Item removed from cart successfully.",
        icon: "success",
        buttons: "ok",
      });
        

      setcartItems((prev) =>
        prev.filter((item) => item.cartItemID !== id)
      );
      
    } else {
      swal({
        title: "Error",
        text: "Remove item from cart failed.",
        icon: "error",
        buttons: "ok",
      });
    }


  };

  /* ===== Render ===== */
  return (
  <div className="cart-page">
    <div className="container" >
      {cartItems.length > 0 ? (
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', fontFamily: 'sans-serif', padding: '20px' ,justifyContent: "center" }}>
      
      {/* step 1 */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{
          width: '30px', height: '30px', borderRadius: '50%', backgroundColor: '#052926', 
          color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '14px'
        }}>1</div>
        <span style={{ fontSize: '18px', fontWeight: '500', color: '#000' }}>Shopping cart</span>
      </div>

      <div style={{ color: '#ccc', fontSize: '20px' }}>→</div>

      {/* step 2 */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' ,}}>
        <div style={{
          width: '30px', height: '30px', borderRadius: '50%', backgroundColor: '#a3b1b0', 
          color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '14px'
        }}>2</div>
        <Link to='/checkout'>
          <span className="step2" style={{ fontSize: '18px',color: "#000000", opacity:"50%"}}>Checkout details</span>
        </Link>
      </div>

      
      <div style={{ color: '#ccc', fontSize: '20px' }}>→</div>

      {/* step 3 */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{
          width: '30px', height: '30px', borderRadius: '50%', backgroundColor: '#a3b1b0', 
          color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '14px'
        }}>3</div>
        <span style={{ fontSize: '18px', color: '#a3b1b0' }}>Order complete</span>
      </div>

    </div>
          {/* Cart table */}
          <table className="product-table" cellSpacing="0">
            <thead>
              <tr>
                <th className="product-remove"><span className="screen-reader-text" alt="remove product"></span></th>
                <th className="product-image"><span className="screen-reader-text" alt="product image"></span></th>
                <th scope="col" className="product-name">Product</th>
                <th scope="col" className="product-price">Price</th>
                <th scope="col" className="product-quantity">Quantity</th>
                <th scope="col" className="product-subtotal">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {
                cartItems.map(item => (
                  <tr key={item.cartItemID}>
                    <td className="product-remove">
                      <span
                        className="cart-page-item-remove"
                        onClick={() =>
                          removeCartItem(item.cartItemID)
                        }
                      >
                        <MdDeleteForever />
                      </span>
                    </td>
                    <td className="product-image">
                      <img src={`../../public/assets/DefultProductImage.png`} alt={item.product.productName} className="cart-page-item-image" />
                    </td>
                    <td className="product-name">
                        <span className="cart-item-title fw-bold text-start">{item.product.productName}</span>
                        <br></br>
                        <span className="cart-item-title opacity-50 text-start">{item.product.title}</span>
                    </td>
                    <td className="product-price">
                      <span className="fw-bold">${(item.product.price).toFixed(2)}</span>
                    </td>
                    {/* later */}
                    <td className="product-quantity" data-title="Quantity">
                      <div className="qty-wrapper">
                          <button className="qty-btn minus" onClick={() => decrease(item.cartItemID)}>−</button>

                          <div className="qty-number">{item.quantity}</div>

                          <button className="qty-btn plus" onClick={() => increase(item.cartItemID)}>+</button>
                        </div>
                    </td>
                    <td className="product-subtotal fw-bold">
                      <span>
                        ${(item.quantity * item.product.price).toFixed(2)}
                      </span>
                    </td>
                  </tr>
                ))
              }
              <tr className="col">
                <td colSpan={5}></td>
                <td>    
                    <Link to='/checkout'>
                        <button className="btn-primary" style={{margin: "10px"}}>
                            Continue shopping
                        </button>
                    </Link>
                </td>
              </tr>
            </tbody>
          </table>
      </div>
      ) : (
        
        <div className="cart-page-list empty-cart-page">
          <img src={emptyCart} className="btn-cart-page" alt="Empty Cart" />

          <h3 className="">Looks like your cart is empty!</h3>
          <p className="opacity-50">Time to start your shopping</p>
        </div>
      )}
    </div>
    </div>
  );
}

export default CartProcess;
