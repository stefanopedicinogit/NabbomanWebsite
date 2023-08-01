import React from 'react'

const Store = () => {

    return (
        <>
            <main>
                {/* <!-- breadcrumb-area --> */}
                <section class="blog-area primary-bg pt-120 pb-175" style={{ backgroundColor: '#252525' ,marginBottom:'-11.5%', overflowX:'hidden'}}>
                    <section class="breadcrumb-area breadcrumb-bg">
                        <div class="container">
                            <div class="row">
                                <div class="col-12">
                                    <div class="breadcrumb-content text-center">
                                        <h2>NABBOMAN <span>store</span></h2>
                                        <nav aria-label="breadcrumb">
                                            <ol class="breadcrumb">
                                                <li class="breadcrumb-item"><a href="index-2.html">Home</a></li>
                                                <li class="breadcrumb-item"><a href="#">pages</a></li>
                                                <li class="breadcrumb-item active" aria-current="page">store</li>
                                            </ol>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <!-- breadcrumb-area-end --> */}

                    {/* <!-- shop-area --> */}
                    <section style={{ backgroundColor: '#252525' }}>
                        <div class="container-shop">
                            <iframe allowtransparency="true" class="iframe-shop" src='https://spaces.chec.io/48074' title='storeFront' width='100%' height='100%'></iframe>
                        </div>
                    </section>
                </section>
                {/* <!-- shop-area-end --> */}

            </main>
        </>

    )
}

export default Store