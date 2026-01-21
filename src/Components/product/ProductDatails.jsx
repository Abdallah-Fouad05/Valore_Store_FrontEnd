import { useEffect, useState,useContext } from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { CartContext } from '../cartHeader/CartContext';

export default function ProductDetails() {

    const { productId } = useParams();

    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [cartError,setCartError] = useState(null);

    const userID = localStorage.getItem('UserID');
    const { triggerCartUpdate } = useContext(CartContext);

    const location = useLocation();
    const previousPath = location.state?.from || "/store";

    useEffect(() => {
        const abortController = new AbortController();

        const fetchProductDetails = async () => {
        try {
            if (!productId) {
                setError("Invalid product ID.");
                setIsLoading(false);
                return;
        }

        setIsLoading(true);
        setError(null);

        const response = await fetch(
            `https://localhost:7278/api/Product/${productId}`,
            {
                signal: abortController.signal,
                headers: { Accept: "application/json" },
            }
        );

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProduct({ ...data, id: data.productID });
        } catch (err) {
        if (err.name !== "AbortError") {
            console.error("Error fetching product:", err);
            setError("Failed to load product details.");
        }
        } finally {
        setIsLoading(false);
        }
        };

    fetchProductDetails();
    return () => abortController.abort();
    }, [productId]);

    const handleAddtoCart = async () => {
  setCartError(null);

  if (!product?.id) {
    swal({
      title: "Error",
      text: "Invalid product data.",
      icon: "error",
      button: "Ok",
    });
    return;
  }

  try {
    const response = await fetch("https://localhost:7278/api/cart-items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        productID: product.id,
        userID: userID,
        quantity: 1,
      }),
    });

    if (response.ok) {
      swal({
        title: "Success",
        text: "Product Added To Cart",
        icon: "success",
        button: "Ok",
      });
      triggerCartUpdate();
    } 
    else if (response.status === 400) {
      swal({
        title: "Warning",
        text: "Product already in cart",
        icon: "warning",
        button: "Ok",
      });
    } 
  } catch (error) {
    swal({
      title: "Error",
      text: "Server error or network issue",
      icon: "error",
      button: "Ok",
    });
  }
};


    if (isLoading) {
        return (
        <div className="text-center py-5">
            <div className="spinner-border text-dark" role="status" />
        </div>
    );
    }

    if (error) {
        return (
            <div className="container text-center py-5">    
                <Link to={previousPath} className="btn btn-outline-dark btn-lg">
                    Back to Products
                </Link>
            </div>
        );
    }

    if (!product) {
        return <div className="text-center py-5">Product not found</div>;
    }



    return (
        <div className="product-details">
            <div className="container">
                <div className="row g-4 justify-content-center">
                <div className="col-md-4">
                    <div className="card h-100 border-0 shadow-sm">
                  <div
                    className="card-img-top"
                    style={{
                      height: "300px",
                      backgroundImage: `url(${
                        product.image ||
                        product.imageURL ||
                        "/assets/DefultProductImage.png"
                      })`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                <div 
                className="card-body text-start" 
                style={{
                    padding: "20px",
                    backgroundColor: "#f8f9fa",
                    borderRadius: "15px",
                    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                    transition: "transform 0.3s, box-shadow 0.3s" // لو حبيت تحط hover
                  }}
                >
                  <p  
                    className="card-title fw-bold" 
                    style={{ 
                      fontSize: "1rem", 
                      color: "#212529", 
                      marginBottom: "10px" 
                    }}
                  >
                    <span style={{ fontWeight: "normal", color: "#6c757d" }}>Product Name: </span>
                    {product.productName}
                  </p>
                  <p 
                    className="card-text text-muted fst-italic" 
                    style={{ 
                      fontSize: "0.95rem", 
                      marginBottom: "10px" 
                    }}
                  >
                    <span style={{ color: "#6c757d" }}>Title: </span>{product.title}
                  </p>
                
                  <p 
                    className="card-text" 
                    style={{ 
                      fontSize: "0.9rem", 
                      color: "#495057", 
                      marginBottom: "15px" 
                    }}
                  >
                    <span style={{ color: "#6c757d" }}>Description: </span>{product.description}
                  </p>
                
                  <p 
                    className="card-text fw-semibold" 
                    style={{ 
                      fontSize: "1.1rem", 
                      color: "#28a745", 
                      marginBottom: "10px" 
                    }}
                  >
                    <span style={{ fontWeight: "normal", color: "#6c757d" }}>Price: </span>{product.price}$
                  </p>
                
                  <p 
                    className="card-text badge" 
                    style={{ 
                      backgroundColor: "#0d6efd", 
                      color: "#fff", 
                      padding: "5px 12px", 
                      fontSize: "0.85rem",
                      borderRadius: "12px"
                    }}
                  >
                    <span style={{ backgroundColor: "transparent", fontWeight: "normal" }}>Category: </span>
                    {product.category.categoryName}
                  </p> 
                </div>
                <button
    className="btn btn-primary btn-lg me-3 mgb-3"
    style={{width:"100%", marginBottom:"10px",marginTop:"10px", borderColor:"#343a40"}}
    onClick={handleAddtoCart}
>
    🧺 Add to Cart
</button>

                <Link to={previousPath} className="btn btn-outline-dark btn-lg">
                    ◀️ Back to Products
                </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
