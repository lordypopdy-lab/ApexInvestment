import React from 'react';
import axios from 'axios';
import toast from "react-hot-toast";
import { useState, useEffect } from 'react';

const Contact = () => {

  const User = JSON.parse(localStorage.getItem("user"));
  const email = User.email;

  const [chat, setChat] = useState([]);
  const [isDelete, setIsDelete] = useState(false);
  const [checkDelete, setCheckDelete] = useState("");
  const [message, setMessage] = useState({ value: "", from: "user", email: email });
  useEffect(() => {
    const getChat = async () => {
      await axios.post("/getAdminChat", { email }).then((data) => {
        if (data.data.chat) {
          setChat(data.data.chat)
        } else if (data.data.message) {
        }
      })
    }
    getChat();
  }, [])

  const sendChat = async () => {
    const { value, from, email } = message;
    console.log(value)
    await axios.post("/chatSend", {
      value,
      from,
      email
    }).then((data) => {
      if (data.data.chat) {
        toast.success("Message Sent")
        console.log(data.data.chat);
        setChat(data.data.chat);
        setMessage({ ...message, value: "" });
      } else if (data.data.error) {
        toast.error(data.data.error);
        console.log(data.data.error);
      }
    })
  }

  const deleteAction = (ID)=>{
    setCheckDelete(ID);
    setIsDelete(true)
  }

  const getChat = async () => {
    await axios.post("/getAdminChat", { email }).then((data) => {
      if (data.data.chat) {
        setChat(data.data.chat)
      } else if (data.data.message) {
      }
    })
  }
  
  const deleteChat = async (id)=>{
    await axios.post("/deleteChat", {id}).then((data)=>{
      if(data.data.success){
        getChat();
        toast.success(data.data.success);
      }
    })
  }
  return (
    <>
      <div style={{ marginTop: "80px" }} className="container-scroller">
        <div className="container-fluid page-body-wrapper">
          <div className="main-panel m-0 w-100">
            <div className="content-wrapper">
              <div className="row" style={{ height: "100vh", overflowY: "auto", paddingBottom: "100px" }}>
                <div style={{ position: "fixed", display: "block", top: "0%", width: "100%", zIndex: "1" }} className="col-xl-12 col-sm-12 grid-margin">
                  <div style={{ border: "none", borderRadius: "9px" }} className="card card-gradient">
                    <div className="card-body">
                      <img src="/img/top_img.png" width={50} style={{ borderRadius: "50%" }} alt="avatar" />
                    </div>
                  </div>
                </div>
                <div style={{ marginTop: "70px" }}>
                  {chat.length >= 1 ? (
                    chat.map((data) => (
                      <div onClick={() => deleteAction(data._id)} key={data._id} style={{ marginBottom: "27px" }} className="col-xl-12 col-sm-12 grid-margin">
                        <div style={{ border: "none", borderRadius: "9px" }} className="card card-gradient">
                          <div className="card-body card-gradient">
                            <div className="form-group">
                              {data.from === "admin" ? (
                                <p>
                                  <div className="card-title text-warning">
                                    Admin
                                  </div>
                                  {data.message} <br />
                                </p>
                              ) : data.from === "user" ? (
                                <p style={{textAlign: "right"}}>
                                   <div style={{float: "right"}} className="card-title m-3 text-warning">
                                    you
                                  </div>
                                  {data.message} <br />
                                  {isDelete && checkDelete == data._id ? (
                                    <span onClick={()=>deleteChat(data._id)} style={{ cursor: "pointer" }} className="text-danger">
                                      delete chat?
                                    </span>
                                  ) : (
                                    ""
                                  )}
                                </p>
                              ) : (
                                ""
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    ""
                  )}
                </div>

                <div style={{ position: "fixed", display: "block", bottom: "0%", width: "100%", zIndex: "1" }} className="col-xl-12 col-sm-12 grid-margin mt-3">
                  <div style={{ border: "none", borderRadius: "9px" }} className="card card-gradient">
                    <div className="card-body">
                      <form className="forms-sample">
                        <div className="input-group">
                          <textarea
                            className="Send-Box form-control bg-transparent text-white"
                            cols="30"
                            rows="10"
                            value={message.value}
                            onChange={(e) => setMessage({ ...message, value: e.target.value })}
                            placeholder="start live chat.."
                          ></textarea>
                          <div onClick={sendChat} className="input-group-text bg-dark send-chat-btn">
                            <i className="fas fa-paper-plane fa-lg"></i>
                          </div>
                        </div>
                      </form>
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

export default Contact
