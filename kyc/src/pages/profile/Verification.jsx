import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';
import FadeLoader from 'react-spinners/FadeLoader';

const Verification = () => {
    // if (!localStorage.getItem('email')) { location.href = '/login'; }

    const [sent, setSent] = useState(false);
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState({ email: "", otp: "" });

    const getCode = async () => {
        setLoading(true)
        const { email } = data;
        await axios.post("/getOTP", {email}).then((data)=> {
            if(data.data.OTP){
                setLoading(false)
                setSent(true)
                toast.success(data.data.message)
                console.log("Success OTP:", data.data);
            }else if(data.data.error){
                setLoading(false);
                toast.error(data.data.error)
                console.log(data.data.error);
            }
        })
        console.log("Getting Code...")
    }

    const verifyCode = async () => {
        setLoading(true);
        const { otp } = data;
        await axios.post('/verifyOtp', {otp}).then((data)=>{
            if(data.data.success){
                setLoading(false)
                setData({otp: ""});
                console.log(data.data);
                toast.success(data.data.success)
            }else if(data.data.error){
                setLoading(false);
                setData({otp: ""});
                toast.error(data.data.error);
            }
        })
    }
    return (
        <>
            <div className="header fixed-top bg-surface d-flex justify-content-center align-items-center">
                <a href="javascript:void(0);" className="left back-btn"><i className="icon-left-btn"></i></a>
                <h3>Verification</h3>
                <a href="javascript:void(0);" className="right"><i className="icon-question"></i></a>
            </div>
            <div className="pt-45 pb-16">
                <div className="tf-container">
                    <div className="accent-box bg-menuDark mt-4">
                        <h4>Verification</h4>
                        <h5 className="mt-20">Features and limitations</h5>
                        <ul className="pt-16 pb-12 line-bt">
                            <li className="d-flex justify-content-between align-items-center">
                                <span className="text-small">MAX DEPOSITE</span>
                                <span className="text-white text-large">5.000.000 USD lifetime</span>
                            </li>
                            <li className="mt-12 d-flex justify-content-between align-items-center">
                                <span className="text-small">MAX WITHDRAWAL</span>
                                <span className="text-white text-large">5.000.000 USD lifetime</span>
                            </li>
                        </ul>
                        <h5 className="mt-12">Request</h5>
                        <div className="mt-16 d-flex gap-8 mr--16">
                            <p className="text-small text-white d-flex align-items-center gap-6"><i className="dot-md bg-secondary"></i> Personal information</p>
                            <p className="text-small text-white d-flex align-items-center gap-6"><i className="dot-md bg-secondary"></i> Verified ID Card</p>
                        </div>
                        <a href="/ChooseVerification" className="tf-btn xs btn-warning mt-12">Verification</a>
                    </div>
                </div>
            </div>
            <FadeLoader
                color="#36d7b7"
                loading={loading}
                speedMultiplier={3}
                style={{ textAlign: 'center', position: 'relative', marginLeft: '50%' }}
            />

       {sent === false ? (  
            <div className="pt-45 pb-16">
                <div className="tf-container">
                    <div className="accent-box bg-menuDark mt-4">
                        <h4>OTP02 Verification</h4>
                        <h5 className="mt-20">Features and limitations</h5>
                        <ul className="pt-16 pb-12 line-bt">
                            <li className="d-flex justify-content-between align-items-center">
                                <span className="text-small">MAX DEPOSITE</span>
                                <span className="text-white text-large">1.000.000 USD lifetime</span>
                            </li>
                            <li className="mt-12 d-flex justify-content-between align-items-center">
                                <span className="text-small">MAX WITHDRAWAL</span>
                                <span className="text-white text-large">1.000.000 USD lifetime</span>
                            </li>
                        </ul>
                        <div className="mt-16 d-flex gap-8 mr--16">
                            <p className="text-small text-white d-flex align-items-center gap-6"><i className="dot-md bg-secondary"></i>E-mail Verification</p>
                            <p className="text-small text-white d-flex align-items-center gap-6"><i className="dot-md bg-secondary"></i> Verified ID Card</p>
                        </div>
                        <h5 className="mt-12">Request</h5>
                        <fieldset className="mt-16">
                            <label className="label-ip">
                                <p className="mb-8 text-small"> Email</p>
                                <input
                                    type="email"
                                    placeholder="Example@gmail"
                                    value={data.email}
                                    style={{ border: "1px solid #fff" }}
                                    onChange={(e) => setData({ ...data, email: e.target.value })}
                                />
                            </label>
                        </fieldset>
                        <a onClick={getCode} className="tf-btn xs btn-warning mt-12">Request OTP2</a>
                    </div>
                </div>
            </div>
        ) : ""}

        {!sent === false ? (
            <div className="pt-45 pb-16">
                <div className="tf-container">
                    <div className="accent-box bg-menuDark mt-4">
                        <h4>OTP02 Verification</h4>
                        <h5 className="mt-20">Features and limitations</h5>
                        <ul className="pt-16 pb-12 line-bt">
                            <li className="d-flex justify-content-between align-items-center">
                                <span className="text-small">MAX DEPOSITE</span>
                                <span className="text-white text-large">1.000.000 USD lifetime</span>
                            </li>
                            <li className="mt-12 d-flex justify-content-between align-items-center">
                                <span className="text-small">MAX WITHDRAWAL</span>
                                <span className="text-white text-large">1.000.000 USD lifetime</span>
                            </li>
                        </ul>
                        <div className="mt-16 d-flex gap-8 mr--16">
                            <p className="text-small text-white d-flex align-items-center gap-6"><i className="dot-md bg-secondary"></i>E-mail Verification</p>
                            <p className="text-small text-white d-flex align-items-center gap-6"><i className="dot-md bg-secondary"></i> Verified ID Card</p>
                        </div>
                        <h5 className="mt-12">Verify Code</h5>
                                <fieldset className="mt-16">
                                    <label className="label-ip">
                                        <p className="mb-8 text-small">Enter Code</p>
                                        <input
                                            type="text"
                                            placeholder="Code..."
                                            value={data.otp}
                                            style={{ border: "1px solid #fff" }}
                                            onChange={(e) => setData({ ...data, otp: e.target.value })}
                                        />
                                    </label>
                                </fieldset>
                        <a onClick={verifyCode} className="tf-btn xs btn-warning mt-12">Verify OTP2</a>
                    </div>
                </div>
            </div>
        ) : ""}
        </>
    )
}

export default Verification