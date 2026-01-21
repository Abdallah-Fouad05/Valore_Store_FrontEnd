import React from 'react'
import './Header.css'
import { CiLogin, CiUser } from "react-icons/ci";
import { FaRegUserCircle, FaUser } from "react-icons/fa";
import logo from '../../assets/Valore.png'
import {Link} from 'react-router-dom';
import Cart from '../cartHeader/Cart.jsx';
import { CartProvider } from '../cartHeader/CartContext.jsx';
function Header() {
    const UserId = localStorage.getItem("UserID");
    return (
        <>
            <div className='container'>
                <nav className="navbar navbar-expand-lg navbar-light ">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="Logo" width="160" height="60" className="d-inline-block align-text-top"/>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to='/'>HOME</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/store">
                                    STORE
                                </Link>
                                
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/cart">CART</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/faq">FAQ</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/blog">BLOG</Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link' to="/content">CONTACT</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='column' style={{display: "flex", gap: "20px",alignItems: "center",}}>
                        <Cart/>
                        {UserId > 0? (
                            <Link to="/login">
                                <p style={{margin: "0", padding: "0", fontWeight: "bold", cursor: "pointer",color:'black',fontSize:"25px"}}>
                                    <FaUser style={{fontWeight:'bold'}}></FaUser>
                                </p>
                            </Link>
                        ) : (
                            <Link to="/login">
                                <button className="btn btn-primary my-2 my-sm-0" type="">
                                    Log In
                                    <CiLogin></CiLogin>
                                </button>
                            </Link>
                        )}
                    </div>
                </nav>
            </div>
            
        </>
    )
}

export default Header;