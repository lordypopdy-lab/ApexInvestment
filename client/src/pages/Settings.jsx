import React from 'react'
import MainNavBar from '../components/MainNavBar'

const Settings = () => {
    return (
        <div>
            <MainNavBar />
            <div style={{ marginTop: "80px" }} className="container-scroller">
                <div className="container-fluid page-body-wrapper">
                    <div className="main-panel m-0 w-100">
                        <div className="content-wrapper">
                            <div className="row">
                                <div style={{ borderRadius: "0px" }} className="col-xl-6 p-2 col-sm-6">
                                    <button className='btn btn-secondary w-100'><i className="fas fa-wallet text-warning m-2"></i>Connect Wallet</button>
                                    <div style={{ border: "none", borderRadius: "9px" }} className="card card-gradient">
                                        <div className="card-body card-gradient">
                                            <h4 className="card-title">Account Information</h4><hr />
                                            <form action="payments.php" className="forms-sample">
                                                <div className="form-group">
                                                    <label for="exampleInputConfirmPassword1">FulltName</label>
                                                    <input type="text" value="full-name" className="form-control bg-transparent bg-transparent" />
                                                </div>
                                                <div className="form-group">
                                                    <label for="exampleInputConfirmPassword1">UserName</label>
                                                    <input type="text" value="username" className="form-control bg-transparent bg-transparent" />
                                                </div>
                                                <div className="form-group">
                                                    <label for="exampleInputConfirmPassword1">Country</label>
                                                    <input type="text" value="country" className="form-control bg-transparent bg-transparent" />
                                                </div>
                                                <div className="mt-3 d-flex justify-content-between">
                                                    <button type="submit" className="btn btn-primary mr-2">Submit</button>
                                                    <button className="btn btn-dark">Cancel</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-sm-6 grid-margin mt-5">
                                    <div style={{ border: "none", borderRadius: "9px" }} className="card card-gradient">
                                        <div className="card-body card-gradient">
                                            <form className="forms-sample">
                                                <div className="form-group">
                                                    <label>Email</label>
                                                    <input type="email" value="enter email" className="form-control bg-transparent bg-transparent" />
                                                </div>
                                                <div className="form-group">
                                                    <label>Phone(optional)</label>
                                                    <input type="tel" placeholder='+123' className="form-control bg-transparent bg-transparent" />
                                                </div>
                                                <div className="mt-3 d-flex justify-content-between">
                                                    <button type="submit" className="btn btn-primary mr-2">Submit</button>
                                                    <button className="btn btn-dark">Cancel</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-12 col-sm-12 grid-margin mt-3">
                                    <div style={{ border: "none", borderRadius: "9px" }} className="card card-gradient">
                                        <div className="card-body">
                                            <h4 className="card-title">CHANGE PASSWORD</h4>
                                            <form action="resset.php" method="post" className="forms-sample">
                                                <div className="form-group">
                                                    <label for="exampleInputPassword1">Old Password</label>
                                                    <input type="password" className="form-control bg-transparent" placeholder="Old Password" />
                                                </div>
                                                <div className="form-group">
                                                    <label for="exampleInputPassword1">New Password</label>
                                                    <input type="password" className="form-control bg-transparent" placeholder="New Password" />
                                                </div>
                                                <div className="form-group">
                                                    <label for="exampleInputPassword1">Comfirm Password</label>
                                                    <input type="password" className="form-control bg-transparent" placeholder="Comfrim Password" />
                                                </div>
                                                <div className="mt-3 d-flex justify-content-between">
                                                    <button type="submit" className="btn btn-primary mr-2">Update</button>
                                                    <button className="btn btn-dark">Cancel</button>
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
        </div>
    )
}

export default Settings
