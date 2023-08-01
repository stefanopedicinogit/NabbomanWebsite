import React, { useState } from 'react'
import { getPosts } from '../../services/gqlRequests';
import { useEffect } from 'react';

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);
  const [arrayPosts, setArrayPosts] = useState([]);
  const [categories, setCategories] = useState({});
  const [recentPostsState, setRecentPostsState] = useState([]);

  const onLoad = async () => {
    const results = await getPosts();
    setArrayPosts(results);
  }

  useEffect(() => {
    console.log(arrayPosts);
  }, [arrayPosts]);

  // Logic to calculate the page numbers to display for pagination
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(arrayPosts.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  // Function to handle page changes
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    onLoad();
  }, [])

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
                <h5><a href={"/blogdetails/" + post.node.id}>{post.node.title}</a></h5>
                  <span>{new Date(post.node.createdAt).toLocaleDateString()}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  
  


  function PostCard({ post }) {
    const url_to = "/blogdetails/" + post.node.id
    const date = new Date(post.node.createdAt).toLocaleString();
    return (
      <div class="blog-list-post">
        <div class="blog-list-post-thumb">
          <a href={url_to}><img src={post.node.coverImage.url} alt="" /></a>
        </div>
        <div class="blog-list-post-content" id="blog-list">
          <div class="blog-list-post-tag mb-25">
            <a>{post.node.slug}</a>
          </div>
          <h2>{post.node.title}</h2>
          <div class="blog-meta">
            <ul>
              <li>bY {post.node.author.name}</li>
              <li>{date}</li>
            </ul>
          </div>
          <div>{post.node.excerpt}</div>
        </div>
        <div class="blog-list-post-bottom">
          <ul>
            <li><a href={url_to}>more reading<i class="fas fa-angle-double-right"></i></a></li>
            <li>
              <span>SHARE :</span>
              <div class="blog-post-share">
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-pinterest-p"></i></a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }

  function PostList({ posts }) {
    arrayPosts.forEach((post, index) => {
      post.id = index + 1;
      index++
    });

    const sortedPosts = arrayPosts.sort((a, b) => {
      return new Date(b.node.createdAt) - new Date(a.node.createdAt);
    });

    // calculate start and end indexes of posts to display on the current page
    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;

    // extract the portion of the array that corresponds to the current page
    const currentPosts = sortedPosts.slice(startIndex, endIndex);

    return (
      <div className="card-deck">
        {currentPosts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    );
  }

  return (
    <>
      <section class="blog-area primary-bg pt-120 pb-175" style={{backgroundColor:'#252525'}}>
        <div class="container">

          <div class="row">
            <div class="col-lg-8">

              <PostList></PostList>

              <div class="pagination-wrap mt-60">
                <ul>
                  {pageNumbers.map((pageNumber) => (
                    <li><a key={pageNumber} onClick={() => handlePageChange(pageNumber)}>
                      {pageNumber}
                    </a></li>
                  ))}
                </ul>
              </div>
            </div>
            <div class="col-lg-4">
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
                {/* <div class="widget mb-45"> */}
                  {/* <div class="sidebar-search">
                    <form action="#">
                      <input type="text" placeholder="Type and hit enter..." />
                      <button><i class="fas fa-search"></i></button>
                    </form>
                  </div> */}
                {/* </div> */}
                {Object.keys(categories).length > 0 && <CategoryList categories={categories} />}
                {/* <div class="widget mb-45">
                  <div class="sidebar-widget-title mb-25">
                    <h4>Recent <span>post</span></h4>
                  </div>
                  <div class="rc-post-list">
                    <ul>
                      <li>
                        <div class="rc-post-thumb">
                          <a href="#"><img src="img/blog/rc_post_thumb01.jpg" alt="" /></a>
                        </div>
                        <div class="rc-post-content">
                          <h5><a href="#">EVERYONE zombie</a></h5>
                          <span>OCTOBER 19, 2020</span>
                        </div>
                      </li>
                      <li>
                        <div class="rc-post-thumb">
                          <a href="#"><img src="img/blog/rc_post_thumb02.jpg" alt="" /></a>
                        </div>
                        <div class="rc-post-content">
                          <h5><a href="#">Archery World Tour</a></h5>
                          <span>OCTOBER 19, 2020</span>
                        </div>
                      </li>
                      <li>
                        <div class="rc-post-thumb">
                          <a href="#"><img src="img/blog/rc_post_thumb03.jpg" alt="" /></a>
                        </div>
                        <div class="rc-post-content">
                          <h5><a href="#">The Ranger Magic</a></h5>
                          <span>OCTOBER 19, 2020</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div> */}
                {recentPostsState.length > 0 && <RecentPosts posts={recentPostsState} />}
              </aside>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- blog-area-end --> */}
    </>
  )
}

export default Blog