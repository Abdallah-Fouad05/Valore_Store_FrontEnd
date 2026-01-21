import { Link, useLocation } from "react-router-dom";
import { CartProvider } from "../cartHeader/CartContext";
export default function ProductCard({product}){
    const location = useLocation();
    return (
    <div className="col-md-4">
        <div className="card h-100 border-0 shadow-sm">
        <div
            className="card-img-top"
            style={{
                height: "300px",
                backgroundImage: `url(${
                product.Image || product.ImageURL || "/assets/DefultProductImage.png"
                })`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            }}
        ></div>
        <div className="card-body">
            <h5 className="card-title">{product.productName}</h5>
            <p className="card-text text-muted">${product.price}</p>
        </div>
            <div className="card-footer bg-transparent border-0">
            <Link
                to={`/store/${product.productID || product.id}`}
                state={{
                from: location.pathname,
            }}
            className="btn btn-dark w-100"
            >
                View Details
            </Link>
            </div>
        </div>
    </div>
    );
}