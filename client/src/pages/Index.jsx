import React from 'react';
import NavBar from '../components/NavBar';
import Widget101 from '../components/Widget101';

import "../assets/assets/assets/css/theme.css";
import "../assets/lib/animate/animate.min.css"
import "../assets/lib/owlcarousel/assets/owl.carousel.min.css"

const Index = () => {


    return (
        <>
            <main className="main" id="top">
                <NavBar />
                <section className="mt-6">

                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <img src="img/top_img.png" alt="Bitcoin_logo" style={{ marginTop: "-60px" }} s width="300px" srcset="" />
                            </div>
                            <div className="col-md-6 mt-4 p-4">
                                <h5 className="text-white text-uppercase mb-3 animated slideInDown">FOREX, STOCK, CRYPTO <span className="text-warning">AND BINARY</span></h5>
                                <h3 className="display-1 text-white mb-md-4 animated zoomIn">GROW YOUR <span className="text-warning">FINANCIAL</span> STABILITY!</h3>
                                <p className="fs-2">the Forex market presents endless income earning opportunities for savvy investors who are able to buy and sell the world’s major currencies 24 hours a day throughout Monday to Friday. Our trading services are designed to help our clients make the most of this opportunity.</p>
                                <a href="/register" className="btn btn-primary mt-3">Create Account</a>
                            </div>
                        </div>
                    </div>
                    <Widget101 />
                </section>

                <div className="container">
                    <div className="row p-4">
                        <div className="col-md-6">
                            <img className="img-fluid" src="img/box-3.gif" alt="Dashboard" />
                        </div>
                        <div className="col-md-6 mt-4 p-3">
                            <div className="section-title position-relative pb-3 mb-5">
                                <h4 className="fw-bold text-primary text-uppercase">About Us</h4>
                                <h1 className="mb-0 text-light">Your Path to Forex Success</h1>
                            </div>
                            <p>Apex Investment Group is fully automated trading platform that gives you full control of your investment, and allows you to withdraw your capital and profit at anytime. We were one of the first to invest in Crypto Currencies. HintsPrimeFx is a legal leading blockchain investment company, Being the largest market in the world with an average daily trading volume of about $5.5 trillion,
                                the Forex market presents endless income earning opportunities for savvy investors who are able to buy and sell the world’s major currencies 24 hours a day throughout Monday to Friday. Our trading services are designed to help our clients make the
                            </p>
                            <div className="row g-0 mb-3">
                                <div className="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
                                    <h5 className="mb-3 text-light"><i className="fa fa-check text-primary me-3"></i>Award Winning</h5>
                                    <h5 className="mb-3 text-light"><i className="fa fa-check text-primary me-3"></i>Professional Staff</h5>
                                </div>
                                <div className="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
                                    <h5 className="mb-3 text-light"><i className="fa fa-check text-primary me-3"></i>24/7 Support</h5>
                                    <h5 className="mb-3 text-light"><i className="fa fa-check text-primary me-3"></i>Fair Prices</h5>
                                </div>
                            </div>
                            <div className="d-flex align-items-center mb-4 wow fadeIn" data-wow-delay="0.6s">
                                <div className="bg-primary d-flex align-items-center justify-content-center rounded" style={{ width: "60px", height: "60px" }}>
                                    <i className="fa fa-phone-alt text-white"></i>
                                </div>
                                <div className="ps-4">
                                    <h5 className="mb-2 text-light">Call to ask any question</h5>
                                    <h4 className="text-primary mb-0">+012 345 6789</h4>
                                </div>
                            </div>
                            <a href="quote.html" className="btn btn-primary py-3 px-5 mt-3 wow zoomIn" data-wow-delay="0.9s">Request A Quote</a>
                        </div>
                    </div>
                </div>

                <section>
                    <div className="container">
                        <div className="row mx-md-5 px-md-5 d-flex justify-content-evenly">
                            <div className="col-4 col-lg-auto mt-5 mt-lg-0"><img src="img/logo-1.png" alt="Google" style={{ height: "30px" }} /></div>
                            <div className="col-4 col-lg-auto mt-5 mt-lg-0"><img src="img/logo-2.png" alt="Slack" style={{ height: "30px" }} /></div>
                            <div className="col-4 col-lg-auto mt-5 mt-lg-0"><img src="img/logo-3.png" alt="Amazon" style={{ height: "30px" }} /></div>
                            <div className="col-4 col-lg-auto mt-5 mt-lg-0"><img src="img/logo-4.png" alt="Zoom" style={{ height: "30px" }} /></div>
                            <div className="col-4 col-lg-auto mt-5 mt-lg-0"><img src="img/logo-5.png" alt="Netflix" style={{ height: "30px" }} /></div>
                        </div>
                        <div className="px-xl-8 px-md-7">
                            <hr className="mt-7 text-1000" />
                        </div>
                    </div>
                </section>
                <section>

                    <div className="container">
                        <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: "500px" }}>
                            <h5 className="fw-bold text-primary text-uppercase">Why Choose Us</h5>
                            <h1 className="mb-0 text-light">Our Commitment to Your Trading Triumph</h1>
                        </div>
                        <div className="row mb-4 mt-6">
                            <div className="col-md-6">
                                <div className="border rounded-1 border-700 h-100 features-items">
                                    <div className="p-5"><i className="fa fa-cubes text-white bg-primary text-800 p-2 rounded"></i>
                                        <h4 className="text-light mt-2">Expertise and Experience</h4>
                                        <p className="mb-0">With a team of seasoned Forex experts, we bring a wealth of knowledge and experience to the table. Our insights and strategies are honed by years of navigating the intricate Forex markets successfully.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="border rounded-1 border-700 h-100 features-items">
                                    <div className="p-5"><i className="fa fa-award text-white bg-primary text-800 p-2 rounded"></i>
                                        <h4 className="text-light mt-2">Transparency and Trust</h4>
                                        <p className="mb-0"> We believe in transparency and ethical practices. We provide clear information about our services, fees, and operations, establishing a trust-based relationship with our clients.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="col-md-6">
                                <div className="border rounded-1 border-700 h-100 features-items">
                                    <div className="p-5"><i className="fa fa-users-cog text-white bg-primary text-800 p-2 rounded"></i>
                                        <h4 className="text-light mt-2">Cutting-Edge Technology</h4>
                                        <p className="mb-0">Our state-of-the-art trading platforms and tools are designed to empower you with the latest advancements in Forex trading, giving you an edge in the markets.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="border rounded-1 border-700 h-100 features-items">
                                    <div className="p-5"><i className="fa fa-phone-alt text-white bg-primary text-800 p-2 rounded"></i>
                                        <h4 className="text-light mt-2">Proven Track Record</h4>
                                        <p className="mb-0">Our track record speaks for itself. We have a history of delivering results and creating success stories for our clients.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="mt-5">
                    <div className="container">
                        <div className="text-center">
                            <div className="p-5 bg-primary rounded-3">
                                <div className="py-3">
                                    <h4 className="opacity-50 ls-2 lh-base fw-medium">READY TO START</h4>
                                    <h2 className="mt-3 fs-4 fs-sm-7 latter-sp-3 lh-base fw-semi-bold">Start Your Investment Today </h2>
                                </div>
                                <div className="flex-center d-flex">
                                    <a href="/register" className="btn btn-info">Get Started <span className="fas fa-arrow-right"></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="container-fluid py-5 wow fadeInUp bg-dark" data-wow-delay="0.1s">
                    <div className="container py-5">
                        <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: "600px" }}>
                            <h5 className="fw-bold text-primary text-uppercase">OUR MOST ICONIC AWARDS</h5>
                            <h1 className="mb-0 text-light">Top Awards</h1>
                        </div>
                        <div className="row g-5">
                            <div className="col-lg-6 wow slideInUp" data-wow-delay="0.3s">
                                <img className="img-fluid w-100" src="img/ui-1.png" alt="" />
                            </div>

                            <div className="col-lg-4 wow slideInUp" data-wow-delay="0.9s">
                                <img className="img-fluid w-100" src="img/awards1.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Award End --> */}

                {/* <!-- ============================================-->
                                                    <!-- <section> begin ============================--> */}
                <section>

                    <div className="container-lg">
                        <div className="text-center">
                            <p className="fs-2 ls-2">SAFLOW</p>
                            <h1 className="display-6 fw-semi-bold">Pricing</h1>
                        </div>
                        <div className="row flex-center">
                            <div className="col-sm-9 col-md-4 mt-3">
                                <div className="py-5 px-4 px-md-3 px-lg-4 rounded-1 bg-800 plans-cards mt-md-9">
                                    <p className="fs-2 ls-2">STARTER PLAN</p>
                                    <h1 className="display-4 ls-3"><span className="text-600">$</span>200</h1>
                                    <hr className="hr mt-6 text-1000" />
                                    <ul className="mt-5 ps-0">
                                        <li className="pricing-lists"><i className="fas fa-check-circle fa-lg me-2 text-600"></i>Signal Pro</li>
                                        <li className="pricing-lists"><i className="fas fa-check-circle fa-lg me-2 text-600"></i>Signal Analysis</li>
                                        <li className="pricing-lists"><i className="fas fa-check-circle fa-lg me-2 text-600"></i>Min. Investment <small>$100</small></li>
                                        <li className="pricing-lists"><i className="fas fa-check-circle fa-lg me-2 text-600"></i>Max Investment $1,999</li>
                                        <li className="pricing-lists"><i className="fas fa-check-circle fa-lg me-2 text-600"></i>3.5% Referral Bonus</li>
                                    </ul>
                                    <button className="btn btn-gray mt-4">Get Started <span className="fas fa-arrow-right"></span></button>
                                </div>
                            </div>
                            <div className="col-sm-9 col-md-4 mt-3">
                                <div className="py-5 px-4 px-md-3 px-lg-4 rounded-1 bg-800 plans-cards mt-0">
                                    <p className="fs-2 ls-2">BASIC</p>
                                    <h1 className="display-4 ls-3"><span className="text-600">$</span>2,000</h1>
                                    <hr className="hr mt-6 text-1000" />
                                    <ul className="mt-5 ps-0">
                                        <li className="pricing-lists"><i className="fas fa-check-circle fa-lg me-2 text-600"></i>Signal Pro</li>
                                        <li className="pricing-lists"><i className="fas fa-check-circle fa-lg me-2 text-600"></i>Signal Analysis</li>
                                        <li className="pricing-lists"><i className="fas fa-check-circle fa-lg me-2 text-600"></i>Min.Investment <small>$2,000</small></li>
                                        <li className="pricing-lists"><i className="fas fa-check-circle fa-lg me-2 text-600"></i>Max Investment $4,999</li>
                                        <li className="pricing-lists"><i className="fas fa-check-circle fa-lg me-2 text-600"></i>3.8% Referral Bonus</li>
                                    </ul>
                                    <button className="btn btn-gray mt-4">Get Started <span className="fas fa-arrow-right"></span></button>
                                </div>
                            </div>
                            <div className="col-sm-9 col-md-4 mt-3">
                                <div className="py-5 px-4 px-md-3 px-lg-4 rounded-1 bg-800 plans-cards mt-md-9">
                                    <p className="fs-2 ls-2">PREMIUM</p>
                                    <h1 className="display-4 ls-3"><span className="text-600">$</span>5,000</h1>
                                    <hr className="hr mt-6 text-1000" />
                                    <ul className="mt-5 ps-0">
                                        <li className="pricing-lists"><i className="fas fa-check-circle fa-lg me-2 text-600"></i>Signal Pro</li>
                                        <li className="pricing-lists"><i className="fas fa-check-circle fa-lg me-2 text-600"></i>Signal Analysis</li>
                                        <li className="pricing-lists"><i className="fas fa-check-circle fa-lg me-2 text-600"></i>Min.Investment <small>5,000</small></li>
                                        <li className="pricing-lists"><i className="fas fa-check-circle fa-lg me-2 text-600"></i>Max Investment $9,999</li>
                                        <li className="pricing-lists"><i className="fas fa-check-circle fa-lg me-2 text-600"></i>4.2% Referral Bonus</li>
                                    </ul>
                                    <button className="btn btn-gray mt-4">Get Started <span className="fas fa-arrow-right"></span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- end of .container--> */}

                </section>
                {/* <!-- <section> close ============================-->
                                                            <!-- ============================================--> */}


                {/* <!-- Quote Start --> */}
                <div className="container-fluid py-5 bg-dark wow fadeInUp" id="question" data-wow-delay="0.1s">
                    <div className="container py-5">
                        <div className="row g-5">
                            <div className="col-lg-7">
                                <div className="section-title position-relative pb-3 mb-5">
                                    <h5 className="fw-bold text-primary text-uppercase">Request A Quote</h5>
                                    <h1 className="mb-0 text-light">Need A Free Quote? Please Feel Free to Contact Us</h1>
                                </div>
                                <div className="row gx-3">
                                    <div className="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
                                        <h5 className="mb-4 text-primary"><i className="fa fa-reply text-primary me-3"></i>Reply within 24 hours</h5>
                                    </div>
                                    <div className="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
                                        <h5 className="mb-4 text-light"><i className="fa fa-phone-alt text-primary me-3"></i>24 hrs telephone support</h5>
                                    </div>
                                </div>
                                <p className="mb-4 text-light"> Being the largest market in the world with an average daily trading volume of about $5.5 trillion,
                                    the Forex market presents endless income earning opportunities for savvy investors who are able to buy and sell the world’s major currencies 24 hours a day throughout Monday to Friday. Our trading services are designed to help our clients make the most of this opportunity.</p>
                                <div className="d-flex align-items-center mt-2 wow zoomIn" data-wow-delay="0.6s">
                                    <div className="bg-primary d-flex align-items-center justify-content-center rounded" style={{ width: "60px", height: "60px" }}>
                                        <i className="fa fa-phone-alt text-white"></i>
                                    </div>
                                    <div className="ps-4">
                                        <h5 className="mb-2">Call to ask any question</h5>
                                        <h4 className="text-primary mb-0">+012 345 6789</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="bg-primary rounded h-100 d-flex align-items-center p-5 wow zoomIn" data-wow-delay="0.9s">
                                    <form>
                                        <div className="row g-3">
                                            <div className="col-xl-12">
                                                <input type="text" className="form-control bg-light border-0" placeholder="Your Name" style={{ height: "55px" }} />
                                            </div>
                                            <div className="col-12">
                                                <input type="email" className="form-control bg-light border-0" placeholder="Your Email" style={{ height: "55px" }} />
                                            </div>
                                            <div className="col-12">
                                                <select className="form-select bg-light border-0" style={{ height: "55px" }}>
                                                    <option selected>Select A Service</option>
                                                    <option value="1">Service 1</option>
                                                    <option value="2">Service 2</option>
                                                    <option value="3">Service 3</option>
                                                </select>
                                            </div>
                                            <div className="col-12">
                                                <textarea className="form-control bg-light border-0" rows="3" placeholder="Message"></textarea>
                                            </div>
                                            <div className="col-12">
                                                <button className="btn btn-dark w-100 py-3" type="submit">Request A Quote</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Quote End --> */}


                {/* <!-- ============================================-->
                                                            <!-- <section> begin ============================--> */}
                <section>

                    <div className="container">
                        <div className="text-center text-xl-start">
                            <div className="p-5 bg-primary rounded-3 d-flex flex-column justify-content-xl-between flex-xl-row">
                                <div className="py-3">
                                    <h4 className="opacity-50 ls-2 lh-base fw-medium">READY TO START</h4>
                                    <h2 className="mt-3 fs-4 fs-sm-7 latter-sp-3 lh-base fw-semi-bold">Start Your Investment Today!</h2>
                                </div>
                                <div className="flex-center d-flex">
                                    <button className="btn btn-info">Get Started <span className="fas fa-arrow-right"></span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- end of .container--> */}

                </section>
                {/* <!-- <section> close ============================-->
                                                                    <!-- ============================================--> */}




                {/* <!-- ============================================-->
                                                                    <!-- <section> begin ============================--> */}

                {/* <!-- Footer Start --> */}
                <div className="container-fluid text-light mt-5 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="container">
                        <div className="row gx-5">
                            <div className="col-lg-4 col-md-6 footer-about">
                                <div className="d-flex flex-column align-items-center justify-content-center text-center h-100 bg-primary p-4">
                                    <a href="index1.php" className="navbar-brand">
                                        <h1 className="m-0 text-white"><img src="img/logo_2.png" style={{ height: "40px", marginRight: "9px", width: "40px", objectFit: "fill" }} alt="logo" />Apex Investment Group</h1>
                                    </a>

                                    <p className="mt-3 mb-4">Apex Investment Group is fully automated trading platform that gives you full control of your investment, and allows you to withdraw your capital and profit at anytime. We were one of the first to invest in Crypto Currencies. HintsPrimeFx is a legal leading blockchain investment company.</p>
                                    <form action="">
                                        <div className="input-group">
                                            <input type="text" className="form-control border-white p-3" placeholder="Your Email" />
                                            <button className="btn btn-dark">Sign Up</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-6">
                                <div className="row gx-5">
                                    <div className="col-lg-4 col-md-12 pt-5 mb-5">
                                        <div className="section-title section-title-sm position-relative pb-3 mb-4">
                                            <h3 className="text-light mb-0">Get In Touch</h3>
                                        </div>
                                        <div className="d-flex mb-2">
                                            <i className="bi bi-geo-alt text-primary me-2"></i>
                                            <p className="mb-0">123 Street, New York, USA</p>
                                        </div>
                                        <div className="d-flex mb-2">
                                            <i className="bi bi-envelope-open text-primary me-2"></i>
                                            <p className="mb-0">info@ForexPulse.com</p>
                                        </div>
                                        <div className="d-flex mb-2">
                                            <i className="bi bi-telephone text-primary me-2"></i>
                                            <p className="mb-0">+012 345 67890</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                                        <div className="section-title section-title-sm position-relative pb-3 mb-4">
                                            <h3 className="text-light mb-0">Quick Links</h3>
                                        </div>
                                        <div className="link-animated d-flex flex-column justify-content-start">
                                            <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Home</a>
                                            <a className="text-light mb-2" href="#about"><i className="bi bi-arrow-right text-primary me-2"></i>About Us</a>
                                            <a className="text-light mb-2" href="#services"><i className="bi bi-arrow-right text-primary me-2"></i>Why Choose Us</a>
                                            <a className="text-light mb-2" href="#pricing"><i className="bi bi-arrow-right text-primary me-2"></i>Pricing Plan</a>
                                            <a className="text-light mb-2" href="#testimonial"><i className="bi bi-arrow-right text-primary me-2"></i>Testimonial</a>
                                            <a className="text-light" href="#contact"><i className="bi bi-arrow-right text-primary me-2"></i>Contact Us</a>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                                        <div className="section-title section-title-sm position-relative pb-3 mb-4">
                                            <h3 className="text-light mb-0">Popular Links</h3>
                                        </div>
                                        <div className="link-animated d-flex flex-column justify-content-start">
                                            <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Home</a>
                                            <a className="text-light mb-2" href="#about"><i className="bi bi-arrow-right text-primary me-2"></i>About Us</a>
                                            <a className="text-light mb-2" href="#services"><i className="bi bi-arrow-right text-primary me-2"></i>Why Choose Us</a>
                                            <a className="text-light mb-2" href="#priceing"><i className="bi bi-arrow-right text-primary me-2"></i>Pricing Plan</a>
                                            <a className="text-light mb-2" href="#testimomial"><i className="bi bi-arrow-right text-primary me-2"></i>Testimonial</a>
                                            <a className="text-light" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Contact Us</a>
                                        </div>
                                        <p className="bg-primary alerts text-light back-to-top p-3" id="get-text"></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Footer End --> */}


                {/* <!-- <section> close ============================-->
                                                                    <!-- ============================================--> */}


            </main>
        </>
    )
}

export default Index
