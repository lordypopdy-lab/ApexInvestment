import React from 'react';
import axios from 'axios';
import Webcam from "react-webcam";
import toast from 'react-hot-toast';
import { useState, useCallback, useRef } from 'react';
const CameraScan = () => {

    const webcamRef = React.useRef(null);
    const [email, setEmail] = useState("");
    const [imgSrc, setImgSrc] = React.useState(null);
    const [captured, setCaptured] = React.useState(false);

    const capture = React.useCallback(() => {
        try {
            const imageSrc = webcamRef.current.getScreenshot();
            setImgSrc(imageSrc);
            setCaptured(true);
            toast.success('Document captured!');
        } catch (error) {
            console.log(error);
            toast.error('Capturing failed, re-load and try again!');
        }
    }, [webcamRef, setImgSrc]);

    const submit = async () => {
        console.log(email)
        if (email === "") {
            toast.error("Enter email to proceed!");
        } else {
            try {
                axios.post('/citizenId', { email, imgSrc }).then(({ data }) => {
                    if (data.success) {
                        location.href = '/CameraSuccess'
                    } else {
                        toast.error("Verification Failed re-load and try again")
                    }
                })
            } catch (error) {
                console.log(error);
                toast.error("Identity Verufucation failed");
            }
        }
    }

    // if (!localStorage.getItem('email')) { location.href = '/login'; }
    return (
        <>
            <div className="bg-camera">
                <div className="tf-container">
                    <div className="pt-30">
                        <div className="line-qr">
                            {captured == false ? <Webcam
                                audio={false}
                                width={350}
                                ref={webcamRef}
                                className='camera'
                                screenshotFormat="image/jpeg"
                            /> : <span>{imgSrc && (
                                <img
                                    src={imgSrc}
                                />
                            )}</span>}
                        </div>
                        <div style={{ marginTop: '-17px' }} className="box-noti-camera">
                            <span className="icon-camera icon"></span>
                            <p className="text-large text-surface">Point your camera at your Citizenship ID to complete.</p>
                        </div>
                        {captured == false ? <button className='mt-3  tf-btn lg btn-warning' onClick={capture}>Capture photo</button> :

                            (<>
                                <fieldset className="mt-16">
                                    <label className="label-ip">
                                        <p className="mb-8 text-small">Email</p>
                                        <input
                                            type="email"
                                            placeholder="Example@gmail"
                                            value={email}
                                            style={{ border: "1px solid #fff" }}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </label>
                                </fieldset>
                                <button className='mt-3  tf-btn lg btn-warning' onClick={submit}>Submit</button>
                            </>)
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default CameraScan