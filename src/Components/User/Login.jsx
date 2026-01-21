import React from 'react'
import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import ParticlesBackground from './ParticlesBackground';
function Login() {
        const [loginForm, setLoginForm] = useState({
            email: "",
            password: "",
        });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

     const navigate = useNavigate();


    const handleChange = (e) => {
        const { name, value } = e.target;
            setLoginForm((prev) => ({ ...prev, [name]: value }));
        };
    
    const handleSubmit = async() =>{
        setLoading(true);
        setError("");
        setSuccess("");

        try {
            const response = await fetch("https://localhost:7278/api/User/Login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    "email": loginForm.email,
                    "password": loginForm.password,
                }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log("Login successful:", data);

            setSuccess(`Welcome ${data.userName}`);
            setLoginForm({ email: "", password: "" });
            const islogged = true;
            if(islogged)
                localStorage.setItem("UserID", data.userID);
                setTimeout(() => {
                    navigate("/");
                    window.location.reload(); 
                }, 2000);
                
            
        } catch (err) {
            console.error(err);
            setError("Login failed. Please check your credentials.");
        } finally {
            setLoading(false);
            
        }
    }
    


return (
    <div className='login-page bg-black' style={{overflow:"hidden"}}>
        <ParticlesBackground/>
    <div className='d-flex justify-content-center align-items-center vh-100'>
        <div className="position-relative rounded-3 p-4 w-100 m-2" style={{ maxWidth: "500px", backgroundColor : "#e5e5e5" }}>
            <form className="d-flex flex-column justify-content-center align-items-center h-100 ms-4 mt-4">
                <label htmlFor='email' className='w-100 mb-3 text-start'>
                    Email: 
                    <input
                        className="form-control mt-2"
                        placeholder="Email"
                        type="email"
                        name="email"
                        required
                        value={loginForm.email}
                        onChange={handleChange}
                    ></input>
                </label>
                <label htmlFor='password' className='w-100 mb-3 text-start'>
                    Password: 
                    <input 
                    className="form-control mt-2" 
                    placeholder="Password" 
                    type="password" 
                    name="password"
                    required
                    value={loginForm.password}
                    onChange={handleChange}
                ></input>
                </label>

                {error && (
                    <div className="alert alert-danger w-100 text-center">
                        {error}
                    </div>
                )}

            {success && (
                <div className="alert alert-success w-100 text-center">
                    {success}
                </div>
            )}
            <button
                onClick={handleSubmit}
                className="btn btn-primary w-50 mt-2"
                disabled={loading}
            >
                {loading ? "Logging In......" : "Log In"}
                
            </button>
            <p style={{marginTop: "9px",color: "black",opacity: "75%",fontSize: "small"}}>
                Don`t have an account?
                <Link to="/signup" style={{color:"black"}}>Sign Up</Link>
            </p>
    
            </form>
        </div>
    </div>
</div>
  )
}

export default Login