import React from 'react'
import { useState, useEffect } from 'react'
import NavBar from '../components/NavBar';
import Widget101 from '../../components/Widget101';
import Widget102 from '../../components/Widget102';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Badge from 'react-bootstrap/Badge';
import InputGroup from 'react-bootstrap/InputGroup';
import Table from 'react-bootstrap/Table';
import axios from 'axios'
import toast from "react-hot-toast"

const Admin = () => {
const AdminE = JSON.parse(localStorage.getItem("admin"));
if(AdminE.email =="example@gmail.com"){
    localStorage.removeItem("admin");
    window.location.href = "/admin/login";
}
if (AdminE?.email !== "example001@gmail.com") {
    localStorage.removeItem("admin");
    window.location.href = "/admin/login";
}
    const [isDelete, setDelete] = useState();
    const [isApprove, setApprove] = useState("");
    const [isDecline, setDecline] = useState("");
    const [balance, setBalance] = useState(6056);
    const [users, setUsers] = useState([]);
    const [show, setShow] = useState(false);
    const [bankR, setBankR] = useState([]);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    const [show5, setShow5] = useState(false);
    const [show6, setShow6] = useState(false);
    const [show7, setShow7] = useState(false);
    const [show8, setShow8] = useState(false);
    const [show9, setShow9] = useState(false);
    const [cryptoR, setCryptoR] = useState([]);
    const [kycAction, setKycAction] = useState('');
    const [kycDecline, setKycDecline] = useState('');
    const [kycApprove, setKycApprove] = useState('');
    const [isLoading, setLoading] = useState(false);
    const [isLoading1, setLoading1] = useState(false);
    const [isLoading2, setLoading2] = useState(false);
    const [isLoading3, setLoading3] = useState(false);
    const [isLoading4, setLoading4] = useState(false);
    const [isLoading5, setLoading5] = useState(false);
    const [isLoading6, setLoading6] = useState(false);
    const [isLoading7, setLoading7] = useState(false);
    const [isLoading8, setLoading8] = useState(false);
    const [isLoading9, setLoading9] = useState(false);
    const [UID, setUID] = useState({ ID: "", ULevel: "" });
    const [message, setMessage] = useState({ id: "", value: "" });
    const [notification, setNotification] = useState({ id: "", value: "" })
    const [adder, setAdder] = useState({ id: "", value: "", type: "" });
    const [isBalanceVisible, setIsBalanceVisible] = useState(true);
    const [userAuth, setUserAuth] = useState([])

    useEffect(() => {
        const Admin = JSON.parse(localStorage.getItem("admin"));
        const email = Admin.email;

        const getKyc  = async () => {
            await axios.get("https://bitclub-server.vercel.app/fetchAllKyc").then((data)=>{
                if(data.data.kyc){
                    setUserAuth(data.data.kyc)
                }
            })
        }
        getKyc();

        const getCryptoRecords = async () => {
            await axios.post("/AdminGetCrypto", { email }).then((data) => {
                if (data) {
                    setCryptoR(data.data);
                }
            })
        }
        const getBankRecords = async () => {
            await axios.post("/AdminGetBankR", { email }).then((data) => {
                if (data) {
                    setBankR(data.data);
                }
            })
        }
        const getUsers = async () => {
            try {
                await axios.get('/getUsers').then((data) => {
                    if (data.data.length > 0) {
                        setUsers(data.data);
                    }
                })
            } catch (error) {
                console.log(`Error Getting Users: `, error);
            }
        }
        function simulateNetworkRequest() {
            return new Promise(resolve => {
                setTimeout(resolve, 2000);
            });
        }
        if (isLoading) {
            simulateNetworkRequest().then(() => {
                setLoading(false);
            });
        }
        getUsers();
        getBankRecords();
        getCryptoRecords();
    }, [isLoading]);

    const addBalance = async () => {
        { !isLoading1 ? setLoading1(true) : null }
        const { id, value, type } = adder;

        try {
            await axios.post('/addBalance', {
                id,
                value,
                type
            }).then((data) => {
                if (data.data.error) {
                    toast.error(data.data.error);
                    setLoading1(false)
                } else if (data.data.success) {
                    toast.success(data.data.success)
                    console.log(data.data.success);
                    setLoading1(false)
                    setAdder({
                        id: "",
                        value: "",
                        type: ""
                    })
                }
            })
        } catch (error) {
            console.log("Error Adding Balance: ", error);
        }
    }

    const handleClick = (data) => {
        setLoading(true);
        console.log(data)
        localStorage.setItem("chatID", data);
        window.location.href = "/admin/contact";
    }

    const toggleBalanceVisibility = () => {
        setIsBalanceVisible((prev) => !prev);
    };

    const handleSend = async () => {
        alert("Message Sent!");
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);

    const handleClose4 = () => setShow4(false);
    const handleShow4 = (data) => {
        setShow4(true)
        setDecline(data);
    }
    const handleClose5 = () => setShow5(false);
    const handleShow5 = (data) => {
        setShow5(true)
        setApprove(data);
    }
    const handleClose6 = () => setShow6(false);
    const handleShow6 = (data) => {
        setShow6(true)
        setDelete(data);
    }
    const handleClose7 = () => setShow7(false);
    const handleShow7 = (data) => {
        setShow7(true)
        setKycAction(data);
    }
    const handleClose8 = () => setShow8(false);
    const handleShow8 = (data) => {
        setShow8(true)
        setKycDecline(data);
    }
    const handleClose9 = () => setShow9(false);
    const handleShow9 = (data) => {
        setShow9(true)
        setKycApprove(data);
    }

    const handleKyApprove = async () => {
        handleShow9();
        setLoading9(true);

        await axios.post("https://bitclub-server.vercel.app/approveKyc", {kycApprove}).then((data)=>{
            if(data.data.success){
                setLoading9(false)
                toast.success(data.data.success)
                console.log(data.data);
            }else if(data.data.error){
                setLoading9(false);
                toast.error(data.data.error);
            }
        })
    }
    
    const handleKyDecline = async () => {
        handleShow8();
        setLoading8(true);

        await axios.post("https://bitclub-server.vercel.app/declineKyc", {kycDecline}).then((data)=>{
            if(data.data.success){
                setLoading8(false)
                toast.success(data.data.success)
                console.log(data.data);
            }else if(data.data.error){
                setLoading8(false);
                toast.error(data.data.error);
            }
        })
    }

    const handleKycAction = async () => {
        handleShow7();
        setLoading7(true);

        await axios.post("https://bitclub-server.vercel.app/deleteKyc", {kycAction}).then((data)=>{
            if(data.data.success){
                toast.success(data.data.success);
                setLoading7(false);
            }else if (data.data.error){
                setLoading7(false);
                toast.error(data.data.error);
            }
        })
    }

    const handleCopy = async (textToCopy) => {
        try {
            await navigator.clipboard.writeText(textToCopy);
            toast.success("Copied successfully!");
        } catch (err) {
            toast.error("Failed to copy!")
        }
    };

    const handleMessage = async () => {
        setLoading2(true)
        const { id, value } = message;
        console.log(id)
        await axios.post("/userMessage", { id, value }).then((data) => {
            if (data.data.success) {
                toast.success(data.data.success);
                setMessage({
                    id: "",
                    value: "",
                })
                setLoading2(false)
            } else if (data.data.error) {
                setLoading2(false)
                toast.error(data.data.error);
            }
        })
        // handleClose3()
    }

    const handleNotification = async () => {
        setLoading3(true)
        const { id, value } = notification;
        console.log(id)
        await axios.post("/userNotification", { id, value }).then((data) => {
            if (data.data.success) {
                toast.success(data.data.success);
                setNotification({
                    id: "",
                    value: "",
                })
                setLoading3(false)
            } else if (data.data.error) {
                setLoading3(false)
                toast.error(data.data.error);
            }
        })
    }

    const handleDecline = async () => {
        handleShow4();
        setLoading4(true);
        await axios.post("/Decline", { isDecline }).then((data) => {
            if (data.data.success) {
                setLoading4(false);
                toast.success(data.data.success);
            } else if (data.data.error) {
                setLoading4(false);
                toast.error(data.data.error);
            }
        })
    }

    const handleApprove = async () => {
        handleShow5();
        setLoading5(true);
        await axios.post("/Approve", { isApprove }).then((data) => {
            if (data.data.success) {
                setLoading5(false);
                toast.success(data.data.success);
            } else if (data.data.error) {
                setLoading5(false);
                toast.error(data.data.error);
            }
        })
    }

    const handleDelete = async () => {
        handleShow6();
        setLoading6(true);
        await axios.post("/Delete", { isDelete }).then((data) => {
            if (data.data.success) {
                setLoading6(false);
                toast.success(data.data.success);
            } else if (data.data.error) {
                setLoading6(false);
                toast.error(data.data.error);
            }
        })
    }

    const upgradeAccount = async (event) => {
        event.preventDefault();
        const { ID, ULevel } = UID;
        try {
            await axios.post("/upgradeAccount", { ID, ULevel }).then((data) => {
                if (data.data.success) {
                    toast.success(data.data.success);
                    setUID({
                        ID: "",
                        ULevel: ""
                    })
                } else if (data.data.error) {
                    toast.error(data.data.error);
                    setUID({
                        ID: "",
                        ULevel: ""
                    })
                }
            })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <NavBar />
            <div style={{ marginTop: "80px" }} className="container-scroller">
                <Widget102 />
                <Modal className='mt-4' show={show} onHide={handleClose}>
                    <Modal.Header className='bg-dark' closeButton>
                        <Modal.Title className='card-gradient'>Adding Bonus</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='bg-dark'>
                        <Form className='card-gradient'>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <InputGroup className="mb-3">
                                    <InputGroup.Text className='bg-dark'>#ID</InputGroup.Text>
                                    <Form.Control
                                        value={adder.id}
                                        onChange={(e) => setAdder({ ...adder, id: e.target.value })}
                                        type='text'
                                        className='bg-dark'
                                        aria-label="Amount (to the nearest dollar)"
                                    />
                                </InputGroup>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <InputGroup className="mb-3">
                                    <InputGroup.Text className='bg-dark'>$</InputGroup.Text>
                                    <Form.Control
                                        type='number'
                                        value={adder.value}
                                        onChange={(e) => setAdder({ ...adder, value: e.target.value })}
                                        className='bg-dark'
                                        aria-label="Amount (to the nearest dollar)"
                                    />
                                    <InputGroup.Text className='card-gradient'>.00</InputGroup.Text>
                                </InputGroup>
                            </Form.Group>
                            <Form.Select value={adder.type} onChange={(e) => setAdder({ ...adder, type: e.target.value })} className='bg-dark' aria-label="Default select example">
                                <option>Open this select menu</option>
                                <option value="bonuse">Add bonus</option>
                                <option value="profit">Add Profit</option>
                                <option value="deposit">Add Deposite</option>
                            </Form.Select>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer className='bg-dark d-flex justify-content-between'>
                        <Button style={{ padding: "8px", width: "120px" }} variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button
                            onClick={addBalance} s
                            tyle={{ padding: "1px", width: "160px" }}
                            variant="primary">
                            {isLoading1 ? "Saving..." : "Save Changes"}
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Modal className='mt-4' show={show1} onHide={handleClose1}>
                    <Modal.Header className='bg-dark' closeButton>
                        <Modal.Title className='card-gradient'>List of Users</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='bg-dark'>
                        <Table responsive="xl">
                            <thead>
                                <tr>
                                    <th>[#]</th>
                                    <th>[<i className='fas text-success fa-paper-plane'></i>]</th>
                                    <th>[Name]</th>
                                    <th>[Profit]</th>
                                    <th>[Bonus]</th>
                                    <th>[Deposit]</th>
                                    <th>[Country]</th>
                                    <th>[Account]</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.length > 0 ? (
                                    users.map((user) => (
                                        <tr key={user._id}>
                                            <td onClick={() => handleCopy(user._id)}><i style={{ cursor: "pointer" }} className='fas fa-copy'></i>{user._id.slice(1, 5)}..</td>
                                            <td>
                                                <Button
                                                    variant="primary"
                                                    style={{ height: "auto", padding: "4px", fontSize: "14px", width: "70px" }}
                                                    disabled={isLoading}
                                                    onClick={!isLoading ? () => handleClick(user.email) : null}
                                                >
                                                    {isLoading ? "Loading…" : "Send"}
                                                </Button>
                                            </td>
                                            <th>{user.name}</th>
                                            <td>{user.currency}{user.profit.toFixed(2)}</td>
                                            <td>{user.currency}{user.bonuse.toFixed(2)}</td>
                                            <td>{user.currency}{user.deposit.toFixed(2)}</td>
                                            <td>{user.country}</td>
                                            <td>{user.account}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="7" style={{ textAlign: "center" }}>No users available</td>
                                    </tr>
                                )}
                            </tbody>
                        </Table>
                    </Modal.Body>
                    <Modal.Footer className='bg-dark d-flex justify-content-between'>
                        <Button variant="secondary" style={{ padding: "8px", width: "120px" }} onClick={handleClose1}>
                            Close
                        </Button>
                        <Button variant="primary" style={{ padding: "8px", width: "160px" }} onClick={handleClose1}>
                            Done
                            <i className='fas text-light m-1 fa-check'></i>
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Modal className='mt-4' show={show2} onHide={handleClose2}>
                    <Modal.Header className='bg-dark' closeButton>
                        <Modal.Title className='card-gradient'>List of Investors</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='bg-dark modal-body-scroll'>
                        <Table responsive="xl">
                            <thead>
                                <tr>
                                    <th>[#]</th>
                                    <th>[Name]</th>
                                    <th>[Country]</th>
                                    <th>[Account]</th>
                                    <th>[Profit]</th>
                                    <th>[Bonus]</th>
                                    <th>[Deposit]</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Rita pedro</td>
                                    <td>Brazil</td>
                                    <td>Forex</td>
                                    <td>$230.90</td>
                                    <td>$8977.45</td>
                                    <td>$78826.51</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Modal.Body>
                    <Modal.Footer className='bg-dark d-flex justify-content-between'>
                        <Button style={{ padding: "8px", width: "120px" }} variant="secondary" onClick={handleClose2}>
                            Close
                        </Button>
                        <Button style={{ padding: "8px", width: "160px" }} variant="primary" onClick={handleClose2}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Modal className='mt-4' show={show3} onHide={handleClose3}>
                    <Modal.Header className='bg-dark' closeButton>
                        <Modal.Title>Add Notification</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='bg-dark modal-body-scroll'>
                        <Form>
                            <div className="card-title text-warning">
                                Set Submit Message
                            </div>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Enter UserID</Form.Label>
                                <Form.Control
                                    value={message.id}
                                    onChange={(e) => setMessage({ ...message, id: e.target.value })}
                                    className='bg-dark'
                                    type="test"
                                    placeholder=""
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Example textarea</Form.Label>
                                <Form.Control
                                    value={message.value}
                                    onChange={(e) => setMessage({ ...message, value: e.target.value })}
                                    className='bg-dark text-light'
                                    as="textarea"
                                    rows={3}
                                />
                            </Form.Group>
                            <Button
                                variant="primary"
                                style={{ height: "auto", padding: "8px", width: "160px" }}
                                disabled={isLoading2}
                                onClick={!isLoading2 ? handleMessage : null}
                            >
                                {isLoading2 ? "Sending..." : "Save Changes"}
                            </Button>
                        </Form>
                        <Form className='mt-5'>
                            <div className="card-title text-warning">
                                Set Notification Message
                            </div>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Enter UserID</Form.Label>
                                <Form.Control
                                    value={notification.id}
                                    onChange={(e) => setNotification({ ...notification, id: e.target.value })}
                                    className='bg-dark'
                                    type="test"
                                    placeholder=""
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Example textarea</Form.Label>
                                <Form.Control
                                    value={notification.value}
                                    onChange={(e) => setNotification({ ...notification, value: e.target.value })}
                                    className='bg-dark text-light'
                                    as="textarea"
                                    rows={3}
                                />
                            </Form.Group>
                            <Button
                                variant="primary"
                                style={{ height: "auto", padding: "8px", width: "160px" }}
                                disabled={isLoading3}
                                onClick={!isLoading3 ? handleNotification : null}
                            >
                                {isLoading3 ? "Sending..." : "Save Changes"}
                            </Button>
                        </Form>
                    </Modal.Body>

                    <Modal.Footer className='bg-dark'>
                        <Button style={{ padding: "8px", width: "120px" }} variant="secondary" onClick={handleClose3}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Modal className='mt-4' show={show4} onHide={handleClose4}>
                    <Modal.Header className='bg-dark' closeButton>
                        <Modal.Title>Warning!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='bg-dark modal-body-scroll'>
                        <div className="card-title text-warning">
                            Are you Sure yoo want to Decline This Transaction?
                        </div>
                        <Button
                            variant="primary"
                            style={{ height: "auto", padding: "8px", width: "160px" }}
                            disabled={isLoading4}
                            onClick={!isLoading4 ? handleDecline : null}
                        >
                            {isLoading4 ? "Saving..." : "Save Changes"}
                        </Button>
                    </Modal.Body>
                    <Modal.Footer className='bg-dark'>
                        <Button style={{ padding: "8px", width: "120px" }} variant="secondary" onClick={handleClose4}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Modal className='mt-4' show={show5} onHide={handleClose5}>
                    <Modal.Header className='bg-dark' closeButton>
                        <Modal.Title>Warning!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='bg-dark modal-body-scroll'>
                        <div className="card-title text-warning">
                            Are you Sure yoo want to Approve This Transaction?
                        </div>
                        <Button
                            variant="primary"
                            style={{ height: "auto", padding: "8px", width: "160px" }}
                            disabled={isLoading5}
                            onClick={!isLoading5 ? handleApprove : null}
                        >
                            {isLoading5 ? "Saving..." : "Save Changes"}
                        </Button>
                    </Modal.Body>
                    <Modal.Footer className='bg-dark'>
                        <Button style={{ padding: "8px", width: "120px" }} variant="secondary" onClick={handleClose5}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Modal className='mt-4' show={show6} onHide={handleClose6}>
                    <Modal.Header className='bg-dark' closeButton>
                        <Modal.Title>Warning!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='bg-dark modal-body-scroll'>
                        <div className="card-title text-warning">
                            Are you Sure yoo want to Delete This Transaction?
                        </div>
                        <Button
                            variant="primary"
                            style={{ height: "auto", padding: "8px", width: "160px" }}
                            disabled={isLoading6}
                            onClick={!isLoading6 ? handleDelete : null}
                        >
                            {isLoading6 ? "Deleting..." : "Delete"}
                        </Button>
                    </Modal.Body>
                    <Modal.Footer className='bg-dark'>
                        <Button style={{ padding: "8px", width: "120px" }} variant="secondary" onClick={handleClose6}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Modal className='mt-4' show={show7} onHide={handleClose7}>
                    <Modal.Header className='bg-dark' closeButton>
                        <Modal.Title>Warning!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='bg-dark modal-body-scroll'>
                        <div className="card-title text-warning">
                            Are you Sure yoo want to Delete This Kyc Request?
                        </div>
                        <Button
                            variant="primary"
                            style={{ height: "auto", padding: "8px", width: "160px" }}
                            disabled={isLoading7}
                            onClick={!isLoading7 ? handleKycAction : null}
                        >
                            {isLoading7 ? "Deleting..." : "Delete"}
                        </Button>
                    </Modal.Body>
                    <Modal.Footer className='bg-dark'>
                        <Button style={{ padding: "8px", width: "120px" }} variant="secondary" onClick={handleClose7}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Modal className='mt-4' show={show8} onHide={handleClose8}>
                    <Modal.Header className='bg-dark' closeButton>
                        <Modal.Title>Warning!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='bg-dark modal-body-scroll'>
                        <div className="card-title text-warning">
                            Are you Sure yoo want to Decline This Kyc Request?
                        </div>
                        <Button
                            variant="primary"
                            style={{ height: "auto", padding: "8px", width: "160px" }}
                            disabled={isLoading8}
                            onClick={!isLoading8 ? handleKyDecline : null}
                        >
                            {isLoading8 ? "Declining..." : "Decline"}
                        </Button>
                    </Modal.Body>
                    <Modal.Footer className='bg-dark'>
                        <Button style={{ padding: "8px", width: "120px" }} variant="secondary" onClick={handleClose8}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Modal className='mt-4' show={show9} onHide={handleClose9}>
                    <Modal.Header className='bg-dark' closeButton>
                        <Modal.Title>Warning!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='bg-dark modal-body-scroll'>
                        <div className="card-title text-warning">
                            Are you Sure yoo want to Approve This Kyc Request?
                        </div>
                        <Button
                            variant="primary"
                            style={{ height: "auto", padding: "8px", width: "160px" }}
                            disabled={isLoading9}
                            onClick={!isLoading9 ? handleKyApprove : null}
                        >
                            {isLoading9 ? "Approving..." : "Approve Now"}
                        </Button>
                    </Modal.Body>
                    <Modal.Footer className='bg-dark'>
                        <Button style={{ padding: "8px", width: "120px" }} variant="secondary" onClick={handleClose9}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
                <div className="container-fluid page-body-wrapper">
                    <div className="main-panel m-0 w-100">
                        <div className="content-wrapper">
                            <div className="row">
                                <div style={{ borderRadius: "0px" }} className="col-xl-6 p-2 col-sm-6">
                                    <div style={{ border: "none", borderRadius: "9px" }} className="card card-gradient">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-10">
                                                    <h3 className="text-muted font-weight-normal">Market Cap</h3>
                                                    <div style={{ paddingBottom: "17px" }} className="d-flex mt-2 align-items-center align-self-start">
                                                        <h5 className="display-4 ls-3 text-center">Bal: {isBalanceVisible ? <><span className="text-600">$</span>{balance.toFixed(2)}</> : "******"}</h5>
                                                        <span
                                                            onClick={toggleBalanceVisibility}
                                                            style={{
                                                                background: "none",
                                                                border: "none",
                                                                cursor: "pointer",
                                                                marginLeft: "12px"
                                                            }}
                                                            aria-label={isBalanceVisible ? "Hide Balance" : "Show Balance"}
                                                        >
                                                            <FontAwesomeIcon icon={isBalanceVisible ? faEyeSlash : faEye} />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="col-2">
                                                    <div className="icon icon-box-warning ">
                                                        <span className="fas fa-arrow-top icon-item"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-sm-6 grid-margin mt-3">
                                    <div style={{ border: "none", borderRadius: "9px" }} className="card card-gradient">
                                        <div className="card-body">
                                            <div className="row" style={{ paddingBottom: "80px" }}>
                                                <div style={{ marginBottom: "-50px" }} className="col-6 p-3">
                                                    <h6 className="text-muted font-weight-normal">value Added</h6>
                                                    <div className="d-flex align-items-center align-self-start">
                                                        <h5 style={{ fontSize: "24px" }} className="display-4 ls-3 text-center">{isBalanceVisible ? <><span className="text-600">$</span>{balance.toFixed(2) - 3925}</> : "******"}</h5>
                                                        <p className="text-warning ml-2 mb-0 font-weight-medium">+18%</p>
                                                    </div>
                                                    <button onClick={handleShow} style={{ height: "40px", fontSize: "12px", position: "absolute", top: "45%" }} className="btn p-2 btn-gray mt-4">Balance Adder<span className="fas m-1 fa-plus"></span></button>
                                                </div>
                                                <div style={{ marginBottom: "-50px" }} className="col-6 p-3">
                                                    <h6 className="text-muted font-weight-normal">2 Actions</h6>
                                                    <div className="d-flex align-items-center align-self-start">
                                                        <h5 style={{ fontSize: "24px" }} className="display-4 ls-3 text-center">{isBalanceVisible ? <><span className="text-600">$</span>{balance.toFixed(2) - 1260}</> : "******"}</h5>
                                                        <p className="text-warning ml-2 mb-0 font-weight-medium">+18%</p>
                                                    </div>
                                                    <button onClick={handleShow3} style={{ height: "40px", fontSize: "12px", position: "absolute", top: "45%" }} className="btn p-2 btn-gray mt-4">message sender<span className="fa fa-paper-plane m-1"></span></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Widget101 />
                            </div>
                            <div className="row">
                                <div className="col-md-12 grid-margin mt-3">
                                    <div style={{ border: "none", borderRadius: "9px" }} className="card card-gradient">
                                        <div className="card-body">
                                            <div className="form-group row">
                                                <div className="col">
                                                    <h6 className="card-title">Total Users</h6>
                                                    <div className="d-flex align-items-center align-self-start">
                                                        <h5 style={{ fontSize: "19px" }} className="display-4 ls-3 text-center">{isBalanceVisible ? <>{users.length >= 1 ? users.length : "loading..."}</> : "******"}</h5>
                                                        <p className="text-warning ml-2 mb-0 font-weight-small">+28%</p>
                                                    </div>
                                                    <button onClick={handleShow1} style={{ height: "40px", fontSize: "12px" }} className="btn p-2 btn-gray ">View | Users<span className="fas m-1 fa-arrow-down"></span></button>
                                                </div>
                                                <div className="col">
                                                    <h6 className="card-title">Total Investors</h6>
                                                    <div className="d-flex align-items-center align-self-start">
                                                        <h5 style={{ fontSize: "19px" }} className="display-4 ls-3 text-center">{isBalanceVisible ? <>{bankR.length >= 1 ? bankR.length + cryptoR.length : 0}</> : "******"}</h5>
                                                        <p className="text-warning ml-2 mb-0 font-weight-medium">+68%</p>
                                                    </div>
                                                    <button onClick={handleShow2} style={{ height: "40px", fontSize: "12px" }} className="btn p-2 btn-warning">[Investors]<span className="fas m-1 fa-arrow-down"></span></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 grid-margin mt-3">
                                    <div style={{ border: "none", borderRadius: "9px" }} className="card card-gradient">
                                        <div className="card-body">
                                            <div className="form-group row">
                                                <div className="row g-3 align-items-center">
                                                    <h3>Account Upgrade</h3> <hr />
                                                    <form onSubmit={upgradeAccount}>
                                                        <div className="mb-3">
                                                            <div id="emailHelp" className="form-text">Please provide the user ID to be Upgraded.</div>
                                                            <input
                                                                type="text"
                                                                value={UID.ID}
                                                                onChange={(e) => setUID({ ...UID, ID: e.target.value })}
                                                                className="form-control bg-transparent"
                                                            />
                                                        </div>
                                                        <div className="mb-3">
                                                            <div id="emailHelp" className="form-text">Please select the Level you want to be upgraded to.</div>
                                                            <select
                                                                value={UID.ULevel}
                                                                onChange={(e) => setUID({ ...UID, ULevel: e.target.value })}
                                                                className="form-select bg-transparent form-select-sm"
                                                                aria-label=".form-select-sm example">
                                                                <option selected>Open this select Level</option>
                                                                <option value="Level One">Level One</option>
                                                                <option value="Level Two">Level Two</option>
                                                                <option value="Level Three">Level Three</option>
                                                            </select>
                                                        </div>
                                                        <button type="submit" className="btn p-2 btn-primary">Submit</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 grid-margin mt-2 p-2">
                                    <div style={{ border: "none", borderRadius: "9px" }} className="card p-2 card-gradient">
                                        <div className="modal-body-scroll">
                                            <h3 className="card-title text-center">Users | Kyc | Authentication</h3><hr />
                                            <Table responsive>
                                                <thead>
                                                    <tr>
                                                        <th>[#]</th>
                                                        <th>[Email]</th>
                                                        <th>[Otp]</th>
                                                        <th>[Email-Staus]</th>
                                                        <th>[Kyc-Status]</th>
                                                        <th>[Identity Photo]</th>
                                                        <th>[Decline]</th>
                                                        <th>[Approve]</th>
                                                        <th>[Delete]</th>

                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {userAuth.length >= 1 ? (
                                                        userAuth.map((data) => (
                                                            <tr>
                                                                <td>ID:{data._id.slice(1, 12)}</td>
                                                                <td>${data.email}</td>
                                                                <td>{data.Otp}</td>
                                                                <td>{data.status}</td>
                                                                <td>{data.kycStatus}</td>
                                                                <td><img download={data.kycPic} width={130} height={80} className='img rounded' src={data.kycPic} alt="Identity photo" /></td>
                                                                <td><Button onClick={() => handleShow8(data._id)} style={{ fontSize: "14px" }} variant="warning p-2 m-1">Decline</Button></td>
                                                                <td> <Button onClick={() => handleShow9(data._id)} style={{ fontSize: "14px" }} variant="success p-2 m-1">Approve</Button></td>
                                                                <td><Button onClick={() => handleShow7(data._id)} style={{ fontSize: "14px" }} variant="danger p-2 m-1">Delete</Button></td>
                                                                <td></td>
                                                            </tr>
                                                        ))
                                                    ) :
                                                        <tr>
                                                            <td colSpan="10" className='text-center'>No Records Available!</td>
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
                                            <h3 className="card-title text-center">Users | Bank | Withdrawal | Table</h3><hr />
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
                                                        <th>[Decline]</th>
                                                        <th>[Approve]</th>
                                                        <th>[Delete]</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {bankR.length >= 1 ? (
                                                        bankR.map((data) => (
                                                            <tr>
                                                                <td>ID:{data._id.slice(1, 12)}</td>
                                                                <td>${data.amount}</td>
                                                                <td>{data.bank}</td>
                                                                <td>{data.name}</td>
                                                                <td>{data.swiftCode}</td>
                                                                <td>{data.status}</td>
                                                                <td>{data.email}</td>
                                                                <td><Button onClick={() => handleShow4(data._id)} style={{ fontSize: "14px" }} variant="warning p-2 m-1">Decline</Button></td>
                                                                <td> <Button onClick={() => handleShow5(data._id)} style={{ fontSize: "14px" }} variant="success p-2 m-1">Approve</Button></td>
                                                                <td><Button onClick={() => handleShow6(data._id)} style={{ fontSize: "14px" }} variant="danger p-2 m-1">Delete</Button></td>
                                                                <td></td>
                                                            </tr>
                                                        ))
                                                    ) :
                                                        <tr>
                                                            <td colSpan="10" className='text-center'>No Records Available!</td>
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
                                            <h3 className="card-title text-center">Users | Crypto | Withdrawal | Table</h3><hr />
                                            <Table responsive>
                                                <thead>
                                                    <tr>
                                                        <th>[#]</th>
                                                        <th>[Amount]</th>
                                                        <th>[Wallet]</th>
                                                        <th>[Status]</th>
                                                        <th>[Email]</th>
                                                        <th>[Decline]</th>
                                                        <th>[Approve]</th>
                                                        <th>[Delete]</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {cryptoR.length >= 1 ? (
                                                        cryptoR.map((data) => (
                                                            <tr>
                                                                <td>ID:{data._id.slice(1, 12)}</td>
                                                                <td>${data.amount}</td>
                                                                <td>{data.cryptoAddress}</td>
                                                                <td>{data.status}</td>
                                                                <td>{data.email}</td>
                                                                <td><Button onClick={() => handleShow4(data._id)} style={{ fontSize: "14px" }} variant="warning p-2 m-1">Decline</Button></td>
                                                                <td> <Button onClick={() => handleShow5(data._id)} style={{ fontSize: "14px" }} variant="success p-2 m-1">Approve</Button></td>
                                                                <td><Button onClick={() => handleShow6(data._id)} style={{ fontSize: "14px" }} variant="danger p-2 m-1">Delete</Button></td>
                                                                <td></td>
                                                            </tr>
                                                        ))
                                                    ) :
                                                        <tr>
                                                            <td colSpan="8" className='text-center'>No Records Available!</td>
                                                        </tr>
                                                    }
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
        </div>
    )
}

export default Admin
