import React from 'react'
import Header from '../../components/Header'

const About = () => {
    return (

        // <!-- main-area -->
        <main>
            {/* <!-- inner-about-area --> */}
            <section class="inner-about-area fix" style={{ backgroundColor: '#252525' }}>
                {/* <div className='mt-4 mb-5' style={{ backgroundColor: '#252525' }}>
                    <Header />
                </div> */}
                <div class="container">
                    <div class="row align-items-center" style={{ marginTop: '2%' }}>
                        <div class="col-sm-12 col-md-12 col-xl-7 col-lg-6 order-0 order-lg-2">
                            <div class="inner-about-img">
                                <img src="img/images/inner_about_img01.png" class="wow fadeInRight" data-wow-delay=".3s" alt="" />
                                <img src="img/images/inner_about_img02.png" class="wow fadeInLeft" data-wow-delay=".6s" alt="" />
                                <img src="img/images/inner_about_img03.png" class="wow fadeInUp" data-wow-delay=".6s" alt="" />
                            </div>
                        </div>
                        <div class="col-xl-5 col-lg-6">
                            <div class="section-title title-style-three mb-25">
                                <h2 className='ml-5 mt-5' style={{color:'white'}}>ABOUT <span>ME</span></h2>
                            </div>
                            <div class="inner-about-content">
                                <p>Streamer di professione e Lorem Ipsn gravida. Pro ain gravida nibh vel velit an auctor aliqueenean
                                    ollicitudin ain gravida nibh vel version an ipsum.</p>
                                <p>Lorem Ipsn gravida. Pro ain gravida nibh vevelit auctor aliqueenean ollicitudin ain gravida nibh vel version an ipsum.
                                    Lorem Ipsn gravida. Pro ain gravida nibh vevelit auctor aliqueenean ollicitudin ain gravida nibh vel version an ipsum.
                                    Lorem Ipsn gravida. Pro ain gravida nibh vevelit auctor aliqueenean ollicitudin ain gravida nibh vel version an ipsum.</p>
                                <p>Lorem Ipsn gravida. Pro ain gravida nibh vevelit auctor aliqueenean ollicitudin ain gravida nibh vel version an ipsum.
                                    Lorem Ipsn gravida. Pro ain gravida nibh vevelit auctor aliqueenean ollicitudin ain gravida nibh vel version an ipsum.
                                    Lorem Ipsn gravida. Pro ain gravida nibh vevelit auctor aliqueenean ollicitudin ain gravida nibh vel version an ipsum.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="inner-about-shape"><img src="img/images/medale_shape.png" alt="" /></div>
            </section>
            {/* <!-- inner-about-area-end --> */}

            {/* <!-- latest-match-area --> */}
            <section class="latest-match-area latest-match-bg pt-115 pb-90">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-xl-6 col-lg-8">
                            <div class="section-title title-style-three white-title text-center mb-70">
                                <h2>I MIEI <span>HOBBY</span></h2>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus fugiat labore porro eveniet maiores fugit adipisci, provident sunt inventore nemo quaerat culpa?</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="latest-match-box mb-30">
                                <div class="latest-match-thumb">
                                    <img src="img/images/latest_match_thumb01.jpg" alt="" />
                                </div>
                                <div class="tournament-schedule-content">
                                    <h3>Giocare AI <span>VIDEOGIOCHI</span></h3>
                                    <p>Find tecology people for digital projects in public There are many variations.</p>
                                    <div class="tournament-schedule-meta">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="latest-match-box mb-30">
                                <div class="latest-match-thumb">
                                    <img src="img/images/latest_match_thumb02.jpg" alt="" />
                                </div>
                                <div class="tournament-schedule-content">
                                    <h3>SUONARE LA <span>CHITARRA</span></h3>
                                    <p>Find tecology people for digital projects in public There are many variations.</p>
                                    <div class="tournament-schedule-meta">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="latest-match-box mb-30">
                                <div class="latest-match-thumb">
                                    <img src="img/images/latest_match_thumb03.jpg" alt="" />
                                </div>
                                <div class="tournament-schedule-content">
                                    <h3>SCALARE LE <span>MONTAGNE</span></h3>
                                    <p>Find tecology people for digital projects in public There are many variations.</p>
                                    <div class="tournament-schedule-meta">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="latest-match-box mb-30">
                                <div class="latest-match-thumb">
                                    <img src="img/images/latest_match_thumb04.jpg" alt="" />
                                </div>
                                <div class="tournament-schedule-content">
                                    <h3>DORMIRE NEL <span>LETTO</span></h3>
                                    <p>Find tecology people for digital projects in public There are many variations.</p>
                                    <div class="tournament-schedule-meta">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default About