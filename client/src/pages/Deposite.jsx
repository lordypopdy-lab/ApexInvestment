import React from 'react'
import toast from 'react-hot-toast'
import MainNavBar from '../components/MainNavBar'

const Deposite = () => {
    const handleCopy = async (textToCopy) => {
        try {
            await navigator.clipboard.writeText(textToCopy);
            toast.success("Copied successfully!");
        } catch (err) {
            toast.error("Failed to copy!")
        }
    };
    const walletConnect = async () => {
        toast.success("Wallet Connect Comming Soon!")
    }
    return (
        <>
            <MainNavBar />
            <div style={{ marginTop: "80px" }} className="container-scroller">
                <div className="container-fluid page-body-wrapper">
                    <div className="main-panel m-0 w-100">
                        <div className="content-wrapper">
                            <div className="row">
                                <div style={{ borderRadius: "0px" }} className="col-xl-6 p-2 col-sm-6">
                                    <button onClick={walletConnect} className='btn btn-secondary w-100'><i className="fas fa-wallet text-warning m-2"></i>Connect Wallet</button>
                                    <div style={{ border: "none", borderRadius: "9px" }} className="card card-gradient">
                                        <div className="card-body card-gradient">
                                        <h5 onClick={() => handleCopy("1D17tr2PDdgfa5YD5qPb4eyWyHuudmsycq")}>1D17tr2PDdgfa5YD5qPb4eyWyHuudm...<i style={{ cursor: "pointer" }} className="fas fa-copy text-warning m-1"></i></h5>
                                            <h4 className="card-title">Deposit Using Bitcoin | USDT(TRC20)</h4>
                                            <p className="card-description">Bitcoin | USDT Deposit Method</p><hr />
                                            <form className="forms-sample">
                                                <p className="card-description"><span className="text-warning">Please make sure you upload your payment proof for quick payment verification On confirmation,</span> <span className="text-primary">our system will automatically Fund your account and notify you via email address.</span></p>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-sm-6 grid-margin mt-5">
                                    <div style={{ border: "none", borderRadius: "9px" }} className="card card-gradient">
                                        <div className="card-body card-gradient">
                                        <h5 onClick={() => handleCopy("TUY6u1rAJ2imQcokJ3mH5rdKLGGTeM2vJ3")}>TUY6u1rAJ2imQcokJ3mH5rdKLGGTeM...<i style={{ cursor: "pointer" }} className="fas fa-copy text-warning m-1"></i></h5>
                                        <h4 className="card-title">Deposit Using TRC | (TRC20)</h4>
                                        <p className="card-description">USD | TRC20 Deposit Method</p><hr />
                                            <p className="card-description">Request other available Deposit Method</p>
                                            <p className="card-description"><span className="text-success">Once requested, you will receive the payment details via our support mail....Once payment</span> is made using this method you are to send your payment proof to our support mail support@hintsprimefx.com</p>
                                    
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Deposite
