import React from "react";
import "./Blog.css";
import { FaTruck } from "react-icons/fa";
import { FaExchangeAlt } from "react-icons/fa";
import { FaPercent } from "react-icons/fa";
import {FaUser} from 'react-icons/fa';

function Blog() {
    const services = [
  { icon: FaTruck, title: "Delivery Services" },
  { icon: FaExchangeAlt, title: "Shipping & Return" },
  { icon: FaPercent, title: "Promotion" },
  { icon: FaUser, title: "24 Hours Service" },
];
  return (
    <>
      {/* Modal */}
      <div
        className="modal fade bg-white"
        id="templatemo_search"
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="w-100 pt-1 mb-5 text-right">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <form className="modal-content modal-body border-0 p-0">
            <div className="input-group mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="Search ..."
              />
              <button
                type="submit"
                className="input-group-text bg-success text-light"
              >
                <i className="fa fa-fw fa-search text-white"></i>
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Banner */}
      <section className="bg-color py-5">
        <div className="container">
          <div className="row align-items-center py-5">
            <div className="col-md-8 text-dark">
              <h1 style={{color: "#38b6ff"}}>About Us</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="col-md-4">
              <img
                src={`/assets/about.jpg`}
                alt="About Hero"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="container py-5">
        <div className="row text-center pt-5 pb-3">
          <div className="col-lg-6 m-auto">
            <h1 className="h1">Our Services</h1>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>

        <div className="row">
            {services.map((item, index) => {
                const Icon = item.icon;
                return (
                    <div className="col-md-6 col-lg-3 pb-5" key={index}>
                        <div className="h-100 py-5 services-icon-wap shadow item">
                            <div className="h1 text-color text-center">
                            <Icon />
                            </div>
                            <h2 className="h5 mt-4 text-center">{item.title}</h2>
                        </div>
                    </div>
                );
            })}
        </div>

      </section>

      {/* Brands */}
        <section className="bg-color py-5">
          <div className="container my-4">
    <div className="row text-center py-3">
      <div className="col-lg-6 m-auto">
        <h1 className="h1">Our Brands</h1>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>

      <div className="col-lg-9 m-auto">
        <div
          id="templatemo-slide-brand"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">

            {[1, 2, 3].map((slideIndex) => (
              <div
                className={`carousel-item ${slideIndex === 1 ? "active" : ""}`}
                key={slideIndex}
              >
                <div className="row">
                  {[1, 2, 3, 4].map((num) => (
                    <div className="col-3 p-md-5" key={num}>
                      <img
                        src={`/assets/brand_0${num}.png`}
                        className="img-fluid brand-img"
                        alt="Brand"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}

          </div>

          {/* Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#templatemo-slide-brand"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#templatemo-slide-brand"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </div>
    </div>
          </div>
        </section>

    </>
  );
}

export default Blog;
