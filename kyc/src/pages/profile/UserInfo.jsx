import React from 'react'
import { useContext } from 'react';
import coin3 from "../../images/coin/coin3.jpg";
import coin1 from "../../images/coin/coin1.jpg";
import coin9 from "../../images/coin/coin9.jpg";
import coin7 from "../../images/coin/coin7.jpg";
import coin4 from "../../images/coin/coin4.jpg";
import coin8 from "../../images/coin/coin8.jpg";
import coin5 from "../../images/coin/coin5.jpg";
import coin6 from "../../images/coin/coin6.jpg";
import coin14 from "../../images/coin/coin14.jpg";
import coin11 from "../../images/coin/coin11.jpg";
import logo144 from "../../images/logo/logo144.png";
import { UserContext } from '../../../context/UserContext';

const UserInfo = () => {
const {user} = useContext(UserContext);
if (!localStorage.getItem('email')) { location.href = '/login'; }

    return (
        <>
            {/* <!-- preloade --> */}
            <div className="preload preload-container">
                <div className="preload-logo" style={{ backgroundImage: `url(${logo144})` }}>
                    <div className="spinner"></div>
                </div>
            </div>
            {/* <!-- /preload -->  */}
            <div className="header fixed-top bg-surface d-flex justify-content-center align-items-center">
                <a href="#" className="left back-btn"><i className="icon-left-btn"></i></a>
                <a href="/AddressScan" className="right text-secondary"><i className="icon-barcode"></i></a>
            </div>
            <div className="pt-45 pb-16">
                <div className="bg-menuDark tf-container">
                    <a href="/Profile" className="pt-12 pb-12 mt-4 d-flex justify-content-between align-items-center">
                        <div className="box-account">
                           {!!user && user.picture !== '' ? <img src={!!user && user.picture} alt="img" className="avt" /> : <img src="/src/images/avt/avt2.jpg" alt="img" className="avt" />} 
                            <div className="info">
                                <h5>{!!user && user.name}</h5>
                                <p className="text-small text-secondary mt-8 mb-8">Profile and settings</p> 
                                {!!user && user.verification == 'Unverified' ? <span className="tag-xs style-2 round-2 red">{!!user && user.verification}</span> : !!user && user.verification == 'Inreview' ? <span className="tag-xs style-2 round-2 text-warning">{!!user && user.verification}</span> : <span className="tag-xs style-2 round-2 primary">{!!user && user.verification}</span> }
                            </div>
                        </div>
                        <span className="arr-right"><i className="icon-arr-right"></i></span>
                    </a>

                </div>
                <div className="bg-menuDark tf-container">
                    <div className="pt-12 pb-12 mt-4">
                        <h5>Bitclub Ratings</h5>
                        <ul className="mt-16 grid-3 gap-12">
                            <li>
                                <a href="#cryptocurrency" className="tf-list-item d-flex flex-column gap-8 align-items-center text-break text-center" data-bs-toggle="modal">
                                    <i className="icon text-primary icon-currency"></i>
                                    Currency
                                </a>
                            </li>
                            <li>
                                <a href="/Earn" className="tf-list-item d-flex flex-column gap-8 align-items-center text-break text-center">
                                    <i className="icon text-primary icon-swap"></i>
                                    Contracts
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
                <div className="bg-menuDark tf-container">
                    <div className="pt-12 pb-12 mt-4">
                        <h5>Exchange</h5>
                        <ul className="mt-16 grid-3 gap-12">
                            <li>
                                <a href="#" className="tf-list-item d-flex flex-column gap-8 align-items-center text-break text-center">
                                    <i className="icon icon-convert"></i>
                                    Convert
                                </a>
                            </li>
                            <li>
                                <a href="#" className="tf-list-item d-flex flex-column gap-8 align-items-center text-break text-center">
                                    <i className="icon icon-metalogo"></i>
                                    Consign
                                </a>
                            </li>
                            <li>
                                <a href="/AddressScan" className="tf-list-item d-flex flex-column gap-8 align-items-center text-break text-center">
                                    <i className="icon text-primary icon-bank"></i>
                                    Deposit
                                </a>
                            </li>
                            <li>
                                <a href="#" className="tf-list-item d-flex flex-column gap-8 align-items-center text-break text-center">
                                    <i className="icon icon-fileText"></i>
                                    Futures contract
                                </a>
                            </li>
                            <li>
                                <a href="#" className="tf-list-item d-flex flex-column gap-8 align-items-center text-break text-center">
                                    <i className="icon icon-graph"></i>
                                    Ageless
                                </a>
                            </li>
                            <li>
                                <a href="#" className="tf-list-item d-flex flex-column gap-8 align-items-center text-break text-center">
                                    <i className="icon icon-grid-nine"></i>
                                    Choice
                                </a>
                            </li>
                            <li>
                                <a href="#" className="tf-list-item d-flex flex-column gap-8 align-items-center text-break text-center">
                                    <i className="icon icon-game-control"></i>
                                    Simulated trading
                                </a>
                            </li>
                            <li>
                                <a href="#" className="tf-list-item d-flex flex-column gap-8 align-items-center text-break text-center">
                                    <i className="icon icon-robot"></i>
                                    Bot
                                </a>
                            </li>
                            <li>
                                <a href="#" className="tf-list-item d-flex flex-column gap-8 align-items-center text-break text-center">
                                    <i className="icon icon-database"></i>
                                    Copy
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="bg-menuDark tf-container">
                    <div className="pt-12 pb-12 mt-4">
                        <h5>Help center</h5>
                        <ul className="mt-16 grid-3 gap-12">
                            <li>
                                <a href="#" className="tf-list-item d-flex flex-column gap-8 align-items-center">
                                    <i className="icon icon-globe"></i>
                                    Community
                                </a>
                            </li>
                            <li>
                                <a href="#" className="tf-list-item d-flex flex-column gap-8 align-items-center">
                                    <i className="icon icon-headset"></i>
                                    Support
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
                <div className="bg-menuDark tf-container">
                    <a href="#" className="pt-12 pb-12 mt-4 d-flex justify-content-between align-items-center">
                        <h5>About Cointex</h5>
                        <span className="arr-right"><i className="icon-arr-right"></i></span>
                    </a>

                </div>
            </div>

            {/* <!--cryptocurrency --> */}
            <div className="modal fade modalRight" id="cryptocurrency">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="header fixed-top bg-surface d-flex justify-content-center align-items-center">
                            <span className="left" data-bs-dismiss="modal" aria-hidden="true"><i className="icon-left-btn"></i></span>
                            <h3>Choose cryptocurrency</h3>
                        </div>
                        <div className="overflow-auto pt-45 pb-16">
                            <div className="tf-container">
                                <div className="mt-8 search-box box-input-field">
                                    <i className="icon-search"></i>
                                    <input type="text" placeholder="Search cryptocurrency" required className="clear-ip" />
                                    <i className="icon-close"></i>
                                </div>
                                <h5 className="mt-12">Popular search</h5>
                                <ul className="mt-16">
                                    <li>
                                        <a href="#" className="coin-item style-2 gap-12">
                                            <img src={coin3} alt="img" className="img" />
                                            <div className="content">
                                                <div className="title">
                                                    <p className="mb-4 text-large">Ethereum</p>
                                                    <span className="text-secondary text-small">ETH</span>
                                                </div>
                                                <span className="text-small">$30.776,93</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="mt-16">
                                        <a href="#" className="coin-item style-2 gap-12">
                                            <img src={coin1} alt="img" className="img" />
                                            <div className="content">
                                                <div className="title">
                                                    <p className="mb-4 text-large">Bitcoin</p>
                                                    <span className="text-secondary text-small">BTC</span>
                                                </div>
                                                <span className="text-small">$1.936,79</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="mt-16">
                                        <a href="#" className="coin-item style-2 gap-12">
                                            <img src={coin14} alt="img" className="img" />
                                            <div className="content">
                                                <div className="title">
                                                    <p className="mb-4 text-large">TetherUS</p>
                                                    <span className="text-secondary text-small">USDT</span>
                                                </div>
                                                <span className="text-small">$0,999999</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="mt-16">
                                        <a href="#" className="coin-item style-2 gap-12">
                                            <img src={coin7} alt="img" className="img" />
                                            <div className="content">
                                                <div className="title">
                                                    <p className="mb-4 text-large">BNB</p>
                                                    <span className="text-secondary text-small">BNB</span>
                                                </div>
                                                <span className="text-small">$243,41</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="mt-16">
                                        <a href="#" className="coin-item style-2 gap-12">
                                            <img src={coin9} alt="img" className="img" />
                                            <div className="content">
                                                <div className="title">
                                                    <p className="mb-4 text-large">Ripple</p>
                                                    <span className="text-secondary text-small">XRP</span>
                                                </div>
                                                <span className="text-small">$0,487814</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="mt-16">
                                        <a href="#" className="coin-item style-2 gap-12">
                                            <img src={coin4} alt="img" className="img" />
                                            <div className="content">
                                                <div className="title">
                                                    <p className="mb-4 text-large">Cardano</p>
                                                    <span className="text-secondary text-small">ADA</span>
                                                </div>
                                                <span className="text-small">$0,294842</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="mt-16">
                                        <a href="#" className="coin-item style-2 gap-12">
                                            <img src={coin11} alt="img" className="img" />
                                            <div className="content">
                                                <div className="title">
                                                    <p className="mb-4 text-large">BUSD</p>
                                                    <span className="text-secondary text-small">BUSD</span>
                                                </div>
                                                <span className="text-small">$0,999899</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="mt-16">
                                        <a href="#" className="coin-item style-2 gap-12">
                                            <img src={coin8} alt="img" className="img" />
                                            <div className="content">
                                                <div className="title">
                                                    <p className="mb-4 text-large">trueUSD</p>
                                                    <span className="text-secondary text-small">TUSD</span>
                                                </div>
                                                <span className="text-small">$0,999999</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="mt-16">
                                        <a href="#" className="coin-item style-2 gap-12">
                                            <img src={coin5} alt="img" className="img" />
                                            <div className="content">
                                                <div className="title">
                                                    <p className="mb-4 text-large">Coin98</p>
                                                    <span className="text-secondary text-small">C98</span>
                                                </div>
                                                <span className="text-small">$0,169888</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="mt-16">
                                        <a href="#" className="coin-item style-2 gap-12">
                                            <img src={coin6} alt="img" className="img" />
                                            <div className="content">
                                                <div className="title">
                                                    <p className="mb-4 text-large">Kurama</p>
                                                    <span className="text-secondary text-small">KRM</span>
                                                </div>
                                                <span className="text-small">$21.89,39</span>
                                            </div>
                                        </a>
                                    </li>
                                </ul>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default UserInfo