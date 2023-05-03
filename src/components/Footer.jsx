import React from 'react';
import { useLocation } from 'react-router-dom';

const Footer = () => {
    const location = useLocation();
    return (<>
        {location.pathname !== '/' && (
            <footer>
                <div class="footer-top footer-bg third-footer-bg" style={{ backgroundColor: 'rgba(28,29,33,255)' }}>
                    <div class="container custom-container">
                        <div class="row justify-content-between">
                            <div class="col-lg-6">
                                <div class="footer-widget mb-50">
                                    <div class="logo">
                                        <a href="index-3.html"></a>
                                        {/* <!-- <img src="img_nabbo/logo-transformed.png" className="nabboman-logo-footer"> --> */}
                                    </div>
                                    <div class="fw-title mb-35">
                                        <h3>Nabbo<span>Man</span></h3>
                                    </div>
                                    <div class="fw-text">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                                            voluptas voluptates tenetur ad officiis ea corporis quos
                                            voluptatibus vitae illo corrupti quas, libero eaque sint soluta,
                                            eos natus, similique asperiores.</p>
                                        <div class="fw-social">
                                            <ul>
                                                <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                                <li><a href="#"><i class="fab fa-pinterest-p"></i></a></li>
                                                <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-2 col-lg-3 col-md-5">
                                <div class="footer-widget text-right mb-50">
                                    <div class="fw-title mb-35">
                                        <h3>Quick <span>Link</span></h3>
                                    </div>
                                    <div class="fw-quick-link">
                                        <ul>
                                            <li><a href="#">About Me</a></li>
                                            <li><a href="#">Store</a></li>
                                            <li><a href="#">Donations</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="footer-widget">
                                <div class="fw-title">
                                    <h5>Follow me</h5>
                                </div>
                                <div class="footer-social">
                                    <ul>
                                        <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                        <li><a href="#"><i class="fab fa-pinterest-p"></i></a></li>
                                        <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="copyright-wrap third-copyright-wrap">
                    <div class="container custom-container">
                        <div class="row">
                            <div class="col-lg-6 col-md-6">
                                <div class="copyright-text">
                                    <p>Copyright © 2023 <a href="#">Nabboman</a> All Rights Reserved.</p>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 d-none d-md-block">
                                <div class="payment-method-img text-right">
                                    <img src='/img/images/card_img.png' alt="img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>)}
    </>
    )
}

export default Footer