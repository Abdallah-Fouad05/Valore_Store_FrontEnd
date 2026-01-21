import React from 'react'
import { useState,useEffect } from 'react'
import ProductCard from './ProductCard.jsx';

export default function ProductKid() {
    const [ProductKid, setProductKid] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [Error, setError] = useState(false)

    

    useEffect(() => {
        const abortController = new AbortController();
        const fetchproductKid = async () => {
            try {
                setIsLoading(true);
                setError(null);
                const response = await fetch(
                    'https://localhost:7278/api/Product/ByCategory/3', 
                    { 
                        signal: AbortController.signal,
                        headers: {
                            'Accept' : 'application/json'
                        }
                    });
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setProductKid(Array.isArray(data) ? 
                data.map((p) => 
                    ({
                        ...p,
                        id: p.productID, 
                })) : []);
            }
            catch (error) {
                if (error.name !== 'AbortError') {
                    console.error("Error fetching Product:", error);
                    setError("Failed to load Product. Please try again later.");
                }}
            finally {
                setIsLoading(false);
            }
        }
        fetchproductKid();
        return () => {
            abortController.abort();
        };
    }, [])

    return (
    <>
    <section className="hero-section position-relative text-white">
        <div
          className="hero-image"
          style={{
            backgroundImage:
              "url('/assets/productkidimage.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "90vh",
            minHeight: "600px",
          }}
        >
          <div className="hero-overlay position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>
          <div className="hero-content position-absolute top-50 start-0 translate-middle-y w-100 ps-5">
            <div className="container">
              <h1 className="display-3 fw-bold mb-4">Playful Fashion</h1>
              <p className="lead mb-5">
              Fun, colorful, and comfy clothes that let kids express themselves in style
              </p>
              <a
                href="#kid-section"
                className="btn btn-light btn-lg px-4 py-2 fw-bold text-dark"
              >
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </section>
    <section id="kid-section" className="featured-products py-5 bg-light">
        <div className="container">
            {Error ? (
                <div className="alert alert-danger text-center">{Error}</div>) : isLoading ?
                    (
                        <div className="text-center py-5">
                            <div className="spinner-border text-dark" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    ) : ProductKid.length === 0 ? 
                    (
                        <div className="text-center py-5">
                            <h5>No products found.</h5>
                        </div>
                    ) : 
                    (
                        <div className="row g-4">
                            {ProductKid.map((product) => (
                            <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    )
                }
        </div>
    </section>
    </>
    )
}

