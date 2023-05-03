import { Row } from "react-bootstrap";
import Header from "../../components/Header";
import React from 'react';
import { TableRow } from "semantic-ui-react";

const Home = () => {
  // const ReactDOMServer = require('react-dom/server');
  // const HtmlToReactParser = require('html-to-react').Parser;
  // const shopHtmlSection = '<section class="home-seven-slider"><div class="h-seven-slider-active"><div class="h-seven-slider-item"><div class="container custom-container"><div class="row justify-content-between align-items-center"><div class="col-xl-5 col-lg-6"><div class="h-seven-slider-content"><h2 class="title" data-animation-in="fadeInUp" data-delay-in=".2"><strong>negozio<br><h5>a partire da <span>$49_</span></h5></strong></h2><p data-animation-in="fadeInUp" data-delay-in=".4">Lorem ipsum dolor sit amet,consectetur adipiscing incididunt ut labore et dolore magna.</p><a href="#" class="btn rotated-btn" data-animation-in="fadeInUp"data-delay-in=".6">Shop Now</a></div></div><div class="col-xl-5 col-lg-6"><div class="h-seven-slider-img text-center"><img src="img/slider/shop_slider_img02.png" data-animation-in="slideInRightS"data-delay-in=".4" alt=""></div></div></div></div></div>'
  // const htmlToReactParser = new HtmlToReactParser();
  // const reactShopSectionElement = htmlToReactParser.parse(shopHtmlSection);
  // const reactHtml = ReactDOMServer.renderToStaticMarkup(reactShopSectionElement);

  return (
    <>
      <main>
        <section class="third-banner-bg">
          {/* <div className="mt-2">
            <Header></Header>
          </div> */}
          <div class="container custom-container">
            <div class="row">
              <div class="col-12">
                <div class="third-banner-img wow bounceInDown" data-wow-delay=".2s">
                  <img src='/img_nabbo/nabboz.png' alt="" />
                </div>
                <div class="third-banner-content text-center wow bounceInUp" data-wow-delay=".2s">
                  <div class="third-about-img text-right position-relative">
                  </div>
                  <h2>Nabbo<span>man</span></h2>
                  <h6>italian streaming gamer</h6>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- about section --> */}
        <section class="third-about-area third-about-bg pt-120 pb-90">
          <div class="container custom-container">
            <div class="row align-items-center">
              <div class="col-lg-6 order-0 order-lg-2">
                <div class="third-about-img text-right position-relative">
                  <img src='/img/images/third_about_img_shadow.png' class="shadow" alt="" />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="third-about-content">
                  <div class="third-title-style">
                    <h2>ABOUT<span>ME</span></h2>
                    <div class="inner">
                      <h2>TWITCH AND FACEBOOK STREAMER</h2>
                      <h6 class="vertical-title">themebeyond</h6>
                      <p>Sono Emanuele Frasca streamer di professione e Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Maiores
                        voluptas voluptates tenetur ad officiis ea corporis quos
                        voluptatibus vitae illo corrupti quas, libero eaque sint soluta,
                        eos natus, similique asperiores.</p><br />
                      <h6>CONTINUA A LEGGERE.. </h6>
                    </div>
                    <a href="about-us.html" class="btn rotated-btn">about</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- live-streaming-area --> */}
        <div className="game-gallery-area position-relative">
          <div className="game-gallery-bg"></div>
          <div className="container-fluid p-0 fix">
            <div className="row game-gallery-active">
              <div className="col-12">
                <div className="game-gallery-item">
                  <img className='justify-content-center align-item-center' src='/twitch-ar21.svg' height='100px' width='400px'></img>
                  <img className='justify-content-center align-item-center' src='/live-streaming-icon.svg' height='100px' width='100px'></img>
                  <div className="container-twitch">
                    <iframe className='mt-5 responsive-iframe' src="https://player.twitch.tv/?channel=nabboman_&parent=localhost&popout_chat=true" frameborder="0" allowfullscreen="true"></iframe>
                  </div>
                  {/* CHAT PER TWITCH (INIBITA PER IL MOMENTO DA IMPLEMENTARE CON RESPONSIVENESS) */}
                  {/* <div style={{marginLeft:'92%', marginTop:'-52%', zIndex:'2'}}>
                    <iframe id="twitch-chat-embed"
                          src="https://www.twitch.tv/embed/nabboman_/chat?parent=localhost"
                          height="560"
                          >                          
                  </iframe>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div class="slider-nav"></div>
        </div>
        {/* <!-- live-streaming-area-end --> */}

        {/* <!-- my-social-area --> */}
        <section class="my-match-area my-match-bg pb-120">
          <div class="container custom-container">
            <div class="row">
              <div class="col-12">
                <div class="third-section-title text-center mb-1">
                  <h2>I<span> MIEI </span>SOCIAL</h2>
                </div>
              </div>
            </div>
            <div class="flex-center-icons">
              <div class="icon-3d">
                <i class="fab fa-twitch fa-4x"></i>
              </div>
              <div class="icon-3d">
                <i class="fab fa-facebook fa-4x"></i>
              </div>
              <div class="icon-3d">
                <i class="fab fa-youtube fa-4x"></i>
              </div>
              <div class="icon-3d">
                <i class="fab fa-instagram fa-4x"></i>
              </div>
            </div>
            <div class="flex-center-icons">
              <div class="icon-3d">
                <i class="fab fa-tiktok fa-4x"></i>
              </div>
              <div class="icon-3d">
                <i class="fab fa-discord fa-4x"></i>
              </div>
              <div class="icon-3d">
                <h1>PH</h1>
              </div>
              <div class="icon-3d">
                <h1>OF</h1>
              </div>
            </div>
          </div>
        </section>
        {/* end my social area  */}

        {/* <!-- shop-area --> */}
        <section class="home-seven-slider">
          <div class="h-seven-slider-active">
            <div class="h-seven-slider-item">
              <div class="container custom-container">
                <div class="row justify-content-between align-items-center">
                  <div class="col-xl-5 col-lg-6">
                    <div class="h-seven-slider-content">
                      <h2 class="title" data-animation-in="fadeInUp" data-delay-in=".2">
                        <strong>negozio<br />
                          <h5>a partire da <span>$49_</span></h5>
                        </strong>
                      </h2>
                      <p data-animation-in="fadeInUp" data-delay-in=".4">Lorem ipsum dolor sit amet,
                        consectetur adipiscing incididunt ut labore et dolore magna.</p>
                      <a href="/store" class="btn rotated-btn" data-animation-in="fadeInUp"
                        data-delay-in=".6">Shop Now</a>
                    </div>
                  </div>
                  <div class="col-xl-5 col-lg-6">
                    <div class="h-seven-slider-img text-center">
                      <img src="img/slider/shop_slider_img02.png" data-animation-in="slideInRightS"
                        data-delay-in=".4" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div class="h-seven-slider-item">
                    <div class="container custom-container">
                        <div class="row justify-content-between align-items-center">
                            <div class="col-xl-5 col-lg-6">
                                <div class="h-seven-slider-content">
                                    <h2 class="title" data-animation-in="fadeInUp" data-delay-in=".2">
                                        <strong>negozio<br/>
                                            <h5>a partire da <span>$49_</span></h5>
                                        </strong>
                                    </h2>
                                    <p data-animation-in="fadeInUp" data-delay-in=".4">Lorem ipsum dolor sit amet,
                                        consectetur adipiscing incididunt ut labore et dolore magna.</p>
                                    <a href="#" class="btn rotated-btn" data-animation-in="fadeInUp"
                                        data-delay-in=".6">Shop Now</a>
                                </div>
                            </div>
                            <div class="col-xl-5 col-lg-6">
                                <div class="h-seven-slider-img text-center">
                                    <img src="img/slider/shop_slider_img01.png" data-animation-in="slideInRightS"
                                        data-delay-in=".4" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="h-seven-slider-item">
                    <div class="container custom-container">
                        <div class="row justify-content-between align-items-center">
                            <div class="col-xl-5 col-lg-6">
                                <div class="h-seven-slider-content">
                                    <h2 class="title" data-animation-in="fadeInUp" data-delay-in=".2">
                                        <strong>negozio<br/>
                                            <h5>a partire da <span>$49_</span></h5>
                                        </strong>
                                    </h2>
                                    <p data-animation-in="fadeInUp" data-delay-in=".4">Lorem ipsum dolor sit amet,
                                        consectetur adipiscing incididunt ut labore et dolore magna.</p>
                                    <a href="#" class="btn rotated-btn" data-animation-in="fadeInUp"
                                        data-delay-in=".6">shop Now</a>
                                </div>
                            </div>
                            <div class="col-xl-5 col-lg-6">
                                <div class="h-seven-slider-img text-center">
                                    <img src="img/slider/shop_slider_img03.png" data-animation-in="slideInRightS"
                                        data-delay-in=".4" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div> */}
          </div>
        </section>
        {/* <!-- shop-area-end --> */}

        {/* <!-- content-area --> */}
        <section class="team-area team-bg">
          <div class="container custom-container">
            <div class="row">
              <div class="col-12">
                <div class="third-section-title text-center mb-60">
                  <h2>I <span>MIEI </span>CONTENT</h2>
                </div>
              </div>
            </div>
            <div class="row justify-content-center">
              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                <div class="third-team-item text-center mb-30">
                  <div class="third-team-img">
                    <img src='/img/team/team_img01.png' alt="" />
                  </div>
                  <div class="third-team-content">
                    <div class="main-bg"></div>
                    <div class="hover-bg"></div>
                    <h5><a href="/home">Gaming</a></h5>
                    <span>testo</span>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                <div class="third-team-item text-center mb-30">
                  <div class="third-team-img">
                    <img src='/img/team/team_img01.png' alt="" />
                  </div>
                  <div class="third-team-content">
                    <div class="main-bg"></div>
                    <div class="hover-bg"></div>
                    <h5><a href="/home">Cineparty</a></h5>
                    <span>xxxx</span>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                <div class="third-team-item text-center mb-30">
                  <div class="third-team-img">
                    <img src='/img/team/team_img01.png' alt="" />
                  </div>
                  <div class="third-team-content">
                    <div class="main-bg"></div>
                    <div class="hover-bg"></div>
                    <h5><a href="/home">Talkshow</a></h5>
                    <span>blablabla</span>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                <div class="third-team-item text-center mb-30">
                  <div class="third-team-img">
                    <img src='/img/team/team_img01.png' alt="" />
                  </div>
                  <div class="third-team-content">
                    <div class="main-bg"></div>
                    <div class="hover-bg"></div>
                    <h5><a href="/home">Quizshow</a></h5>
                    <span>daksdalksd</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- games-area-end --> */}
      </main></>
  );
}

export default Home