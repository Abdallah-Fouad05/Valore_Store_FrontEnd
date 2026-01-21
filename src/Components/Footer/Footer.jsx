import React from 'react'
import './Footer.css'
import { FaMapLocationDot } from "react-icons/fa6";
import { FaPhone, FaTwitter } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-dark" id="tempaltemo_footer">
        <div className="container">
            <div className="row">
                <div className="col-md-4 pt-5">
                    <h2 className="h2 text-light border-bottom pb-3 border-light text-logo">Valore Store</h2>
                    <ul className="list-unstyled text-light footer-link-list">
                        <li>
                            <FaMapLocationDot></FaMapLocationDot>
                            <a href='#'> Store online</a>
                        </li>
                        <li>
                            <FaPhone></FaPhone>
                            <a className="text-decoration-none" href="tel:010-020-0340"> 000-000-000</a>
                        </li>
                        <li>
                            <FaEnvelope></FaEnvelope>
                            <a className="text-decoration-none" href="mailto:info@company.com"> Valore@gmail.com</a>
                        </li>
                    </ul>
                </div>

                <div className="col-md-4 pt-5">
                    <h2 className="h2 text-light border-bottom pb-3 border-light">Products</h2>
                    <ul className="list-unstyled text-light footer-link-list text-start">
                        <li><a className="text-decoration-none" href="#">Kids's Category</a></li>
                        <li><a className="text-decoration-none" href="#">Men's Category</a></li>
                        <li><a className="text-decoration-none" href="#">Women's Category</a></li>
                        <li><a className="text-decoration-none" href="#">Popular Products</a></li>
                    </ul>
                </div>
                <div className="col-md-4 pt-5">
                    <h2 className="h2 text-light border-bottom pb-3 border-light">Further Info</h2>
                    <ul className="list-unstyled text-light footer-link-list text-start">
                        <li><a className="text-decoration-none" href="#">Home</a></li>
                        <li><a className="text-decoration-none" href="#">Store</a></li>
                        <li><a className="text-decoration-none" href="#">FAG</a></li>
                        <li><a className="text-decoration-none" href="#">Blog</a></li>
                        <li><a className="text-decoration-none" href="#">Contact</a></li>
                    </ul>
                </div>
            </div>
            <div className="row text-light mb-4">
                <div className="col-12 mb-3">
                    <div className="w-100 my-3 border-top border-light"></div>
                </div>
                <div className="col-auto me-auto">
                    <ul className="list-inline text-left footer-icons">
                        <li className="list-inline-item  rounded-circle text-center">
                            <a className="text-light text-decoration-none" target="_blank" href="http://facebook.com/"><FaFacebook></FaFacebook></a>
                        </li>
                        <li className="list-inline-item  rounded-circle text-center">
                            <a className="text-light text-decoration-none" target="_blank" href="https://www.instagram.com/"><FaInstagram></FaInstagram></a>
                        </li>
                        <li className="list-inline-item t rounded-circle text-center">
                            <a className="text-light text-decoration-none" target="_blank" href="https://twitter.com/"><FaTwitter></FaTwitter></a>
                        </li>
                        <li className="list-inline-item rounded-circle text-center">
                            <a className="text-light text-decoration-none" target="_blank" href="https://www.linkedin.com/"><FaLinkedin></FaLinkedin></a>
                        </li>
                    </ul>
                </div>
                <div className="col-auto">
                    <label className="sr-only" htmlFor="subscribeEmail">Email address</label>
                    <div className="input-group mb-2">
                        <input type="text" className="form-control bg-dark border-light" id="subscribeEmail" placeholder="Email address"/>
                        <div className="input-group-text btn-success text-light">Subscribe</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-100 bg-black py-3">
            <div className="container">
                <div className="row pt-2">
                    <div className="col-12">
                        <p className="text-left text-light">
                            Copyright © 2026 Valore Store
                            | Designed by <a rel="sponsored" href="https://templatemo.com" target="_blank">Abdallah Fouad</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>

    </footer>
  )
}

export default Footer;