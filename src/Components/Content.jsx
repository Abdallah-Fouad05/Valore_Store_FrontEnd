import React from 'react'
import { FaPhone,FaEnvelope } from "react-icons/fa6";

function Content() {
  return (
    <>
    
<section id="contact" className="tm-section container">
  <h2 className="tm-text-primary" style={{color: "#38b6ff"}}>CONTACT OUR STORE</h2>
  <hr className="mb-5" />

  <div className="row">
    {/* Left Column – Form */}
    <div className="col-xl-6 tm-contact-col-l mb-4">
      <form className="tm-contact-form">
        <div className="form-group">
          <input
            type="text"
            className="form-control rounded-0"
            placeholder="Your Name"
            required
          />
        </div>

        <div className="form-group">
          <input
            type="email"
            className="form-control rounded-0"
            placeholder="Your Email"
            required
          />
        </div>

        <div className="form-group">
          <select className="form-control" defaultValue="-">
            <option value="-">Subject</option>
            <option value="order">Order Support</option>
            <option value="size">Size & Fit</option>
            <option value="collab">Collaboration</option>
          </select>
        </div>

        <div className="form-group">
          <textarea
            rows="14"
            className="form-control rounded-0"
            placeholder="Your Message"
            required
          ></textarea>
        </div>

        <div className="form-group tm-text-right">
          <button type="submit" className="btn btn-primary" style={{marginTop : "20px"}}>
            Send Message
          </button>
        </div>
      </form>
    </div>

    {/* Right Column – Map & Info */}
    <div className="col-xl-6 tm-contact-col-r">
      {/* Map */}
      <div className="mapouter mb-4">
        <div className="gmap_canvas">
          <iframe
            title="store-location"
            width="100%"
            height="520"
            src="https://maps.google.com/maps?q=Cairo,Egypt&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            scrolling="no"
          ></iframe>
        </div>
      </div>

      {/* Address */}
      <address className="mb-4"><br />
        📍 Cairo, Egypt
      </address>

      {/* Contact Links */}
      <ul className="tm-contact-links mb-4">
        <li className="mb-2">
          <a href="tel:+201234567890" style={{color: "black"}}>
            <FaPhone className="fas fa-phone mr-2 tm-contact-link-icon"/>
                Phone: +20 123 456 7890
          </a>
        </li>
        <li>
          <a href="mailto:support@yourstore.com" style={{color: "black"}}>
            <FaEnvelope className="fas fa-envelope mr-2 tm-contact-link-icon"/>
                Email: support@Valore.com
          </a>
        </li>
      </ul>

      {/* Social */}
      <ul className="tm-contact-social">
        <li>
          <a href="#" className="tm-social-link">
            <i className="fab fa-facebook"></i>
          </a>
        </li>
        <li>
          <a href="#" className="tm-social-link">
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="#" className="tm-social-link">
            <i className="fab fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href="#" className="tm-social-link">
            <i className="fab fa-youtube"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</section>




    </>
  )
}

export default Content;