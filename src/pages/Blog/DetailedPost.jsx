import React, { useEffect, useState } from 'react'
import { getPosts } from '../../services/gqlRequests';
import styled from 'styled-components';

const Breadcrumb = styled.div`
  background-image: url(${props => props.bgImage});
  padding-top: 275px;
  padding-bottom: 50px;
  background-position: center;
  background-size: cover;
  opacity: 0.88;
`;

const DetailedPost = () => {
    const [arrayPosts, setArrayPosts] = useState([]);
    const [detailedPost, setDetailedPost] = useState({});
    const [categories, setCategories] = useState({});
    const [recentPostsState, setRecentPostsState] = useState([]);
    const [bgImage, setBgImage] = useState('');

    const onLoad = async () => {
        const results = await getPosts();
        setArrayPosts(results);
    }

    function CategoryList({ categories }) {
        return (
            <>
                <div class="widget mb-45">
                    <div class="sidebar-widget-title mb-25">
                        <h4>CATEGORY POST<span> COUNTER</span></h4>
                    </div>
                    <div class="sidebar-cat">
                        <ul>
                            {categories && Object.keys(categories).map(category => (
                                <li key={category}>{category} ( {categories[category]} )</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </>
        )
    }

    function RecentPosts({ posts }) {
        return (
            <div className="widget mb-45">
                <div className="sidebar-widget-title mb-25">
                    <h4>Recent <span>post</span></h4>
                </div>
                <div className="rc-post-list">
                    <ul>
                        {posts.map(post => (
                            <li key={post.node.id}>
                                {/* <div className="rc-post-thumb" style={{width:'50px', height:'50px'}}>
                      {post.node.coverImage && (
                        <a href="#"><img src={post.node.coverImage.url} alt="" /></a>
                      )}
                    </div> */}
                                <div className="rc-post-content">
                                    <h5><a href={"/blog-details/" + post.node.id}>{post.node.title}</a></h5>
                                    <span>{new Date(post.node.createdAt).toLocaleDateString()}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }

    useEffect(() => {
        const categoryCount = {};
        arrayPosts.forEach(post => {
            if (categoryCount[post.node.slug]) {
                categoryCount[post.node.slug]++;
            } else {
                categoryCount[post.node.slug] = 1;
            }
        });
        setCategories(categoryCount);
    }, [arrayPosts]);


    useEffect(() => {
        if (!arrayPosts || !Array.isArray(arrayPosts)) {
            return null;
        }
        const sortedPosts = arrayPosts.sort((a, b) => {
            return new Date(b.node.createdAt) - new Date(a.node.createdAt);
        });
        const recentPosts = sortedPosts.slice(0, 3);
        setRecentPostsState(recentPosts)
        console.log(recentPostsState)
    }, [arrayPosts])

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
            setBgImage(myDetailedPost.node.coverImage.url);
        }
    }, [arrayPosts]);


    return (
        <>
            <section class="breadcrumb-area">
                <Breadcrumb bgImage={bgImage}>
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <div class="breadcrumb-content text-center">
                                    <h2>DETAILED <span>POST</span></h2>
                                    <nav aria-label="breadcrumb">
                                        <ol class="breadcrumb">
                                            <li class="breadcrumb-item"><a href="index-2.html">Home</a></li>
                                            <li class="breadcrumb-item"><a href="#">pages</a></li>
                                            <li class="breadcrumb-item active" aria-current="page">BLOG</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </Breadcrumb>
            </section>
            {/* detailed-post-area */}
            <section className="blog-area primary-bg pt-120 pb-175" style={{ backgroundColor: '#252525' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="blog-list-post blog-details-wrap " style={{ backgroundColor: '#252525' }}>
                                <div className="blog-list-post-content">
                                    <div className="blog-list-post-tag mb-25">
                                    </div>
                                    {detailedPost && detailedPost.node && detailedPost.node.title && (
                                        <h3>{detailedPost.node.title}</h3>
                                    )}
                                    <div className="blog-meta">
                                        <ul>
                                            <li>bY <a href="#">EMANUELE FRASCA</a> 22 FEBBRAIO 2023</li>
                                        </ul>
                                    </div>
                                    <blockquote>
                                        {detailedPost && detailedPost.node && detailedPost.node.excerpt && (
                                            <h5>
                                                {detailedPost.node.excerpt}
                                            </h5>
                                        )}
                                </blockquote>
                                {detailedPost && detailedPost.node && detailedPost.node.content && (
                                    <p>{detailedPost.node.content.text}</p>
                                )}
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="blog-details-img">
                                            <img src="img/blog/blog_details_img01.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="blog-details-img">
                                            <img src="img/blog/blog_details_img02.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="blog-list-post-bottom">
                                    <ul>
                                        <li>
                                            <i className="fas fa-tag"></i>
                                            {detailedPost && detailedPost.node && Array.isArray(detailedPost.node.tags) && (
                                                <div>
                                                    <span style={{ color: '#fff' }}>tags:</span>
                                                    {detailedPost.node.tags.map((tag, index) => (
                                                        <a key={index} href="#"> {tag} </a>
                                                    ))}
                                                </div>
                                            )}
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
                        {/* <div className="blog-comment mb-75">
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
                    </div> */}
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
                        <aside class="blog-sidebar">
                            <div class="widget mb-45">
                                <div class="sidebar-about">
                                    <div class="sidebar-about-thumb">
                                        <img src="img/blog/sidebar_about_thumb.jpg" alt="" />
                                    </div>
                                    <div class="sidebar-widget-title mb-15">
                                        <h4>ABOUT THE <span>AUTHOR</span></h4>
                                    </div>
                                    <div class="sidebar-about-content">
                                        <p>Donec orci enim, bibendum a augue quis, aliquet cursus quamPellentesq.</p>
                                    </div>
                                </div>
                            </div>
                            {Object.keys(categories).length > 0 && <CategoryList categories={categories} />}
                            {recentPostsState.length > 0 && <RecentPosts posts={recentPostsState} />}
                        </aside>
                    </div>
                </div>
            </div>
        </section >
            {/* <!-- detailed-post area-end --> */ }
        </>

    )
}

export default DetailedPost