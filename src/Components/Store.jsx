import React, { useEffect, useState } from 'react'
import ProductCard from './product/ProductCard.jsx';
import CategoriesSection from './CategoriesSection.jsx';

function Products() {
    const [featuredProducts, setFeaturedProducts] = useState([]);
    const [Categories,setCategories]=useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortController = new AbortController();

        const fetchCategories = async () => {
            setIsLoading(true);
            setError(null);
            try{
                const response = await fetch("https://localhost:7278/api/Category/GetAll",
                    {
                        signal: abortController.signal,
                        headers: { Accept: "application/json"}                        
                    }
                );
                if (!response.ok)
                    throw new Error(`HTTP error! status: ${response.status}`);
                const data = await response.json();
                setCategories(Array.isArray(data) ? data : []);
            }
            catch (error) {
                if (error.name !== "AbortError") {
                    console.error("Error fetching categories:", error);
                    setError("Failed to load categories. Please try again later.");
                }
            }
            finally {
                setIsLoading(false);
            }

        };
        fetchCategories();
        const fetchProducts = async () => {
            try {
                setIsLoading(true);
                setError(null);
                const response = await fetch(
                    "https://localhost:7278/api/Product/GetAll",
                    {
                        signal: abortController.signal,
                        headers: { Accept: "application/json" },
                    }
                );
                if (!response.ok)
                    throw new Error(`HTTP error! status: ${response.status}`);
                const data = await response.json();
                setFeaturedProducts(Array.isArray(data) ? data : []);
            } 
        catch (error) {
            if (error.name !== "AbortError") {
                console.error("Error fetching products:", error);
                setError("Failed to load products. Please try again later.");
            }
        }
        finally {
            setIsLoading(false);
        }
        };
        fetchProducts();

    return () => abortController.abort();
}, []);
    
    return (
        <>
            <div className='store-page'>
                <CategoriesSection categories={Categories} />
                <section className="featured-products py-5 bg-light">
                    <div className="container">
                        {error ? (<div className="alert alert-danger text-center">{error}</div>) : isLoading ? 
                            (
                                <div className="text-center py-5">
                                    <div className="spinner-border text-dark" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                </div>
                            ):featuredProducts.length === 0 ? 
                                (
                                <div className="text-center py-5">
                                    <h5>No products found.</h5>
                                </div>
                                ):
                                <div className="row g-4">  
                                    {featuredProducts.map((product) => 
                                    (
                                        <ProductCard key={product.productID} product={product} />
                                    )   
                                    )}
                                </div>
                        }
                    </div>
            </section>
        </div>
    </>
    )
}

export default Products