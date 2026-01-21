import React, { useEffect, useState } from 'react';
import { LuShoppingCart } from "react-icons/lu";
import { TiShoppingCart } from "react-icons/ti";
import { MdOutlineShoppingBag } from "react-icons/md";
import { CartContext } from './CartContext';
import { useContext } from 'react';
import { MdDeleteForever } from "react-icons/md";
import './Cart.css'
import swal from 'sweetalert';


function Cart() {
    const[cartList,setcartList]= useState(false);
    const[cartItems,setcartItems]= useState([]);    
    const[isloading,setisloading]= useState(false);
    const[error,seterror]= useState(null);

    const UserID = localStorage.getItem('UserID');
    
    const { cartUpdated } = useContext(CartContext); 

    //
    const showCartList = () =>{
        cartList? setcartList(false): setcartList(true);
    }
    //


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

                        Accept: 'application/json',
                    },
                }
            );
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setcartItems(
                Array.isArray(data)
                    ? data.map(p => ({
                        ...p,
                        id: p.cartItemID,
                    }))
                    : []
            );
        } catch (error) {
            if (error.name !== 'AbortError') {
                console.error('Error fetching Cart Items:', error);
                seterror('Failed to load Cart Items. Please try again later.');
            }
        } finally {
            setisloading(false);
        }
    };

    fetchCartItems();

    return () => {
        abortController.abort();
    };
}, [cartUpdated]);

const removeCartItem = async (id) => {
            const response = await fetch(
                `https://localhost:7278/api/cart-items/Delete/${id}`,
                {
                    method: "DELETE",
                    headers: {
                        Accept: 'application/json',
                    },
                }
            );
            if (response.ok) {
                swal({
                    title: "Success",
                    text: "Item removed from cart successfully.",
                    icon: "success",
                    buttons: "ok"
                })
                setcartItems(prev => prev.filter(item => item.cartItemID !== id));
                
            }
            else if (!response.ok) {
                swal({
                    title: "Error",
                    text: `Error! remove item from cart failed.`,
                    icon: "error",
                    buttons: "ok"
                })
            }
    };
    return (
        <div className='cart'>
            <MdOutlineShoppingBag
                className='btn-cart'
                onClick={showCartList}
            />
            {cartItems.length > 0 ?
                <div className='cart-badge'>
                    {cartItems.length}
                </div>
            : ""}
            {cartList?  cartItems.length>0 ?
            (<ul className="cart-list">
            {cartItems.map((CartItem)=>(
                <li className="cart-item" key={CartItem.cartItemID}>
                    <img src={`../../public/assets/DefultProductImage.png`} alt={CartItem.product.productName} className="cart-item-image" />
                    <span className="cart-item-title">{CartItem.product.productName}</span>
                    <span className="cart-item-price">${CartItem.product.price}</span>
                    <span className="cart-item-quantity">Qty: {CartItem.quantity}</span>
                    <span className="cart-item-remove"
                    onClick={()=>removeCartItem(CartItem.cartItemID)}
                    ><MdDeleteForever/></span>
                    
                </li>
            ))}
        </ul>)
        :(
            <div className="cart-list empty-cart">
            <TiShoppingCart className="btn-cart"/>
            <p>Your cart is empty- start Shopping</p>
            </div>
        )
        :(false)}
        </div>
    )
}

export default Cart;
