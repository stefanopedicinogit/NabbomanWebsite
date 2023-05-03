import React, {useEffect, useState} from 'react'
import { getPosts } from '../../services/gqlRequests';

const DetailedPost = () => {
    const [arrayPosts, setArrayPosts] = useState([]);
    const [detailedPost, setDetailedPost] = useState({});
  
    const onLoad = async () => {
      const results = await getPosts();
      setArrayPosts(results);
    }

    useEffect(() => {
        onLoad()
    }, [])

    useEffect(() => {
        const url = window.location.pathname;
        const lastPart = url.split('/').pop();
        if (arrayPosts.length > 0) {
          const myDetailedPost = arrayPosts.find(post => post.node.id === lastPart);
          setDetailedPost(myDetailedPost);
          console.log('DETAILED POST:', detailedPost);
        }
      }, [arrayPosts]);
    
  
  return (
    <>
    {/* detailed-post-area */}
    <section className="blog-area primary-bg pt-120 pb-175">
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <div className="blog-list-post blog-details-wrap">
                        <div className="blog-list-post-content">
                            <div className="blog-list-post-tag mb-25">
                            </div>
                             {detailedPost && detailedPost.node && detailedPost.node.title && (
                                <h2>{detailedPost.node.title}</h2>
                                )} 
                            <div className="blog-meta">
                                <ul>
                                    <li>bY <a href="#">EMANUELE FRASCA</a> 22 FEBBRAIO 2023</li>
                                </ul>
                            </div>
                            <blockquote>
                                QUOTE HERE
                            </blockquote>
                            {detailedPost && detailedPost.node && detailedPost.node.excerpt && (
                                <p>{detailedPost.node.excerpt}</p>
                            )}
                            <div className="row">
                                <div className="col-sm-6">
                                     <div className="blog-details-img">
                                        <img src="img/blog/blog_details_img01.jpg" alt=""/>
                                    </div> 
                                </div>
                                <div className="col-sm-6">
                                    <div className="blog-details-img">
                                        <img src="img/blog/blog_details_img02.jpg" alt=""/>
                                    </div> 
                                </div>
                            </div>
                            <p>Aliquet cursus quam. Pellentesque pulvin condimentum dictum, sapien auctor tortoris
                                vulputate sapien tortor velit. Sed
                                nulla congue euqua molestie grvida ipsum. Curabitr ut lacus vitae tellus lacinia
                                pretium. Proin vestibulum sollcitudin
                                tortor, quis auctor mi rutrum non.</p>
                            <div className="blog-list-post-bottom">
                                <ul>
                                    <li>
                                        <i className="fas fa-tag"></i>
                                        <span>tags :</span>
                                        <a href="#">dota2</a>
                                        <a href="#">esports</a>
                                        <a href="#">matches</a>
                                    </li>
                                    <li>
                                        <span>SHARE :</span>
                                        <div className="blog-post-share">
                                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                                            <a href="#"><i className="fab fa-twitter"></i></a>
                                            <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="blog-comment mb-75">
                        <div className="sidebar-widget-title blog-details-title mb-35">
                             <h4>COMMENTS <span>(3)</span></h4> 
                        </div>
                         <ul>
                            <li>
                                <div className="comment-avatar-thumb">
                                    <img src="img/blog/comment_thumb01.jpg" alt=""/>
                                </div>
                                <div className="comment-text">
                                    <div className="comment-avatar-info">
                                        <h4><a href="#">alexander hartmann</a><span className="comment-time">10 Mar
                                                2020, 7:06 am</span></h4>
                                        <div className="comment-reply">
                                            <a href="#"><i className="fas fa-reply"></i></a>
                                        </div>
                                    </div>
                                    <p>Sapien auctor tortoris vulputate sapien tortor Sed nul congue euqua molestie
                                        grvida ipsums Curabitr lacus vitae tellus
                                        lacinia pretium.</p>
                                </div>
                            </li>
                            
                        </ul> 
                    </div>
                    {/* <div className="comment-reply-box">
                        <div className="sidebar-widget-title blog-details-title mb-35">
                             <h4>LEAVE A <span>COMMENT</span></h4> 
                        </div>
                         <form action="#" className="comment-form">
                            <textarea name="message" id="comment-message" placeholder="Your Comment"></textarea>
                            <div className="row">
                                <div className="col-md-6">
                                    <input type="text" placeholder="Your Name*">
                                </div>
                                <div className="col-md-6">
                                    <input type="email" placeholder="Your Email*">
                                </div>
                            </div>
                            <div className="comment-check-box mb-25">
                                <input type="checkbox" id="comment-check">
                                <label for="comment-check">Save my name and email in this browser for the next time
                                    I comment.</label>
                            </div>
                            <button className="btn btn-style-two">Submit</button>
                        </form>  */}
                    {/* </div>*/}
                </div> 
                <div className="col-lg-4">
                    <aside className="blog-sidebar">
                        <div className="widget mb-45">
                            <div className="sidebar-about">
                                <div className="sidebar-about-thumb">
                                    <img src="img/blog/sidebar_about_thumb.jpg" alt=""/>
                                </div>
                                <div className="sidebar-widget-title mb-15">
                                    <h4>ABOUT THE <span>AUTHOR</span></h4>
                                </div>
                                <div className="sidebar-about-content">
                                    <p>Donec orci enim, bibendum a augue quis, aliquet cursus quamPellentesq.</p>
                                </div>
                            </div>
                        </div>
                        <div className="widget mb-45">
                            <div className="sidebar-search">
                                <form action="#">
                                    <input type="text" placeholder="Type and hit enter..."/>
                                    <button><i className="fas fa-search"></i></button>
                                </form>
                            </div>
                        </div>
                        <div className="widget mb-45">
                            <div className="sidebar-widget-title mb-25">
                                <h4>category <span>post</span></h4>
                            </div>
                            <div className="sidebar-cat">
                                <ul>
                                    <li><a href="#">ESPORTS ( 12 )</a></li>
                                    <li><a href="#">play store ( 03 )</a></li>
                                    <li><a href="#">pubg ( 09 )</a></li>
                                    <li><a href="#">zombieland ( 07 )</a></li>
                                    <li><a href="#">shooting ( 02 )</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="widget mb-45">
                            <div className="sidebar-widget-title mb-25">
                                <h4>Recent <span>post</span></h4>
                            </div>
                            <div className="rc-post-list">
                                <ul>
                                    <li>
                                        <div className="rc-post-thumb">
                                            <a href="#"><img src="img/blog/rc_post_thumb01.jpg" alt=""/></a>
                                        </div>
                                        <div className="rc-post-content">
                                            <h5><a href="#">EVERYONE zombie</a></h5>
                                            <span>OCTOBER 19, 2020</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="rc-post-thumb">
                                            <a href="#"><img src="img/blog/rc_post_thumb02.jpg" alt=""/></a>
                                        </div>
                                        <div className="rc-post-content">
                                            <h5><a href="#">Archery World Tour</a></h5>
                                            <span>OCTOBER 19, 2020</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="rc-post-thumb">
                                            <a href="#"><img src="img/blog/rc_post_thumb03.jpg" alt=""/></a>
                                        </div>
                                        <div className="rc-post-content">
                                            <h5><a href="#">The Ranger Magic</a></h5>
                                            <span>OCTOBER 19, 2020</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- detailed-post area-end --> */}
</>

)}

export default DetailedPost