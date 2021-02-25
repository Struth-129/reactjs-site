import React from "react";
import imghome from "./images/3.png";


const Home = () => {
    return(
        <>
           <section id="header" className="d-flex align-item-center tope_header">
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                        <div className="col-md-6 pt-6 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                            <h1><strong> This is my </strong><strong className="brand-name">ReactJs</strong><strong> project </strong></h1>
                            <h2 className="my-3"><strong> I am an enthusiastic developer and coder </strong></h2>
                            <div className="mt-3">
                                <a href="https://github.com/Struth-129" target="_blank" className="btn-get-started">To Github</a>
                            </div> 
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 header-img">
                            <img src={imghome} className="img-fluid animated" alt="home img" width="550" height="550" />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </>
    )
}

export default Home;