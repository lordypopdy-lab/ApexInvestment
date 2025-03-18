import React from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react'
import MainNavBar from '../components/MainNavBar'
import FadeLoader from 'react-spinners/FadeLoader';

const Withdraw = () => {

    const [user, setUser] = useState([]);
    const [show, setShow] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [loading1, setLoading1] = useState(false);
    const [loading2, setLoading2] = useState(false);
    const [bankR, setBankR] = useState([]);
    const [isNotification, setNotification] = useState('');
    const [cryptoR, setcryptoR] = useState([]);
    const [dataCrypto, setdataCrypto] = useState({ value: "", walletAddress: "" })
    const [data, setData] = useState({ value: 0, bank_name: "", account_name: "", account_number: "", swift_code: "" })

    useEffect(() => {
        const localStore = JSON.parse(localStorage.getItem("user"));
        const email = localStore.email;
        const ID = localStore._id;

        const getNotification = async () => {
            await axios.post("/getMessage", { ID }).then((data) => {
                if (data.data.submitMessage) {
                    console.log(data.data.submitMessage)
                    setNotification(data.data.submitMessage);
                }
            })
        }
        const getCryptoRecords = async () => {
            await axios.post("/getCryptoRecords", { email }).then((data) => {
                if (data) {
                    setcryptoR(data.data);
                }
            })
        }
        const getBankRecords = async () => {
            await axios.post("/getBankRecords", { email }).then((data) => {
                if (data) {
                    setBankR(data.data);
                }
            })
        }
        const getUser = async () => {
            const localStore = JSON.parse(localStorage.getItem("user"));
            setUser(localStore);
        }
        getUser();
        getBankRecords();
        getCryptoRecords();
        getNotification();
    }, [])

    const handleCopy = async (textToCopy) => {
        try {
            await navigator.clipboard.writeText(textToCopy);
            toast.success("Copied successfully!");
        } catch (err) {
            toast.error("Failed to copy!")
        }
    };

    const bankWithdraw = async () => {
        setLoading1(true);
        const email = user.email
        const { value, bank_name, account_name, account_number, swift_code } = data;

        try {
            await axios.post('/withdrawBank', {
                email,
                value,
                bank_name,
                account_name,
                account_number,
                swift_code
            }).then((data) => {
                if (data.data.success) {
                    toast.success(data.data.success);
                    setLoading1(false)
                    setData({
                        value: 0,
                        bank_name: "",
                        account_name: "",
                        account_number: "",
                        swift_code: ""
                    })
                } else if (data.data.error) {
                    setLoading1(false);
                    toast.error(data.data.error);
                }
            })
        } catch (error) {
            console.log("Withrawal failed: ", error);
        }
    }

    const cyptoWithrawal = async (e) => {
        e.preventDefault();
        setLoading2(true);
        const email = user.email;
        const { value, walletAddress } = dataCrypto;

        try {
            await axios.post("/withdrawCrypto", {
                email,
                value,
                walletAddress
            }).then((data) => {
                if (data.data.success) {
                    toast.success(data.data.success);
                    setLoading2(false);
                    setdataCrypto({
                        value: "",
                        walletAddress: ""
                    })
                } else if (data.data.error) {
                    toast.error(data.data.error);
                    setLoading2(false);
                }
            })
        } catch (error) {
            console.log("Crypto withdrawal failed: ", error);
        }

    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleWithdraw = async () => {
        bankWithdraw()

    }
    return (
        <>
            <MainNavBar />
            <Modal className='mt-4' show={show} onHide={handleClose}>
                <Modal.Header className='bg-dark' closeButton>
                    <Modal.Title>Warning!</Modal.Title>
                </Modal.Header>
                <Modal.Body className='bg-dark modal-body-scroll'>
                    {isNotification !== '' ?
                        <div className="card-title text-warning mb-5">
                            {isNotification}
                        </div>
                        :
                        <div className="card-title text-warning mb-5">
                            Are you Sure you want to Approve This Transaction?
                        </div>}
                    <Button
                        variant="primary"
                        style={{ height: "auto", padding: "8px", width: "160px" }}
                        disabled={isLoading}
                        onClick={!isLoading ? handleWithdraw : null}
                    >
                        {isLoading ? "Saving..." : "Save Changes"}
                    </Button>
                </Modal.Body>
                <Modal.Footer className='bg-dark'>
                    <Button style={{ padding: "8px", width: "120px" }} variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <div style={{ marginTop: "80px" }} className="container-scroller">
                <div className="container-fluid page-body-wrapper">
                    <div className="main-panel m-0 w-100">
                        <div className="content-wrapper">
                            <div className="row">
                                <div style={{ borderRadius: "0px" }} className="col-xl-6 p-2 col-sm-6">
                                    <button className='btn btn-secondary w-100'><i className="fas fa-wallet text-warning m-2"></i>Connect Wallet</button>
                                    <div style={{ border: "none", borderRadius: "9px" }} className="card card-gradient">
                                        <div className="card-body card-gradient">
                                            <h4 className="card-title">Withdraw</h4>
                                            <p className="card-description">Fill | in withdrawal | details</p><br />
                                            <h5 onClick={() => handleCopy(user._id)}>ID: {user._id && user._id}<i style={{ cursor: "pointer" }} className="fas fa-copy text-warning m-1"></i></h5>
                                            <FadeLoader
                                                color="#36d7b7"
                                                loading={loading1}
                                                speedMultiplier={3}
                                                style={{ textAlign: 'center', position: 'absolute', left: '50%', zIndex: '1', top: "46%" }}
                                            />
                                            <form action="withdrawal_validation.php" method="post" className="forms-sample">
                                                <div className="form-group">
                                                    <label>Amount{user.currency && user.currency}</label>
                                                    <input
                                                        type="number"
                                                        value={data.value}
                                                        onChange={(e) => setData({ ...data, value: e.target.value })}
                                                        className="form-control bg-transparent"
                                                        placeholder="$value"
                                                    />
                                                    <label className="mt-3">Bank Name*</label>
                                                    <input
                                                        value={data.bank_name}
                                                        onChange={(e) => setData({ ...data, bank_name: e.target.value })}
                                                        type="text"
                                                        className="form-control bg-transparent"
                                                        placeholder="bank-name"
                                                    />
                                                    <label className="mt-3">Account Name*</label>
                                                    <input
                                                        type="text"
                                                        value={data.account_name}
                                                        onChange={(e) => setData({ ...data, account_name: e.target.value })}
                                                        className="form-control bg-transparent"
                                                        placeholder="account-name"
                                                    />
                                                    <label className="mt-3">Account Number*</label>
                                                    <input
                                                        type="number"
                                                        value={data.account_number}
                                                        onChange={(e) => setData({ ...data, account_number: e.target.value })}
                                                        className="form-control bg-transparent"
                                                        placeholder="account-number"
                                                    />
                                                    <label className="mt-3">swift Code*</label>
                                                    <input
                                                        type="text"
                                                        value={data.swift_code}
                                                        onChange={(e) => setData({ ...data, swift_code: e.target.value })}
                                                        className="form-control bg-transparent"
                                                        placeholder="swift-code"
                                                    />
                                                </div>
                                                <div className="mt-3 d-flex justify-content-between">
                                                    <button onClick={handleShow} type="button" className="btn btn-primary mr-2">Withdraw<i className="fas fa-arrow-down text-warning m-1"></i></button>
                                                    <button className="btn btn-dark">Cancel</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-6 col-sm-6 grid-margin mt-5">
                                    <div style={{ border: "none", borderRadius: "9px" }} className="card card-gradient">
                                        <div className="card-body card-gradient">
                                            <h4 className="card-title">Withdraw Using Bitcoin | USDT(TRC20)</h4>
                                            <p className="card-description">Bitcoin | USDT Deposit Method</p><br />
                                            <form onSubmit={cyptoWithrawal} className="forms-sample">
                                                <h5 onClick={() => handleCopy(user._id)}>ID: {user._id && user._id}<i style={{ cursor: "pointer" }} className="fas fa-copy text-warning m-1"></i></h5>
                                                <p className="card-description"><span className="text-warning">Please make sure you upload your payment proof for quick payment verification On confirmation,</span> <span className="text-primary">our system will automatically Fund your account and notify you via email address.</span></p>
                                                <div className="form-group">
                                                    <label for="exampleInputConfirmPassword1">Amount{user.currency && user.currency}</label>
                                                    <input
                                                        type="number"
                                                        value={dataCrypto.value}
                                                        onChange={(e) => setdataCrypto({ ...dataCrypto, value: e.target.value })}
                                                        className="form-control bg-transparent"
                                                        placeholder={user.currency && user.currency}
                                                    />
                                                </div>
                                                <FadeLoader
                                                    color="#36d7b7"
                                                    loading={loading2}
                                                    speedMultiplier={3}
                                                    style={{ textAlign: 'center', position: 'absolute', left: '50%', zIndex: '1', top: "46%" }}
                                                />
                                                <div className="form-group mt-3">
                                                    <label for="exampleInputConfirmPassword1">Recipient Address (ERC20)</label>
                                                    <input
                                                        type="text"
                                                        value={dataCrypto.walletAddress}
                                                        onChange={(e) => setdataCrypto({ ...dataCrypto, walletAddress: e.target.value })}
                                                        className="form-control bg-transparent"
                                                        placeholder="wallet address..."
                                                    />
                                                </div>
                                                <div className="mt-3 d-flex justify-content-between">
                                                    <button type="submit" className="btn btn-primary mr-2">Withdraw<i className="fas fa-arrow-down text-warning m-1"></i></button>
                                                    <button className="btn btn-dark">Cancel</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 grid-margin mt-2 p-2">
                                    <div style={{ border: "none", borderRadius: "9px" }} className="card p-2 card-gradient">
                                        <div className="modal-body-scroll">
                                            <h3 className="card-title text-center">Bank | Withdrawal | Records</h3><hr />
                                            <Table responsive>
                                                <thead>
                                                    <tr>
                                                        <th>[#]</th>
                                                        <th>[Amount]</th>
                                                        <th>[Bank]</th>
                                                        <th>[Name]</th>
                                                        <th>[Swift-code]</th>
                                                        <th>[Status]</th>
                                                        <th>[Email]</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {bankR.length >= 0 ? (
                                                        bankR.map((data) => (
                                                            <tr key={data._id}>
                                                                <td>ID{data._id.slice(1, 10)}</td>
                                                                <td>{user.currency}{data.amount}</td>
                                                                <td>{data.bank}</td>
                                                                <td>{data.name}</td>
                                                                <td>{data.swiftCode}</td>
                                                                <td>{data.status}</td>
                                                                <td>{data.email}</td>
                                                            </tr>
                                                        ))
                                                    ) :
                                                        <tr>
                                                            <td className='text-center'>No Records Found</td>
                                                        </tr>
                                                    }

                                                </tbody>
                                            </Table>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 grid-margin mt-2 p-2">
                                    <div style={{ border: "none", borderRadius: "9px" }} className="card p-2 card-gradient">
                                        <div className="modal-body-scroll">
                                            <h3 className="card-title text-center"> Crypto | Withdrawal | Records</h3><hr />
                                            <Table responsive>
                                                <thead>
                                                    <tr>
                                                        <th>[#]</th>
                                                        <th>[Amount]</th>
                                                        <th>[Wallet]</th>
                                                        <th>[Status]</th>
                                                        <th>[Email]</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {cryptoR.length >= 0 ? (
                                                        cryptoR.map((data) => (
                                                            <tr key={data._id}>
                                                                <td>ID:{data._id.slice(1, 10)}</td>
                                                                <td>{user.currency}{data.amount}</td>
                                                                <td onClick={() => handleCopy(data.cryptoAddress)}>{data.cryptoAddress.slice(1, 10)}</td>
                                                                <td>{data.status}</td>
                                                                <td>{data.email}</td>
                                                                <td></td>
                                                            </tr>
                                                        ))
                                                    ) :
                                                        <tr>
                                                            <td className='text-center'>No Records Available</td>
                                                        </tr>}
                                                </tbody>
                                            </Table>
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

export default Withdraw
