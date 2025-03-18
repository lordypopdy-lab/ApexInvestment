import React from 'react'
import "../utils/Login.css"
import axios from 'axios';
import Widget101 from '../components/Widget101'
import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import FadeLoader from 'react-spinners/FadeLoader';
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye'
import toast from 'react-hot-toast';

const Login = () => {

    const [icon, setIcon] = useState(eyeOff);
    const [type, setType] = useState('password');
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({ email: "", password: "" });

    const handleToggle = () => {
        if (type === 'password') {
            setIcon(eye);
            setType('text')
        } else {
            setIcon(eyeOff)
            setType('password')
        }
    }


    const login = async (event) => {
        event.preventDefault();
        setLoading(true);
        const { email, password } = data;

        await axios.post("/login", {
            email,
            password
        }).then((data) => {
            if (!data.data.error) {
                localStorage.setItem("user", JSON.stringify(data.data));
                toast.success("Logged in successfully. Welcome!");
                setData({
                    email: "",
                    password: ""
                })
                setLoading(false);
                setTimeout(() => {
                    window.location.href = "/dashboard";
                }, 2000);
            } else {
                setLoading(false);
                toast.error(data.data.error);
            }
        })
    }

    return (
        <>
            <div className="container-fluid">
                <Widget101 />
                <div className="container-fluid page-body-wrapper full-page-wrapper mt-5">
                    <div className="login-sub-main">
                        <h3 className="card-title text-center mt-5 mb-3">| Login | Account |</h3>
                        <form onSubmit={login} className='login-form card-gradient'>
                            <div className="form-group">
                                <label>Email *</label>
                                <input
                                    type="email"
                                    className="data"
                                    value={data.email}
                                    onChange={(e) => setData({ ...data, email: e.target.value })}
                                    placeholder="Enter Email"
                                />
                            </div>
                            <FadeLoader
                                color="#36d7b7"
                                loading={loading}
                                speedMultiplier={3}
                                style={{ textAlign: 'center', position: 'absolute', left: '50%', zIndex: '1' }}
                            />
                            <div className="box-auth-pass form-group">
                                <label>Password *</label>
                                <input
                                    value={data.password}
                                    onChange={(e) => setData({ ...data, password: e.target.value })}
                                    type={type}
                                    className="data"
                                    placeholder="Enter Password"
                                />
                                <span className="show-pass" onClick={handleToggle}>
                                    <Icon style={{ marginTop: "35px", marginRight: "15px" }} class="absolute text-dark" icon={icon} size={15} />
                                </span>
                            </div>
                            <div className="form-group d-flex align-items-center justify-content-between">
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox" className="form-check-input" /> Remember me </label>
                                </div>
                            </div>
                            <div className="text-center">
                                <button type="submit" className="w-100 btn btn-warning btn-block enter-btn">Login</button>
                            </div>
                            <p className="text-center mt-2 sign-up">Don't have an Account?<Link to="/register" className="text-warning"> Sign Up</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
